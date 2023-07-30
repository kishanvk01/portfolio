
  function toggleVideo(videoWrapper) {
    const video = videoWrapper.querySelector('.video');
    const playButton = videoWrapper.querySelector('.play-button');
    const thumbnail = videoWrapper.querySelector('.thumbnail');
  
    if (video.paused) {
      video.play();
      playButton.style.opacity = 0; // Hide play button when video is playing
      thumbnail.style.display = 'none'; // Hide the thumbnail when video is playing
    } else {
      video.pause();
      playButton.style.opacity = 1; // Show play button when video is paused
      thumbnail.style.display = 'block'; // Show the thumbnail when video is paused
    }
  }
  