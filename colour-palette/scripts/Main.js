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

class Colour {
  constructor({ colour, colourName, isLocked = false }) {
    this.colour = colour;
    this.colourName = colourName;
    this.isLocked = isLocked;

    // DOM related
    this.container = document.createElement("div");
    this.container.classList.add("colours__item");
  }

  render() {
    const coloursContainer = document.querySelector(".colours__container");
    this.container.innerHTML = `
      <div class='colours__representation'>${this.colour}</div>
    `;
    coloursContainer.append(this.container);
  }
}

const colours = {
  primary: new Colour({ colour: "primary" }),
  secondary: new Colour({ colour: "secondary" }),
  tertiary: new Colour({ colour: "tertiary" }),
};

function renderAllColours() {
  for (let colour in colours) {
    colours[colour].render();
  }
}
