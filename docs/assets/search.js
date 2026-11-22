(function () {
  'use strict';

  const form = document.querySelector('[data-search-page-form]') || document.querySelector('[data-search-form]');
  const input = form && form.querySelector('[data-search-input]');
  const results = document.querySelector('[data-search-results]');
  const status = document.querySelector('[data-search-status]');
  if (!form || !input || !results || !status || typeof WIKI_SEARCH_INDEX === 'undefined') return;

  const normalize = (value) => (value || '')
    .toLocaleLowerCase('fr-FR')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  const params = new URLSearchParams(window.location.search);
  const requestedQuery = params.get('q') || '';
  input.value = requestedQuery;

  function excerpt(text, query) {
    const clean = (text || '').replace(/\s+/g, ' ').trim();
    const position = normalize(clean).indexOf(normalize(query));
    if (position < 0) return clean.slice(0, 190) + (clean.length > 190 ? '…' : '');
    const start = Math.max(0, position - 70);
    const end = Math.min(clean.length, position + query.length + 120);
    return (start > 0 ? '…' : '') + clean.slice(start, end) + (end < clean.length ? '…' : '');
  }

  function render(query) {
    const normalizedQuery = normalize(query).trim();
    results.innerHTML = '';
    if (!normalizedQuery) {
      status.textContent = 'Saisissez un mot ou une expression pour rechercher dans le wiki.';
      return;
    }

    const terms = normalizedQuery.split(/\s+/).filter(Boolean);
    const matches = WIKI_SEARCH_INDEX
      .map((item) => {
        const title = normalize(item.title);
        const text = normalize(item.text);
        const score = terms.reduce((total, term) => total + (title.includes(term) ? 5 : 0) + (text.includes(term) ? 1 : 0), 0);
        return { item, score, complete: terms.every((term) => title.includes(term) || text.includes(term)) };
      })
      .filter((entry) => entry.complete)
      .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title, 'fr'))
      .slice(0, 30);

    status.textContent = matches.length
      ? `${matches.length} résultat${matches.length > 1 ? 's' : ''} pour « ${query} ».`
      : `Aucun résultat pour « ${query} ». Essayez un autre mot, comme MeshCore, répéteur, antenne ou Normandie.`;

    matches.forEach(({ item }) => {
      const card = document.createElement('article');
      card.className = 'search-result';
      const link = document.createElement('a');
      link.href = item.url;
      link.textContent = item.title;
      const description = document.createElement('p');
      description.textContent = excerpt(item.text, query);
      card.append(link, description);
      results.appendChild(card);
    });
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = input.value.trim();
    const url = new URL(form.action, window.location.origin);
    if (query) url.searchParams.set('q', query);
    else url.searchParams.delete('q');
    window.location.href = url.toString();
  });

  render(requestedQuery);
})();
