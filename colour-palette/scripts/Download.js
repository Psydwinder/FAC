// This function creates a new anchor tag, changes its content and sets the download attribute. Which is used to download the href of an anchor tag.
// https://stackoverflow.com/questions/6468517/force-download-of-datatext-plain-url

function downloadPalette(filename, content) {
  var newAnchor = document.createElement("a");
  newAnchor.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(content)
  );
  newAnchor.setAttribute("download", filename);

  newAnchor.style.display = "none";
  document.body.appendChild(newAnchor);

  newAnchor.click();

  document.body.removeChild(newAnchor);
}

export { downloadPalette };
