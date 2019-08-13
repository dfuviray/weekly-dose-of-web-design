const container = document.querySelector(".container");
const nav = document.querySelector(".nav");

container.addEventListener("click", function(e) {
  const isClick = e.target.matches(".burger-nav, .burger-nav *");
  if (isClick) {
    nav.classList.toggle("active");
  }
});
