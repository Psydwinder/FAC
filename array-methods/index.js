import { numOnlyArr, clearInput, handleFocus } from "./scripts/ArrayInput.js";
import { selectedFunction, filter, reduce } from "./scripts/FilterOrReduce.js";

// DOM containers
const buttonEl = document.querySelector("button");
const outputDiv = document.querySelector(".function-output");

// Event Listeners
window.addEventListener("keydown", handleKeydown);
buttonEl.addEventListener("click", runSelectedFunction);

function handleKeydown({ key }) {
  key === "Enter" && runSelectedFunction();
  document.querySelector(".array__input").focus();
  handleFocus();
}

function runSelectedFunction() {
  const cleanArr = numOnlyArr();
  if (cleanArr.length === 0) return;
  outputDiv.innerText =
    selectedFunction === "filter" ? `[${filter(cleanArr)}]` : reduce(cleanArr);
  clearInput();
}
