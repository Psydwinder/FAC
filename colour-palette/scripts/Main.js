import Colour from "./Colour.js";

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
const modal = document.querySelector(".modal");
const modalSaveBtn = document.querySelector(".modal__save");
const paletteNameInput = document.querySelector("#palette-name");

saveBtn.addEventListener("click", displayModal);
modalSaveBtn.addEventListener("click", saveToLocalStorage);

function displayModal() {}

function saveToLocalStorage() {
  const localStoragePalettes = JSON.parse(localStorage.palettes || "{}");
  localStoragePalettes[paletteNameInput.value] = coloursArr;
  localStorage.setItem("palettes", JSON.stringify(localStoragePalettes));
}
