const container = document.querySelector(".main");
const menuContainer = document.querySelector(".menu-container");
const menuBtn = document.querySelector(".menu-button");
const menuBar = document.querySelector(".menu-bar");
const navBtn = document.querySelectorAll(".navigation__btn");
const image = document.querySelector(".product__image");

container.addEventListener("click", function(e) {
  const button = e.target.matches(".menu-button, .menu-button *");
  if (button) {
    menuContainer.classList.toggle("active");
    menuBar.classList.toggle("active");
  }
});

container.addEventListener("click", function(e) {
  const nav = e.target.matches(".navigation__btn");
  if (nav) {
    e.preventDefault;
    image.classList.remove("active");
    void image.offsetWidth;
    image.classList.add("active");
  }
});


