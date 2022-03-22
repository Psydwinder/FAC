import "./scripts/Nav.js";
import "./scripts/Scroll.js";
import { adjustCanvasSize } from "./scripts/Background.js";
import { displayProjects } from "./scripts/Projects.js";
import { revealElementsOnScroll } from "./scripts/Scroll.js";

adjustCanvasSize();
displayProjects();
revealElementsOnScroll();
