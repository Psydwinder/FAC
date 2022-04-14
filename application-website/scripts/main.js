import { createNavItems, deactivateNavMenu } from "./Nav.js";
import { resizeBackground } from "./Background.js";
import { displayProjects } from "./Projects.js";
import { revealElementsOnScroll, revealNavOnScrollUp } from "./Scroll.js";
import "./Game.js";

window.addEventListener("load", handleLoad);
window.addEventListener("resize", handleResize);
window.addEventListener("scroll", handleScroll);

function handleLoad() {
  const loaderDiv = document.querySelector(".loader");
  loaderDiv.classList.add("loaded");
  resizeBackground();
  revealElementsOnScroll();
  revealNavOnScrollUp();
  createNavItems();
  displayProjects();
}

function handleResize() {
  resizeBackground();
  deactivateNavMenu();
}

function handleScroll() {
  revealElementsOnScroll();
  revealNavOnScrollUp();
}
