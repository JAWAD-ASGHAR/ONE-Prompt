// Here i am getting the relevent elements on content load
window.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("loading-overlay");
  const videos = document.querySelectorAll("video");
  let loadedVideos = 0;
  // Here i am tracking loading times
  const minLoadTime = 1000;
  const loadStartTime = Date.now();

  function hideOverlay() {
    // tracking time difference from starting time and function call time
    const timeDifference = Date.now() - loadStartTime;
    const remainingTime = Math.max(0, minLoadTime - timeDifference);

    // time out to atleast show for minimun time
    setTimeout(() => {
      overlay.classList.add("hide");
      //another time out for smooth animation transition
      //the overlay takes 800ms to transition so i am using 800ms delay
      //before loading body content
      setTimeout(() => {
        overlay.style.display = "none";
        document.body.classList.add("loaded");
      }, 800);
    }, remainingTime);
  }

  function checkVideosLoaded() {
    loadedVideos++;
    // when all videos are loaded hide overlay
    if (loadedVideos === videos.length) {
      hideOverlay();
    }
  }

  videos.forEach((video) => {
    //checking for video smooth playback load
    // if checks instantly for ready videos
    // if not then attach a listener to the video in else block
    if (video.readyState >= 3) {
      checkVideosLoaded();
    } else {
      video.addEventListener("canplaythrough", checkVideosLoaded);
    }
  });

  // max loading time is 10s for all videos to load
  // else hiding the overlay
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
