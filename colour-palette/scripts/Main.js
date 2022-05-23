import Colour from "./Colour.js";

const coloursGenerateBtn = document.querySelector(".colours__generate");
const coloursSaveBtn = document.querySelector(".colours__save");

coloursGenerateBtn.addEventListener("click", renderAllColours);

const colours = {
  primary: new Colour({
    colourName: "primary",
  }),
  secondary: new Colour({
    colourName: "secondary",
  }),
  tertiary: new Colour({
    colourName: "tertiary",
  }),
  quaternary: new Colour({
    colourName: "quaternary",
  }),
  quinary: new Colour({ colourName: "quinary" }),
};

function renderAllColours() {
  actionAllColours("generateRandomColor");
  actionAllColours("render");
}

function actionAllColours(fn) {
  for (let colour in colours) {
    if (!colours[colour].isLocked) colours[colour][fn]();
  }
}

actionAllColours("create");
