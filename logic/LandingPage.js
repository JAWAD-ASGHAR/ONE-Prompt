window.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('loading-overlay');

  function hideOverlay() {
    overlay.classList.add('hide');
    setTimeout(() => {
      overlay.style.display = 'none';
      document.body.classList.add('loaded');
    }, 800);
  }

  setTimeout(() => {
    hideOverlay();
  }, 3000);
});