const arrayInputEl = document.querySelector(".array__input");
const arrayLabelEl = document.querySelector(".array__label");

arrayInputEl.addEventListener("focus", handleFocus);
arrayInputEl.addEventListener("focusout", handleFocusOut);

function handleFocus() {
  arrayLabelEl.classList.add("focused");
}
function handleFocusOut() {
  if (arrayInputEl.value.length === 0) arrayLabelEl.classList.remove("focused");
}

function clearInput() {
  arrayInputEl.value = "";
  handleFocusOut();
}

function numOnlyArr() {
  return (arrayInputEl.value.replace(/\s/g, "").match(/[-0-9]+/g) || []).map(
    (num) => Number(num)
  );
}
export { numOnlyArr, clearInput };
