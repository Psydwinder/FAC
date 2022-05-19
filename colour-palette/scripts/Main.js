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

    return hexString.toUpperCase();
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
        <p class='colours__picker'>
          ${this.hex}
        </p>
        <div class='colours__buttons'>
          <i class="colours__copy fa-solid fa-clone"></i>
          <i class="colours__lock fa-solid fa-lock${
            this.isLocked ? "" : "-open"
          }"></i>
        </div>
      </div>
          `;
    // <input type='color' value='${this.hex}' />

    this.applyStyle();
    this.addEventListeners();
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

  addEventListeners() {
    // Container
    const colourRepresentation = this.container.querySelector(
      ".colours__representation"
    );
    colourRepresentation.addEventListener(
      "mouseenter",
      this.handleColourContainerMouseEnter.bind(this)
    );
    colourRepresentation.addEventListener(
      "mouseleave",
      this.handleColourContainerMouseLeave.bind(this)
    );

    // Colour picker
    const colourPicker = this.container.querySelector(".colours__picker");
    colourPicker.addEventListener("click", this.displayColorPicker.bind(this));

    // Lock
    const lockIcon = this.container.querySelector(".colours__lock");
    lockIcon.addEventListener("click", this.toggleIsLocked.bind(this));

    // Copy
    const copyIcon = this.container.querySelector(".colours__copy");
    copyIcon.addEventListener("click", this.copyToClipboard.bind(this));
  }

  handleColourContainerMouseEnter() {
    const buttons = this.container.querySelector(".colours__buttons");
    buttons.classList.toggle("colours__buttons--active");
    buttons.classList.remove("colours__buttons--locked");
  }

  handleColourContainerMouseLeave() {
    const buttons = this.container.querySelector(".colours__buttons");
    buttons.classList.toggle("colours__buttons--active");
    if (this.isLocked) {
      buttons.classList.add("colours__buttons--locked");
    }
  }

  displayColorPicker() {
    console.log("clicked");
  }

  copyToClipboard() {
    createNotification("✓ Copied to clipboard!");
    navigator.clipboard.writeText("#" + this.hex);
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

function createNotification(text) {
  const body = document.querySelector("body");
  const notification = document.createElement("p");
  notification.classList.add("notification");
  notification.innerText = text;
  body.append(notification);
  setTimeout(() => notification.remove(), 5000);
}

function randomNumber(possibilities) {
  return Math.floor(Math.random() * possibilities);
}

actionAllColours("create");
