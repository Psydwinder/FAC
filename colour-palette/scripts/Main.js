const coloursButton = document.querySelector(".colours__button");

coloursButton.addEventListener("click", generateColours);

function generateColours() {}

function generateRandomColor() {
  const { hue, saturation, lightness } = {
    hue: randomNumber(361),
    saturation: randomNumber(101),
    lightness: randomNumber(101),
  };
  return `hsl(${hue}, ${saturation}, ${lightness}`;
}

function randomNumber(possibilities) {
  return Math.floor(Math.random() * possibilities);
}
