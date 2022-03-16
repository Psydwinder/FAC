const nav = document.querySelector("nav");
const navIconDiv = document.querySelector(".nav__icon");

navIconDiv.addEventListener("click", toggleMenu);

function toggleMenu() {
  nav.classList.toggle("nav--active");
}
