const coloursGenerateBtn = document.querySelector(".colours__generate");
const coloursSaveBtn = document.querySelector(".colours__save");

coloursGenerateBtn.addEventListener("click", renderAllColours);

class Colour {
  constructor({ colour, colourName, isLocked }) {
    this.rgb = colour || this.generateRandomColor();
    this.hex = this.convertRGBToHex();
    this.colourName = colourName;
    this.isLocked = isLocked || false;
  }

  generateRandomColor() {
    this.red = randomNumber(256);
    this.green = randomNumber(256);
    this.blue = randomNumber(256);
    const newColourStr = `rgb(${this.red}, ${this.green}, ${this.blue})`;
    this.rgb = newColourStr;
    this.isColourDark = this.calculateIsColourDark();
    return newColourStr;
  }

  convertRGBToHex() {
    const hexString = [this.red, this.green, this.blue]
      .map((colour) => this.convertToHexValue(colour))
      .join("");

    return "#" + hexString;
  }

  convertToHexValue(colour) {
    const hexValue = colour.toString(16);
    return hexValue.length === 1 ? "0" + hexValue : hexValue;
  }

  create() {
    // DOM related
    const coloursContainer = document.querySelector(".colours__container");
    this.container = document.createElement("div");
    this.render();
    coloursContainer.append(this.container);
  }

  render() {
    this.container.innerHTML = `
      <div 
        class='colours__representation' style='background-color: ${this.rgb};'
      >
        <input 
          class='colours__input colours__name'
          type='text'
          value='${this.colourName}'
        ></input>
        <div class='colours__buttons'>
          <i class="colours__lock fa-solid fa-lock${
            this.isLocked ? "" : "-open"
          }"></i>
          <input type='color' value='${this.hex}' />
        </div>
      </div>
    `;
    this.resizeInput();
    this.applyStyle();
    this.addEventListeners();
  }

  addEventListeners() {
    // Inputs
    const inputNodeList = this.container.querySelectorAll("input");
    inputNodeList.forEach((input) => {
      input.addEventListener("keydown", this.resizeInput.bind(this));
      input.addEventListener("keyup", this.resizeInput.bind(this));
    });

    // Buttons
    const lockIcon = this.container.querySelector(".colours__lock");
    lockIcon.addEventListener("click", this.toggleIsLocked.bind(this));
  }

  applyStyle() {
    // reset style
    this.container.classList.remove(
      "colours__item--light",
      "colours__item--dark"
    );

    this.container.classList.add(
      "colours__item",
      `colours__item${this.isColourDark ? "--light" : "--dark"}`
    );
  }

  resizeInput() {
    const inputNodeList = this.container.querySelectorAll("input");
    inputNodeList.forEach((input) => {
      this.handleEmptyInput(input);
      input.style.width = input.value.length + "ch";
    });
  }

  handleEmptyInput(input) {
    if (input.value.length === 0)
      return input.classList.add("colours__input--empty");
    input.classList.remove("colours__input--empty");
  }

  calculateIsColourDark() {
    // Formula used to calculate perceived brightness of colour
    // http://alienryderflex.com/hsp.html
    // brightness  =  sqrt( .299 R2 + .587 G2 + .114 B2 )
    const perceivedBrightness = Math.sqrt(
      0.299 * this.red ** 2 + 0.587 * this.green ** 2 + 0.114 * this.blue ** 2
    );

    // 0 is dark, 255 is bright
    const maxPerceivedBrightness = 255;

    return perceivedBrightness < maxPerceivedBrightness / 2;
  }

  toggleIsLocked({ currentTarget }) {
    this.isLocked = !this.isLocked;
    this.render();
  }
}

const colours = {
  primary: new Colour({
    colourName: "primary",
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
  actionAllColours("generateRandomColor");
  actionAllColours("render");
}

function actionAllColours(fn) {
  for (let colour in colours) {
    if (!colours[colour].isLocked) colours[colour][fn]();
  }
}

function randomNumber(possibilities) {
  return Math.floor(Math.random() * possibilities);
}

actionAllColours("create");
