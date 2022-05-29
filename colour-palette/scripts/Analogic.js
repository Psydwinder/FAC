import { coloursArr } from "./Colours.js";
import { actionAllColours, randomHex } from "./utils.js";

const randomAIBtn = document.querySelector(".nav__random-ai");
randomAIBtn.addEventListener("click", fetchData);

function fetchData() {
  // // Provide visual feedback to user when fetching data
  document.body.style = "cursor: wait; opacity: 0.9;";

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${randomHex()}&mode=analogic&count=5`
  )
    .then((response) => response.json())
    .then((data) => applyNewPalette(data));
}

function applyNewPalette(newPalette) {
  const hexPaletteArr = [];

  newPalette.colors.forEach((colour) => hexPaletteArr.push(colour.hex.clean));

  coloursArr.forEach((colour, index) => {
    colour.hex = hexPaletteArr[index];
  });

  actionAllColours(coloursArr, "render");
  // Provide visual feedback to user when changes have been applied
  document.body.style = "cursor: auto; opacity: 1;";
}

function rgbToHex(colourValue) {
  const hex = colourValue.toString(16).toUpperCase();
  return hex.length == 1 ? "0" + hex : hex;
}
