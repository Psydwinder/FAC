import { coloursArr } from "./Colours.js";
import { actionAllColours } from "./utils.js";

const randomAIBtn = document.querySelector(".nav__random-ai");
randomAIBtn.addEventListener("click", fetchColorMindData);

function fetchColorMindData() {
  // Provide visual feedback to user when fetching data
  document.body.style = "cursor: wait; opacity: 0.9;";

  const url = "https://colormind.io/api/";
  const data = {
    model: "default",
    input: ["N", "N", "N", "N", "N"],
  };

  const http = new XMLHttpRequest();

  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      applyNewPalette(JSON.parse(http.responseText).result);
    }
  };

  http.open("POST", url, true);
  http.send(JSON.stringify(data));
}

function applyNewPalette(rgbPaletteArr) {
  const hexPaletteArr = [];

  // rgbPaletteArr format: [[24,32,30],[103,133,92]]
  rgbPaletteArr.forEach((rgbArr) => {
    let currentHex = "";
    rgbArr.forEach((rgbValue) => (currentHex += rgbToHex(rgbValue)));
    hexPaletteArr.push(currentHex);
  });

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
