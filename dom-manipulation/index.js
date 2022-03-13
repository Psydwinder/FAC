// DOM Containers
const codenameSection = document.querySelector(".codename");
const buttonEl = document.querySelector(".codename__button");
const inputEl = document.querySelector(".codename__input");
const labelEl = document.querySelector(".codename__label");
let inputValue = inputEl.value;

// Validation
const checkLength = (str) => str.length > 5;
const hasLowerUppercase = (str) => /(?=.*[a-z])(?=.*[A-Z]).*/g.test(str);
const hasNumbers = (str) => (str.match(/[0-9]/g) || []).length >= 2;
const validations = {
  "Is at least 6 characters long": false,
  "Has at least one lowercase and uppercase letter": false,
  "Has at least two numbers": false,
};

function startValidation() {
  validations["Is at least 6 characters long"] = checkLength(inputValue);
  validations["Has at least one lowercase and uppercase letter"] =
    hasLowerUppercase(inputValue);
  validations["Has at least two numbers"] = hasNumbers(inputValue);

  validateCodename() ? applyStyling(true) : applyStyling(false);
  displayConditions();
}

function validateCodename() {
  let tempBoolean = true;
  for (let validation in validations) {
    if (validations[validation] === false) {
      tempBoolean = false;
    }
  }
  return tempBoolean;
}

function applyStyling(boolean) {
  inputValue.length > 0
    ? (labelEl.style = "opacity: 1")
    : (labelEl.style = "opacity: 0");

  boolean
    ? codenameSection.classList.add("valid")
    : codenameSection.classList.remove("valid");
}

function displayConditions() {
  console.log("hi");
  const codenameList = document.querySelector("ul");
  codenameList.innerHTML = "";

  for (let validation in validations) {
    if (validations[validation] === false) {
      const li = document.createElement("li");
      li.innerText = validation;
      codenameList.appendChild(li);
    }
  }
}

// Event Listeners
codenameSection.addEventListener("click", handleSectionClick);
inputEl.addEventListener("input", handleInputUpdate);
// buttonEl.addEventListener("click", startValidation);

function handleSectionClick({ currentTarget }) {
  currentTarget.classList.add("active");
  inputEl.focus();
}

function handleInputUpdate({ target }) {
  inputValue = target.value;
  startValidation();
}
