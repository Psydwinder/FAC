import Colour from "./Colour.js";
import "./Download.js";
import { downloadPalette } from "./Download.js";

const generateBtn = document.querySelector(".nav__generate");

generateBtn.addEventListener("click", renderAllColours);

const coloursArr = new Array(5).fill("").map((item) => new Colour({}));

function renderAllColours() {
  actionAllColours("generateRandomColor");
  actionAllColours("render");
}

function actionAllColours(fn) {
  coloursArr.forEach((colour) => !colour.isLocked && colour[fn]());
}

actionAllColours("create");

// Save Modal
const saveBtn = document.querySelector(".nav__save");
// const modal = document.querySelector(".modal");
// const modalSaveBtn = document.querySelector(".modal__save");
const paletteNameInput = document.querySelector("#palette-name");

saveBtn.addEventListener("click", displayModal);
// modalSaveBtn.addEventListener("click", saveToLocalStorage);

function displayModal() {}

function saveToLocalStorage() {
  const localStoragePalettes = JSON.parse(localStorage.palettes || "{}");
  localStoragePalettes[paletteNameInput.value] = coloursArr;
  localStorage.setItem("palettes", JSON.stringify(localStoragePalettes));
}

// Downloads
const downloadBtnNodeList = document.querySelectorAll(".nav__download");
downloadBtnNodeList.forEach((btn) =>
  btn.addEventListener("click", handleDownloadClick)
);

function handleDownloadClick({ currentTarget }) {
  const filetype = currentTarget.dataset.filetype;
  const fileData = {
    css: ":root {\n",
    json: [],
  };

  if (currentTarget.dataset.filetype === "json") {
    fileData.json = JSON.stringify(
      coloursArr.map(({ hex, isColourDark, colourName }) => {
        return { colourName, hex, isColourDark };
      })
    );
  } else {
    coloursArr.forEach(({ colourName, hex }) => {
      fileData.css += " --" + colourName + ": #" + hex + ";\n";
    });
    fileData.css += "}"; // Add closing curly braces for the string
  }

  downloadPalette(`colours.${filetype}`, fileData[filetype]);
}
