import { createNotification, randomNumber } from "./utils.js";

class Colour {
  constructor({ colour, colourName, isLocked }) {
    this.hex = colour || this.generateRandomColor();
    this.colourName = colourName;
    this.isLocked = isLocked || false;
  }

  generateRandomColor() {
    const HEX_POSSIBILITIES = 16777215; // 16^6
    const randomHex = parseInt(randomNumber(HEX_POSSIBILITIES))
      .toString(16)
      .toUpperCase();
    this.hex = randomHex.length < 6 ? randomHex.padStart(6, "0") : randomHex;
    this.isColourDark = this.calculateIsColourDark();
    return this.hex;
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
      <div class='colours__representation' 
        style='background-color: #${this.hex};'>

        <input class='colours__picker-input' type='color' value='#${this.hex}'/>
        <label class='colours__picker'>${this.hex}</label>

        <div class='colours__buttons'>
          <i class="colours__copy fa-solid fa-clone"></i>
          <i class="colours__lock fa-solid fa-lock${
            this.isLocked ? "" : "-open"
          }"></i>
        </div>
      </div>
          `;
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

    // Colour picker label
    const colourPickerLabel = this.container.querySelector(".colours__picker");
    colourPickerLabel.addEventListener(
      "click",
      this.displayColorPicker.bind(this)
    );

    // Colour picker input
    const colourPickerInput = this.container.querySelector(
      ".colours__picker-input"
    );
    colourPickerInput.addEventListener("change", this.changeColour.bind(this));

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
    this.container.querySelector(".colours__picker-input").click();
  }

  changeColour({ currentTarget }) {
    this.hex = currentTarget.value.replace("#", "").toUpperCase();
    this.calculateIsColourDark();
    this.render();
  }

  copyToClipboard() {
    createNotification("✓ Copied to clipboard!");
    navigator.clipboard.writeText("#" + this.hex);
  }

  calculateIsColourDark() {
    const red = parseInt(this.hex.slice(0, 2), 16);
    const green = parseInt(this.hex.slice(2, 4), 16);
    const blue = parseInt(this.hex.slice(4, 6), 16);

    // Formula used to calculate perceived brightness of colour
    // http://alienryderflex.com/hsp.html
    // brightness  =  sqrt( .299 R2 + .587 G2 + .114 B2 )
    const perceivedBrightness = Math.sqrt(
      0.299 * red ** 2 + 0.587 * green ** 2 + 0.114 * blue ** 2
    );

    // 0 is dark, 255 is bright
    const maxPerceivedBrightness = 255;

    this.isColourDark = perceivedBrightness < maxPerceivedBrightness / 2;
    return perceivedBrightness < maxPerceivedBrightness / 2;
  }

  toggleIsLocked({ currentTarget }) {
    this.isLocked = !this.isLocked;
    this.render();
  }
}

export default Colour;
