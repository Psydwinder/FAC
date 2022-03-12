// DOM Containers
const codenameSection = document.querySelector(".codename");
const buttonEl = document.querySelector(".codename__button");
const inputEl = document.querySelector(".codename__input");
let inputValue = inputEl.value;

// Event Listeners
inputEl.focus();
codenameSection.addEventListener("click", handleSectionClick);
inputEl.addEventListener("input", handleInputUpdate);
buttonEl.addEventListener("click", startValidation);

function handleSectionClick({ currentTarget }) {
  currentTarget.classList.add("active");
}

function handleInputUpdate({ target }) {
  inputValue = target.value;
  startValidation();
}

// Validation
const checkLength = (str) => str.length > 5;
const hasLowerUppercase = (str) => /(?=.*[a-z])(?=.*[A-Z]).*/g.test(str);
const hasNumbers = (str) => (str.match(/[0-9]/g) || []).length >= 2;
let isCodenameValid = false;

function startValidation() {
  if (validateCodename()) {
    applyStyling(true);
  } else {
    applyStyling(false);
  }
}

function validateCodename() {
  const validations = [
    checkLength(inputValue),
    hasLowerUppercase(inputValue),
    hasNumbers(inputValue),
  ];

  return validations.every((validation) => validation === true);
}

function applyStyling(boolean) {
  console.log(boolean);
  if (boolean) inputEl.classList.add("valid");
  else inputEl.classList.remove("valid");
}
