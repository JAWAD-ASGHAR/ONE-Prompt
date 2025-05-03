window.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('loading-overlay');
  const videos = Array.from(document.querySelectorAll('video'));
  let loaded = 0;
  let minTimePassed = false;

  function tryHideOverlay() {
    if (loaded === videos.length && minTimePassed) {
      overlay.classList.add('hide');
      setTimeout(() => {
        overlay.style.display = 'none';
        document.body.classList.add('loaded');
      }, 800);
    }
  }

  videos.forEach(video => {
    if (video.readyState >= 3) {
      loaded++;
      tryHideOverlay();
    } else {
      video.addEventListener('canplaythrough', () => {
        loaded++;
        tryHideOverlay();
      }, { once: true });
    }
  });

  setTimeout(() => {
    minTimePassed = true;
    tryHideOverlay();
  }, 1500);
}); 