import { startValidation } from "./Validations.js";

// DOM Containers
const codenameSection = document.querySelector(".codename");
const inputEl = document.querySelector(".codename__input");
const checkmarkEl = document.querySelector(".codename__checkmark");

// Event Listeners
codenameSection.addEventListener("click", handleSectionClick);
inputEl.addEventListener("input", handleInputUpdate);

function handleSectionClick({ currentTarget }) {
  currentTarget.classList.add("active");
  inputEl.focus();
}

function handleInputUpdate() {
  startValidation();
}

export { inputEl, checkmarkEl, codenameSection };
