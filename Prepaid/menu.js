const container = document.querySelector(".container");
const nav = document.querySelector(".menu");

container.addEventListener("click", function(e) {
  const isClick = e.target.matches(".nav-bar__menu-btn, .nav-bar__menu-btn *");
  if (isClick) {
    nav.classList.toggle("active");
  }
});
