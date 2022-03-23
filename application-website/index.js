import { createNavItems, deactivateNavMenu } from "./scripts/Nav.js";
import { adjustCanvasSize } from "./scripts/Background.js";
import { displayProjects } from "./scripts/Projects.js";
import { revealElementsOnScroll } from "./scripts/Scroll.js";

window.addEventListener("load", handleLoad);
window.addEventListener("resize", handleResize);
window.addEventListener("scroll", handleScroll);

function handleLoad() {
  const loaderDiv = document.querySelector(".loader");
  loaderDiv.classList.add("loaded");
  adjustCanvasSize();
  revealElementsOnScroll();
  createNavItems();
  displayProjects();
}

function handleResize() {
  adjustCanvasSize();
  deactivateNavMenu();
}

function handleScroll() {
  revealElementsOnScroll();
  hideOrShowNav();
}
