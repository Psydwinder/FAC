import { actionAllColours } from "./utils.js";
import { coloursArr } from "./Colours.js";

const randomBtn = document.querySelector(".nav__random");
randomBtn.addEventListener("click", randomizeAllColours);

function randomizeAllColours() {
  actionAllColours(coloursArr, "generateRandomColor");
  actionAllColours(coloursArr, "render");
}
