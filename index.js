// VIDEO \\
document.querySelector("#video_index").addEventListener("click", togglePlayPause);

function togglePlayPause() {
  if (video_index.paused) {
    video_index.play();
  } else {
    video_index.pause();
  }
}
