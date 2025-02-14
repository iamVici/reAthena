document.querySelector('.char-main-banner-area').addEventListener('click', function () {
  window.location.href = 'https://www.example.com';
});

document.getElementById('playButton').addEventListener('click', function (event) {
  event.stopPropagation();
  var video = document.getElementById('bgVideo');
  var cover = document.getElementById('videoCover');
  var playButton = document.getElementById('playButton');
  if (video.paused) {
    video.style.display = 'block';
    cover.style.display = 'none';
    video.muted = false;
    video.play();
    playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
  } else {
    video.pause();
    playButton.innerHTML = '<i class="bi bi-play-fill"></i>';
  }
});