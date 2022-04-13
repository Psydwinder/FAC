const canvas = document.querySelector("#game");
const ctx = canvas.getContext("2d");

function drawCharacter() {
    
}

function resizeGame() {
  const oneViewWidth = window.innerWidth / 100;
  canvas.height = oneViewWidth * 50;
  canvas.width = oneViewWidth * 50;
}

export { resizeGame };
