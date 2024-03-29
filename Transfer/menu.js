const container = document.querySelector(".container");
const navContainer = document.querySelector(".nav-container");
const navMenu = document.querySelector(".nav__menu");
const navMenuButton = document.querySelector(".nav__menu-button");

// navMenuButton.addEventListener("click", e => {
//   navMenuButton.classList.toggle("active");
//   navMenu.classList.toggle("active");
//   navContainer.classList.toggle("active");
// });

container.addEventListener("click", function(e) {
  const button = e.target.matches(".nav__menu-button, .nav__menu-button *");
  if (button) {
    navMenuButton.classList.toggle("active");
    navMenu.classList.toggle("active");
    navContainer.classList.toggle("active");
  }
});
