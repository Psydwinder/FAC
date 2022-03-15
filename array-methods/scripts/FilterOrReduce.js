const inputWrapperNodeList = document.querySelectorAll(
  ".radio-div .input__wrapper"
);
let selectedFunction = inputWrapperNodeList[0].dataset.function;

inputWrapperNodeList.forEach((item) => {
  item.addEventListener("click", updateSelectedFunction);
  item.addEventListener("mouseenter", displayFunctionDetails);
  item.addEventListener("mousemove", repositionFunctionDetails);
  item.addEventListener("mouseout", hideFunctionDetails);
});

function updateSelectedFunction({ currentTarget }) {
  selectedFunction = currentTarget.dataset.function;
  hideFunctionDetails();
}

function displayFunctionDetails({ currentTarget, clientX, clientY }) {
  const functionDetails = {
    filter: "Filter items divisible by two",
    reduce: "Use the reduce method to sum all items",
  };

  const functionDetailsEl = createNewElement(
    "function-details",
    functionDetails[currentTarget.dataset.function],
    clientX,
    clientY
  );

  document.querySelector("body").append(functionDetailsEl);
}

function repositionFunctionDetails({ clientX, clientY }) {
  const elementToReposition = document.querySelector("#function-details");
  if (elementToReposition)
    elementToReposition.style = `top: ${clientY + 5}px;left: ${clientX}px`;
}

function hideFunctionDetails() {
  const elementToRemove = document.querySelector("#function-details");
  elementToRemove && elementToRemove.remove();
}

function createNewElement(id, text, left, top) {
  const newElement = document.createElement("span");
  newElement.id = id;
  newElement.innerText = text;
  newElement.style = `top: ${top + 5}px; left: ${left}px;`;
  return newElement;
}

function filter(arr) {
  return arr.filter((num) => num % 2 === 0);
}

function reduce(arr) {
  return arr.reduce((sum, num) => sum + num);
}

export { selectedFunction, filter, reduce };
