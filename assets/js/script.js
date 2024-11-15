const navBar = document.querySelector(".nav-bar");
const menu_on = document.querySelector(".menu-on");
const header = document.querySelector("header");
const body = document.querySelector("body");
if (navBar) {
  navBar.addEventListener("click", function () {
    navBar.classList.toggle("open");
    menu_on.classList.toggle("menu-mobile");
    header.classList.toggle("menu-open");
    body.classList.toggle("body-open");
  });
}

const video = document.getElementById("video");
const overlay = document.querySelector(".overlay");
const videoContainer = document.querySelector(".video-container");

video.addEventListener("play", () => {
  overlay.classList.add("active");
  videoContainer.classList.add("active");
});

video.addEventListener("pause", () => {
  overlay.classList.remove("active");
  videoContainer.classList.remove("active");
});

video.addEventListener("ended", () => {
  overlay.classList.remove("active");
  videoContainer.classList.remove("active");
});
