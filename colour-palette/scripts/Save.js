import { coloursArr } from "./Colours.js";
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

function saveToLocalStorage() {
  const savedPalettes = JSON.parse(localStorage.palettes || "{}");
  savedPalettes[paletteNameInput.value] = coloursArr;
  localStorage.setItem("palettes", JSON.stringify(savedPalettes));
  toggleModal();
  createNotification("Palette saved succesfully!");
}

// Close modal
const modalCloseBtn = document.querySelector(".modal__close");
modalCloseBtn.addEventListener("click", toggleModal);
