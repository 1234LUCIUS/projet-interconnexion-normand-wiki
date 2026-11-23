(function () {
  'use strict';

  const meshqualEndpoint = 'https://api.meshqual.pmrs.fr/api/nodes?bbox=-2.5,48.8,2,50.3';
  const relayLensEndpoint = 'https://relaylens.mesh.chaun14.fr/api/map/features?west=-2.5&south=48.8&east=2&north=50.3&zoom=8&max=400';
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

  function setValue(key, number) {
    if (nodesById[key]) nodesById[key].textContent = numberFormat.format(number);
  }

  function setText(key, text) {
    if (nodesById[key]) nodesById[key].textContent = text;
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

  function makeRecord({ name, publicKey, role, project = false, inserted = '' }) {
    return {
      source: 'MeshCore',
      name: name || '',
      key: normalize(publicKey) || normalize(name),
      nameKey: normalize(name),
      role,
      project,
      inserted
    };
  }

  function meshQualRecords(collection, boundary) {
    const features = Array.isArray(collection && collection.features) ? collection.features : [];
    return features.filter((feature) => isPointFeature(feature) && pointInNormandy(feature.geometry.coordinates, boundary)).map((feature) => {
      const properties = feature.properties || {};
      return { ...makeRecord({
        name: properties.name,
        publicKey: properties.key,
        role: /repeater/i.test(properties.nodeType || '') ? 'repeater' : /companion|client/i.test(properties.nodeType || '') ? 'companion' : 'other'
      }), source: 'MeshQual' };
    });
  }

  function relayLensRecords(collection, boundary) {
    const nodes = Array.isArray(collection && collection.nodes) ? collection.nodes : [];
    return nodes.filter((node) => pointInNormandy([Number(node.longitude), Number(node.latitude)], boundary)).map((node) => ({
      ...makeRecord({
        name: node.name,
        publicKey: node.publicKey,
        role: Number(node.nodeType) === 2 ? 'repeater' : Number(node.nodeType) === 1 ? 'companion' : 'other'
      }),
      source: 'RelayLens'
    }));
  }

  function mergeRecords(meshqualCollection, relayLensCollection, boundary) {
    const merged = [];
    const knownKeys = new Set(merged.flatMap((record) => [record.key, record.nameKey]).filter(Boolean));
    for (const record of [...meshQualRecords(meshqualCollection, boundary), ...relayLensRecords(relayLensCollection, boundary)]) {
      if ((record.key && knownKeys.has(record.key)) || (record.nameKey && knownKeys.has(record.nameKey))) continue;
      if (record.key) knownKeys.add(record.key);
      if (record.nameKey) knownKeys.add(record.nameKey);
      merged.push(record);
    }
    return merged;
  }

  async function update() {
    nodesById.status.textContent = 'Actualisation des données MeshQual et RelayLens…';
    const [meshqualResult, relayLensResult, boundaryResult] = await Promise.allSettled([
      fetch(meshqualEndpoint, { cache: 'no-store' }).then((response) => {
        if (!response.ok) throw new Error(`MeshQual HTTP ${response.status}`);
        return response.json();
      }),
      fetch(relayLensEndpoint, { cache: 'no-store' }).then((response) => {
        if (!response.ok) throw new Error(`RelayLens HTTP ${response.status}`);
        return response.json();
      }),
      fetch(normandyBoundaryEndpoint, { cache: 'force-cache' }).then((response) => {
        if (!response.ok) throw new Error(`Normandie HTTP ${response.status}`);
        return response.json();
      })
    ]);

    const meshqualCollection = meshqualResult.status === 'fulfilled' ? meshqualResult.value : null;
    const relayLensCollection = relayLensResult.status === 'fulfilled' ? relayLensResult.value : null;
    const boundary = boundaryResult.status === 'fulfilled' ? boundaryResult.value : null;
    if (!boundary) {
      nodesById.status.textContent = 'Limites de la Normandie indisponibles : compteurs MeshCore non calculés.';
      return;
    }
    const records = mergeRecords(meshqualCollection, relayLensCollection, boundary);
    const repeaters = records.filter((record) => record.role === 'repeater' && !record.project).length;
    const companions = records.filter((record) => record.role === 'companion' && !record.project).length;
    setValue('repeaters', repeaters);
    setValue('companions', companions);
    setValue('total', records.filter((record) => !record.project).length);
    setText('week', 'n/d');
    setText('month', 'n/d');
    nodesById.updated.textContent = new Date().toLocaleString('fr-FR', { dateStyle: 'short', timeStyle: 'short' });
    const sourceCount = [meshqualResult, relayLensResult].filter((result) => result.status === 'fulfilled').length;
    nodesById.status.textContent = `Données MeshCore normandes chargées depuis ${sourceCount} source(s) publique(s). Historique d’ajout non fourni.`;
  }

  update().catch((error) => {
    nodesById.status.textContent = 'Les données en direct sont momentanément indisponibles. Consultez les cartes officielles.';
    console.warn('Impossible de charger les statistiques des cartes', error);
  });
  window.setInterval(update, refreshEveryMs);
})();
