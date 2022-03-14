import { numOnlyArr, clearInput } from "./scripts/ArrayInput.js";
import {
  selectedFunction,
  filterDivisibleByTwo,
  sumOfArray,
} from "./scripts/FilterOrReduce.js";

// DOM containers
const buttonEl = document.querySelector("button");

// Event Listeners
buttonEl.addEventListener("click", runSelectedFunction);

function runSelectedFunction() {
  const cleanArr = numOnlyArr();
  selectedFunction === "filter"
    ? filterDivisibleByTwo(cleanArr)
    : sumOfArray(cleanArr);
  clearInput();
}
