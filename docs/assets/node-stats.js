(function () {
  'use strict';

  const meshcoreEndpoint = 'https://map.meshcore.io/api/v1/nodes?short=1';
  const umapEndpoint = 'https://umap.openstreetmap.fr/fr/map/1488925/geojson/';
  const normandyBoundaryEndpoint = 'https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/regions/normandie/region-normandie.geojson';
  const refreshEveryMs = 5 * 60 * 1000;
  const numberFormat = new Intl.NumberFormat('fr-FR');
  const nodesById = {
    repeaters: document.querySelector('[data-node-stat="repeaters"]'),
    companions: document.querySelector('[data-node-stat="companions"]'),
    total: document.querySelector('[data-node-stat="total"]'),
    week: document.querySelector('[data-node-stat="week"]'),
    month: document.querySelector('[data-node-stat="month"]'),
    updated: document.querySelector('[data-node-stat="updated"]'),
    status: document.querySelector('[data-node-stat="status"]')
  };
  if (!nodesById.repeaters) return;

  function value(node, short, full) {
    return node && (node[short] ?? node[full]);
  }

  function dateValue(node) {
    return value(node, 'id', 'inserted_date');
  }

  function setValue(key, number) {
    if (nodesById[key]) nodesById[key].textContent = numberFormat.format(number);
  }

  function pointInRing(point, ring) {
    let inside = false;
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
      const xi = ring[i][0], yi = ring[i][1];
      const xj = ring[j][0], yj = ring[j][1];
      const intersects = ((yi > point[1]) !== (yj > point[1]))
        && point[0] < ((xj - xi) * (point[1] - yi)) / (yj - yi) + xi;
      if (intersects) inside = !inside;
    }
    return inside;
  }

  function pointInNormandy(point, boundary) {
    const geometry = boundary && boundary.geometry;
    if (!geometry || !point) return false;
    const polygons = geometry.type === 'Polygon' ? [geometry.coordinates] : geometry.coordinates;
    return polygons.some((polygon) => pointInRing(point, polygon[0])
      && !polygon.slice(1).some((hole) => pointInRing(point, hole)));
  }

  function coordinatesOf(node) {
    const coordinates = node && (node.coordinates || node.coords || node.location);
    if (Array.isArray(coordinates) && coordinates.length >= 2) {
      const lon = Number(coordinates[0]);
      const lat = Number(coordinates[1]);
      return Number.isFinite(lon) && Number.isFinite(lat) ? [lon, lat] : null;
    }
    const lat = Number(node && (node.lat ?? node.latitude ?? node.la ?? node.y));
    const lon = Number(node && (node.lon ?? node.lng ?? node.longitude ?? node.lo ?? node.x));
    return Number.isFinite(lon) && Number.isFinite(lat) ? [lon, lat] : null;
  }

  function normalize(value) {
    return String(value || '').trim().toLocaleLowerCase('fr-FR').replace(/\s+/g, ' ');
  }

  function featureText(feature) {
    const properties = feature && feature.properties ? feature.properties : {};
    return Object.values(properties).filter((value) => typeof value === 'string').join(' ');
  }

  function featureName(feature) {
    const properties = feature && feature.properties ? feature.properties : {};
    return properties.name || properties.nom || properties.title || properties.titre || '';
  }

  function featureDate(feature) {
    const properties = feature && feature.properties ? feature.properties : {};
    const values = Object.entries(properties)
      .filter(([key]) => /date|pose|install|deploy|ajout|created/i.test(key))
      .map(([, value]) => value);
    const text = `${values.join(' ')} ${featureText(feature)}`;
    const match = text.match(/\b(20\d{2})[-/]([01]\d)[-/]([0-3]\d)\b/);
    return match ? `${match[1]}-${match[2]}-${match[3]}` : '';
  }

  function isProject(feature) {
    return /projet|prévu|prevu|à venir|a venir|envisag|étude|etude/i.test(featureText(feature));
  }

  function roleOf(feature) {
    const text = featureText(feature);
    if (/repeater|répéteur|repeteur|relais/i.test(text)) return 'repeater';
    if (/companion|client/i.test(text)) return 'companion';
    return 'other';
  }

  function isPointFeature(feature) {
    return feature && feature.geometry && feature.geometry.type === 'Point';
  }

  function uMapRecords(collection) {
    const isMapSettingsFeature = collection && collection.type === 'Feature'
      && collection.properties
      && (collection.properties.zoom !== undefined || collection.properties.center !== undefined || collection.properties.permissions);
    const features = collection && collection.type === 'Feature' && !isMapSettingsFeature
      ? [collection]
      : Array.isArray(collection && collection.features) ? collection.features : [];
    return features.filter(isPointFeature).map((feature) => ({
      source: 'uMap',
      name: featureName(feature),
      key: normalize(featureName(feature)),
      role: roleOf(feature),
      project: isProject(feature),
      inserted: featureDate(feature)
    }));
  }

  function meshCoreRecords(nodes, boundary) {
    return nodes.filter((node) => pointInNormandy(coordinatesOf(node), boundary)).map((node) => ({
      source: 'MeshCore',
      name: value(node, 'n', 'adv_name'),
      key: normalize(value(node, 'n', 'adv_name')),
      role: Number(value(node, 't', 'type')) === 2 ? 'repeater' : Number(value(node, 't', 'type')) === 1 ? 'companion' : 'other',
      project: false,
      inserted: dateValue(node)
    }));
  }

  function mergeRecords(meshcoreNodes, umapCollection, boundary) {
    const merged = meshCoreRecords(meshcoreNodes, boundary);
    const knownKeys = new Set(merged.map((record) => record.key).filter(Boolean));
    for (const record of uMapRecords(umapCollection)) {
      if (record.key && knownKeys.has(record.key)) continue;
      if (record.key) knownKeys.add(record.key);
      merged.push(record);
    }
    return merged;
  }

  function addedSince(records, timestamp) {
    return records.filter((record) => {
      if (record.project) return false;
      const date = Date.parse(record.inserted || '');
      return Number.isFinite(date) && date >= timestamp;
    }).length;
  }

  async function update() {
    nodesById.status.textContent = 'Actualisation des données MeshCore et uMap…';
    const [meshcoreResult, umapResult, boundaryResult] = await Promise.allSettled([
      fetch(meshcoreEndpoint, { cache: 'no-store' }).then((response) => {
        if (!response.ok) throw new Error(`MeshCore HTTP ${response.status}`);
        return response.json();
      }),
      fetch(umapEndpoint, { cache: 'no-store' }).then((response) => {
        if (!response.ok) throw new Error(`uMap HTTP ${response.status}`);
        return response.json();
      }),
      fetch(normandyBoundaryEndpoint, { cache: 'force-cache' }).then((response) => {
        if (!response.ok) throw new Error(`Normandie HTTP ${response.status}`);
        return response.json();
      })
    ]);

    if (meshcoreResult.status !== 'fulfilled') {
      nodesById.status.textContent = 'Les données MeshCore sont momentanément indisponibles. Consultez la carte officielle.';
      console.warn('Impossible de charger les statistiques MeshCore', meshcoreResult.reason);
      return;
    }

    const meshcoreNodes = Array.isArray(meshcoreResult.value) ? meshcoreResult.value : [];
    const umapCollection = umapResult.status === 'fulfilled' ? umapResult.value : null;
    const boundary = boundaryResult.status === 'fulfilled' ? boundaryResult.value : null;
    if (!boundary) {
      nodesById.status.textContent = 'Limites de la Normandie indisponibles : compteurs MeshCore non calculés.';
      return;
    }
    const records = mergeRecords(meshcoreNodes, umapCollection, boundary);
    const repeaters = records.filter((record) => record.role === 'repeater' && !record.project).length;
    const companions = records.filter((record) => record.role === 'companion' && !record.project).length;
    const now = Date.now();

    setValue('repeaters', repeaters);
    setValue('companions', companions);
    setValue('total', records.filter((record) => !record.project).length);
    setValue('week', addedSince(records, now - 7 * 24 * 60 * 60 * 1000));
    setValue('month', addedSince(records, now - 30 * 24 * 60 * 60 * 1000));
    nodesById.updated.textContent = new Date().toLocaleString('fr-FR', { dateStyle: 'short', timeStyle: 'short' });
    nodesById.status.textContent = umapResult.status === 'fulfilled'
      ? 'Données MeshCore de Normandie et uMap chargées.'
      : 'Données MeshCore de Normandie chargées ; uMap est privée ou momentanément indisponible.';
  }

  update().catch((error) => {
    nodesById.status.textContent = 'Les données en direct sont momentanément indisponibles. Consultez les cartes officielles.';
    console.warn('Impossible de charger les statistiques des cartes', error);
  });
  window.setInterval(update, refreshEveryMs);
})();
