import { createNavItems, deactivateNavMenu } from "./Nav.js";
import { resizeBackground } from "./Background.js";
import { displayProjects } from "./Projects.js";
import { revealElementsOnScroll, revealNavOnScrollUp } from "./Scroll.js";
import { resizeGame } from "./Game.js";

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
  resizeGame();
}

function handleResize() {
  resizeBackground();
  deactivateNavMenu();
  resizeGame();
}

function handleScroll() {
  revealElementsOnScroll();
  revealNavOnScrollUp();
}
