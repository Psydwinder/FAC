import { coloursArr } from "./Colours.js";
import { renderPalettes, toggleCollection } from "./PaletteCollection.js";
import { createNotification } from "./utils.js";

// Modal display
const modal = document.querySelector(".modal");
const saveBtn = document.querySelector(".nav__save");

saveBtn.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("modal--active");
}

// Save palette name
const modalSaveBtn = document.querySelector(".modal__button");
const paletteNameInput = document.querySelector("#palette-name");

modalSaveBtn.addEventListener("click", saveToLocalStorage);

function saveToLocalStorage(event) {
  const savedPalettes = JSON.parse(localStorage.palettes || "{}");
  savedPalettes[paletteNameInput.value] = coloursArr;
  localStorage.setItem("palettes", JSON.stringify(savedPalettes));
  paletteNameInput.value = "";
  toggleModal();
  createNotification("Palette saved succesfully!");
  renderPalettes();
  toggleCollection(event);
}

// Close modal
const modalCloseBtn = document.querySelector(".modal__close");
modalCloseBtn.addEventListener("click", toggleModal);
