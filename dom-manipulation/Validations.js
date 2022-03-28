import { inputEl, labelEl, codenameSection } from "./main.js";

// Validation
const checkLength = (str) => str.length > 5;
const hasLowerUppercase = (str) => /(?=.*[a-z])(?=.*[A-Z]).*/g.test(str);
const hasNumbers = (str) => (str.match(/[0-9]/g) || []).length >= 2;

function startValidation() {
  const validations = {
    "Is at least 6 characters long.": checkLength(inputEl.value),
    "Has at least two numbers.": hasNumbers(inputEl.value),
    "Has at least one lowercase and uppercase letter.": hasLowerUppercase(
      inputEl.value
    ),
  };
  applyStyling(isCodenameValid(validations));
  displayFailedValidations(validations);
}

function isCodenameValid(validations) {
  let finalResult = true;
  for (let item in validations) {
    if (validations[item] === false) {
      finalResult = false;
    }
  }
  return finalResult;
}

function applyStyling(isValid) {
  inputEl.value.length > 0
    ? (labelEl.style = "opacity: 1")
    : (labelEl.style = "opacity: 0");

  isValid
    ? codenameSection.classList.add("valid")
    : codenameSection.classList.remove("valid");
}

function displayFailedValidations(validations) {
  const failedListEl = document.querySelector("ul");
  failedListEl.innerHTML = ""; // Clear failedList

  for (let item in validations) {
    if (validations[item] === false) {
      const failedItem = document.createElement("li");
      failedItem.innerText = item;
      failedListEl.appendChild(failedItem);
    }
  }
}

export { startValidation };
