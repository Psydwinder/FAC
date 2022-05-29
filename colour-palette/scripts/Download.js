import { coloursArr } from "./Colours.js";

const downloadBtnNodeList = document.querySelectorAll(".nav__download");
downloadBtnNodeList.forEach((btn) =>
  btn.addEventListener("click", handleDownloadClick)
);

function handleDownloadClick({ currentTarget }) {
  const filetype = currentTarget.dataset.filetype;
  const fileData = {
    css: createCSSData,
    json: createJSONData,
  };

  downloadPalette(`colours.${filetype}`, fileData[filetype]());
}

function createCSSData() {
  let cssString = ":root {\n";

  coloursArr.forEach(({ colourName, hex }) => {
    cssString += "\t--" + colourName + ": #" + hex + ";\n";
  });
  cssString += "}";

  return cssString;
}

function createJSONData() {
  return JSON.stringify(
    coloursArr.map(({ hex, isColourDark, colourName }) => {
      return { colourName, hex, isColourDark };
    })
  );
}

function downloadPalette(filename, content) {
  // This function creates a new anchor tag, changes its content and sets the download attribute. Which is used to download the href of an anchor tag.
  // https://www.w3schools.com/tags/att_a_download.asp

  var newAnchor = document.createElement("a");
  newAnchor.setAttribute(
    "href",
    `data:text/plain;charset=utf-8, ${encodeURIComponent(content)}`
  );
  newAnchor.setAttribute("download", filename);

  newAnchor.style.display = "none";
  document.body.appendChild(newAnchor);

  newAnchor.click();

  document.body.removeChild(newAnchor);
}

export { downloadPalette };
