import { coloursArr } from "./Colours.js";

const downloadBtnNodeList = document.querySelectorAll(".nav__download");
downloadBtnNodeList.forEach((btn) =>
  btn.addEventListener("click", handleDownloadClick)
);

function handleDownloadClick({ currentTarget }) {
  console.log("clicked");
  const filetype = currentTarget.dataset.filetype;
  const fileData = {
    css: ":root {\n", // Add opening curly braces for the root selector
    json: [],
  };

  // Check if user selected json
  if (currentTarget.dataset.filetype === "json") {
    fileData.json = JSON.stringify(
      coloursArr.map(({ hex, isColourDark, colourName }) => {
        return { colourName, hex, isColourDark };
      })
    );
  } else {
    // User selected css
    coloursArr.forEach(({ colourName, hex }) => {
      fileData.css += "\t--" + colourName + ": #" + hex + ";\n";
    });
    fileData.css += "}"; // Add closing curly braces for the css root selector
  }
  downloadPalette(`colours.${filetype}`, fileData[filetype]);
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
