import Colour from "./Colour.js";

const generateBtn = document.querySelector(".colours__generate");
const saveBtn = document.querySelector(".colours__save");

generateBtn.addEventListener("click", renderAllColours);
saveBtn.addEventListener("click", saveColourPalette);

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

function saveColourPalette() {}
