const radioBtnsNodeList = document.querySelectorAll("input[type='radio'");
let selectedFunction = radioBtnsNodeList[0].value;

radioBtnsNodeList.forEach((btn) =>
  btn.addEventListener("click", updateSelectedFunction)
);

function updateSelectedFunction({ currentTarget }) {
  selectedFunction = currentTarget.value;
}

function filterDivisibleByTwo(arr) {
  return arr.filter((num) => num % 2 === 0);
}

function sumOfArray(arr) {
  return arr.reduce((sum, num) => sum + num);
}

export { selectedFunction, filterDivisibleByTwo, sumOfArray };
