const coloursGenerateBtn = document.querySelector(
  ".colours__generate"
);
const coloursSaveBtn = document.querySelector(
  ".colours__save"
);

coloursGenerateBtn.addEventListener(
  "click",
  renderAllColours
);
// coloursSaveBtn.addEventListener(
//   "click",
//   savePalette
// );

class Colour {
  constructor({
    colour = this.generateRandomColor(),
    colourName,
    isLocked = false,
  }) {
    this.colour = colour;
    this.colourName = colourName;
    this.isLocked = isLocked;

    // DOM related
    this.container =
      document.createElement("div");
  }

  generateRandomColor() {
    this.red = randomNumber(256);
    this.green = randomNumber(256);
    this.blue = randomNumber(256);
    const newColourStr = `rgba(${this.red}, ${this.green}, ${this.blue})`;
    this.colour = newColourStr;
    this.isColourDark =
      this.calculateIsColourDark();
    return newColourStr;
  }

  render() {
    const coloursContainer =
      document.querySelector(
        ".colours__container"
      );
    this.container.innerHTML = `
      <div 
        class='colours__representation' style='background-color: ${this.colour};'
      ></div>
      <input 
        class='colours__input colours__name'
        type='text'
        value='${this.colourName}'
      ></input>
    `;
    coloursContainer.append(this.container);
    this.resizeInput();
    this.applyStyle();
    this.addEventListeners();
  }

  addEventListeners() {
    const inputNodeList =
      this.container.querySelectorAll("input");
    inputNodeList.forEach((input) => {
      input.addEventListener(
        "keydown",
        this.resizeInput.bind(this)
      );
      input.addEventListener(
        "keyup",
        this.resizeInput.bind(this)
      );
    });
  }

  applyStyle() {
    // reset style
    this.container.classList.remove(
      "colours__item--light",
      "colours__item--dark"
    );

    this.container.classList.add(
      "colours__item",
      `colours__item${
        this.isColourDark ? "--light" : "--dark"
      }`
    );
  }

  resizeInput() {
    const inputNodeList =
      this.container.querySelectorAll("input");
    inputNodeList.forEach((input) => {
      this.handleEmptyInput(input);
      input.style.width =
        input.value.length + "ch";
    });
  }

  handleEmptyInput(input) {
    if (input.value.length === 0)
      return input.classList.add(
        "colours__input--empty"
      );
    input.classList.remove(
      "colours__input--empty"
    );
  }

  calculateIsColourDark() {
    // Formula used to calculate perceived brightness of colour
    // http://alienryderflex.com/hsp.html
    // brightness  =  sqrt( .299 R2 + .587 G2 + .114 B2 )
    const perceivedBrightness = Math.sqrt(
      0.299 * this.red ** 2 +
        0.587 * this.green ** 2 +
        0.114 * this.blue ** 2
    );

    // 0 is dark, 255 is bright
    const maxPerceivedBrightness = 255;

    return (
      perceivedBrightness <
      maxPerceivedBrightness / 2
    );
  }
}

const colours = {
  primary: new Colour({
    colourName: "primary",
    isLocked: true,
  }),
  secondary: new Colour({
    colourName: "secondary",
  }),
  tertiary: new Colour({
    colourName: "tertiary",
  }),
  quaternary: new Colour({
    colourName: "quaternary",
  }),
  quinary: new Colour({ colourName: "quinary" }),
  senary: new Colour({ colourName: "senary" }),
};

const colourPalettes = {};

function renderAllColours() {
  for (let colour in colours) {
    if (!colours[colour].isLocked)
      colours[colour].generateRandomColor();
    colours[colour].render();
  }
}

function randomNumber(possibilities) {
  return Math.floor(
    Math.random() * possibilities
  );
}

renderAllColours();