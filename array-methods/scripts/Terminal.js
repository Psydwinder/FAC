// DOM containers
const terminalOutputDiv = document.querySelector(".terminal__output");
const terminalInputDiv = document.querySelector(".terminal__input");
const textAreaEl = document.querySelector(".terminal__textarea");
const commandsNodeList = document.querySelector(".terminal__commands");

// Terminal variables
const commands = {};

// Event listeners
textAreaEl.addEventListener("click", handleTextAreaClick);
textAreaEl.addEventListener("input", handleTextAreaKeydown);

// DOM manipulation
function handleTextAreaClick({ currentTarget }) {
  currentTarget.placeholder = "pick or type custom command";
  displayCommands();
}

function handleTextAreaKeydown(event) {
  auto_grow(event.currentTarget);
  if (event.key === "Enter") return runCommand();
}

function auto_grow(element) {
  element.style.height = "8px";
  element.style.height = element.scrollHeight + "px";
}

function runCommand() {
  toggleTextAreaOpacity();
  try {
    eval(textAreaEl.value);
  } catch (error) {
    console.log(error);
  }
  textAreaEl.value = "";
  textAreaEl.setSelectionRange(0, 0);
  textAreaEl.focus();
  return;
}

function displayCommands() {}

function toggleTextAreaOpacity() {
  textAreaEl.classList.toggle(".terminal__input--hide");
}
