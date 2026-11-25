(() => {
  document.addEventListener('click', async (event) => {
    const button = event.target.closest('[data-copy-cli]');
    if (!button) return;

    const code = document.getElementById(button.dataset.copyCli);
    const status = button.parentElement.querySelector('.repeater-copy-status');
    if (!code || !status) return;

    try {
      await navigator.clipboard.writeText(code.textContent.trim());
      status.textContent = 'Commandes copiées.';
    } catch (_) {
      status.textContent = 'Copie indisponible. Sélectionnez le bloc de commandes pour le copier.';
    }
  });
})();
