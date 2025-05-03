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

  // Wait for all videos to be ready
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

  // Minimum loading time (e.g., 1.5s)
  setTimeout(() => {
    minTimePassed = true;
    tryHideOverlay();
  }, 1500);
}); 