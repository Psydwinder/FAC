import { createNavItems, deactivateNavMenu } from "./Nav.js";
import { resizeCanvas } from "./Background.js";
import { displayProjects } from "./Projects.js";
import { revealElementsOnScroll, revealNavOnScrollUp } from "./Scroll.js";

window.addEventListener("load", handleLoad);
window.addEventListener("resize", handleResize);
window.addEventListener("scroll", handleScroll);

function handleLoad() {
  const loaderDiv = document.querySelector(".loader");
  loaderDiv.classList.add("loaded");
  resizeCanvas();
  revealElementsOnScroll();
  revealNavOnScrollUp();
  createNavItems();
  displayProjects();
}

function handleResize() {
  resizeCanvas();
  deactivateNavMenu();
}

function handleScroll() {
  revealElementsOnScroll();
  revealNavOnScrollUp();
}
