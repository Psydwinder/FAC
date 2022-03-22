import { createListItems } from "./scripts/Nav.js";
import { adjustCanvasSize } from "./scripts/Background.js";
import { displayProjects } from "./scripts/Projects.js";
import { revealElementsOnScroll } from "./scripts/Scroll.js";

adjustCanvasSize();
revealElementsOnScroll();
createListItems();
displayProjects();
