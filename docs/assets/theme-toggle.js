(() => {
  const root = document.documentElement;
  const button = document.querySelector('[data-theme-toggle]');
  if (!button) return;

  const label = button.querySelector('[data-theme-label]');
  const syncButton = () => {
    const dark = root.dataset.theme === 'dark';
    button.setAttribute('aria-pressed', String(dark));
    button.setAttribute('aria-label', dark ? 'Désactiver le mode sombre' : 'Activer le mode sombre');
    if (label) label.textContent = dark ? 'Mode clair' : 'Mode sombre';
  };

  button.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    if (nextTheme === 'dark') root.setAttribute('data-theme', 'dark');
    else root.removeAttribute('data-theme');
    try {
      localStorage.setItem('pin-wiki-theme', nextTheme);
    } catch (_) {
      // La bascule reste effective pendant cette visite si le stockage est bloqué.
    }
    syncButton();
  });

  syncButton();
})();
