import { coloursArr } from "./Colours.js";
import { actionAllColours, applyNewColours } from "./utils.js";

const paletteCollection = document.querySelector(".palette-collection");
const paletteCollectionBtn = document.querySelector(
  ".palette-collection__button"
);
const backBtn = document.querySelector(".palette-collection__back");

let selectedPalette = "my-palette";

// Display or Hide collection div
document.body.addEventListener("click", handleBlur);
paletteCollectionBtn.addEventListener("click", toggleCollection);
backBtn.addEventListener("click", toggleCollection);

function handleBlur(event) {
  if (!paletteCollection.classList.contains("palette-collection--active"))
    return;
  toggleCollection(event);
}

function toggleCollection(event) {
  event.stopPropagation();
  paletteCollection.classList.toggle("palette-collection--active");
}

// Render palette items
class Palette {
  constructor(paletteName, paletteData) {
    this.paletteName = paletteName;
    this.paletteData = paletteData;
    this.container = document.createElement("li");
    this.container.classList.add("palette-collection__item");
  }

  render() {
    this.container.innerHTML = `
        <div class='palette-collection__demo'></div>
        <h3 class='palette-collection__name'>${this.paletteName}</h3>
    `;
    this.renderDemo();
    this.addEventListener();
  }

  renderDemo() {
    const newPaletteDemo = this.container.querySelector(
      ".palette-collection__demo"
    );
    this.paletteData.forEach(
      (colour) =>
        (newPaletteDemo.innerHTML += `
        <div class='palette-collection__colour' style='background-color: #${colour.hex}'></div>`)
    );
    this.container.append(newPaletteDemo);
  }

  addEventListener() {
    this.container.addEventListener("click", this.choosePalette.bind(this));
  }

  choosePalette(event) {
    const hexArr = this.paletteData.map((colour) => colour.hex);
    selectedPalette = this.paletteName;
    applyNewColours(hexArr);
    actionAllColours(coloursArr, "render");
  }
}

function renderPalettes() {
  if (!localStorage.palettes) return;

  const paletteListEl = document.querySelector(".palette-collection__list");
  const savedPalettes = JSON.parse(localStorage.palettes);

  paletteListEl.innerHTML = "";
  for (let palette in savedPalettes) {
    const currentPaletteData = savedPalettes[palette];
    const currentPaletteName = palette;
    const newPalette = new Palette(currentPaletteName, currentPaletteData);
    newPalette.render();

    paletteListEl.append(newPalette.container);
  }
}

export { renderPalettes, toggleCollection, selectedPalette };
