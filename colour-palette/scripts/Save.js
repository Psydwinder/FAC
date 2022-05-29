const saveBtn = document.querySelector(".nav__save");
// const modal = document.querySelector(".modal");
// const modalSaveBtn = document.querySelector(".modal__save");
const paletteNameInput = document.querySelector("#palette-name");

saveBtn.addEventListener("click", displayModal);
// modalSaveBtn.addEventListener("click", saveToLocalStorage);

function displayModal() {}

function saveToLocalStorage() {
  const savedPalettes = JSON.parse(localStorage.palettes || "{}");
  savedPalettes[paletteNameInput.value] = coloursArr;
  localStorage.setItem("palettes", JSON.stringify(savedPalettes));
}
