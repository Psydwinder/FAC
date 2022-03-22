import { createListItems, deactivateNavMenu } from "./scripts/Nav.js";
import { adjustCanvasSize } from "./scripts/Background.js";
import { displayProjects } from "./scripts/Projects.js";
import { revealElementsOnScroll } from "./scripts/Scroll.js";

window.addEventListener("load", handleLoad);
window.addEventListener("resize", handleResize);

function handleLoad() {
  const loaderDiv = document.querySelector(".loader");
  loaderDiv.classList.add("loaded");
}

function handleResize() {
  adjustCanvasSize();
  deactivateNavMenu();
}

adjustCanvasSize();
revealElementsOnScroll();
createListItems();
displayProjects();
