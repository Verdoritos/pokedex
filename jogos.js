function toggleMenu() {
    var ul = document.querySelector(".menu-list");
    ul.classList.toggle("active");
}

$("#menu").load("menu.html");

var audio = document.getElementById("myAudio");

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}