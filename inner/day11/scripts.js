//get our elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

//build our functions
function togglePlay() {
  const toggler = video.paused ? "play" : "pause";
  video[toggler]();
}

function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

//hook it up with event listeners
//event listeners for clicking the video itself, and checking if it's playing or paused.
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
//timeupdate/progress do the same thing occurs when the video updates its time code.
video.addEventListener("timeupdate", handleProgress);
toggle.addEventListener("click", togglePlay);
skipButtons.forEach((button) => button.addEventListener("click", skip));
//event listeners for the range sliders: volume and playback
ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
ranges.forEach((range) =>
  range.addEventListener("mousemove", handleRangeUpdate)
);

//event listener for the progress bar
let mousedown = false;
progress.addEventListener("click", scrub);
//checks if mousedown is true first, then if it passes it does the scrub function.
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));

//STRETCH: fullscreen button
// const fullscreenButton = document.querySelector(".player__fullscreen");
// let fullscreen = false;
// fullscreenButton.addEventListener("click", handleFullscreen);

// function handleFullscreen() {
//     var elem = video;
//     if ((fullscreen = false)) {
//         if (elem.requestFullscreen) {
//             elem.requestFullscreen();
//         } else if (elem.mozRequestFullScreen) {
//             /* Firefox */
//             elem.mozRequestFullScreen();
//         } else if (elem.webkitRequestFullscreen) {
//             /* Chrome, Safari & Opera */
//             elem.webkitRequestFullscreen();
//         } else if (elem.msRequestFullscreen) {
//             /* IE/Edge */
//             elem.msRequestFullscreen();
//         }
//         fullscreen = true;
//     } else if ((fullscreen = true)) {
//         document.exitFullscreen();
//         fullscreen = false;
//     }
// }
