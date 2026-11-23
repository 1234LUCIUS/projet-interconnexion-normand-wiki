(function () {
  'use strict';

  const endpoint = 'https://map.meshcore.io/api/v1/nodes?short=1';
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

  async function update() {
    nodesById.status.textContent = 'Actualisation des données MeshCore…';
    try {
      const response = await fetch(endpoint, { cache: 'no-store' });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const nodes = await response.json();
      const repeaters = nodes.filter((node) => Number(value(node, 't', 'type')) === 2);
      const companions = nodes.filter((node) => Number(value(node, 't', 'type')) === 1);
      const now = Date.now();
      const sinceWeek = now - 7 * 24 * 60 * 60 * 1000;
      const sinceMonth = now - 30 * 24 * 60 * 60 * 1000;
      const addedSince = (timestamp) => nodes.filter((node) => {
        const date = Date.parse(dateValue(node) || '');
        return Number.isFinite(date) && date >= timestamp;
      }).length;

      setValue('repeaters', repeaters.length);
      setValue('companions', companions.length);
      setValue('total', nodes.length);
      setValue('week', addedSince(sinceWeek));
      setValue('month', addedSince(sinceMonth));
      nodesById.updated.textContent = new Date().toLocaleString('fr-FR', {
        dateStyle: 'short', timeStyle: 'short'
      });
      nodesById.status.textContent = 'Données publiques MeshCore chargées.';
    } catch (error) {
      nodesById.status.textContent = 'Les données en direct sont momentanément indisponibles. Consultez la carte MeshCore officielle.';
      console.warn('Impossible de charger les statistiques MeshCore', error);
    }
  }

  update();
  window.setInterval(update, refreshEveryMs);
})();
