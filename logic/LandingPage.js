window.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("loading-overlay");
  const videos = document.querySelectorAll("video");
  let loadedVideos = 0;
  const minLoadTime = 1000;
  const loadStartTime = Date.now();

  function hideOverlay() {
    const timeDifference = Date.now() - loadStartTime;
    const remainingTime = Math.max(0, minLoadTime - timeDifference);

    setTimeout(() => {
      overlay.classList.add("hide");
      setTimeout(() => {
        overlay.style.display = "none";
        document.body.classList.add("loaded");
      }, 800);
    }, remainingTime);
  }

  function checkVideosLoaded() {
    loadedVideos++;
    if (loadedVideos === videos.length) {
      hideOverlay();
    }
  }

  videos.forEach((video) => {
    if (video.readyState >= 3) {
      checkVideosLoaded();
    } else {
      video.addEventListener("canplaythrough", checkVideosLoaded);
    }
  });

  setTimeout(() => {
    if (loadedVideos < videos.length) {
      hideOverlay();
    }
  }, 10000);
});


// EXPLAINATION COMMENT FOR PRESENTATION
// SOURCE: https://www.w3schools.com/Jsref/prop_video_readystate.asp
// SOURCE: https://www.w3schools.com/jsref/jsref_max.asp

// Math.max() returns the highest value in a list of arguments.

// Video tag readyState DOM Browser Property:
// 0 means the video has no data available.
// 1 means the metadata like duration and dimensions are available.
// 2 means enough data is available to play media but not enough for smooth playback.
// 3 means enough data is available for smooth playback but not the entire video.
// 4 means enough data is loaded to play the video to the end.
