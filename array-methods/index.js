import { numOnlyArr, clearInput } from "./scripts/ArrayInput.js";
import { selectedFunction, filter, reduce } from "./scripts/FilterOrReduce.js";

// DOM containers
const buttonEl = document.querySelector("button");
const outputDiv = document.querySelector(".function-output");

// Event Listeners
buttonEl.addEventListener("click", runSelectedFunction);

function runSelectedFunction() {
  const cleanArr = numOnlyArr();
  if (cleanArr.length === 0) return;
  outputDiv.innerText =
    selectedFunction === "filter" ? `[${filter(cleanArr)}]` : reduce(cleanArr);
  clearInput();
}
