const canvas = document.querySelector("#game");
const ctx = canvas.getContext("2d");

canvas.addEventListener("click", startGame);

let hasGameStarted = false,
  oneViewWidth,
  oneViewHeight;

function startGame() {
  hasGameStarted = true;
  drawGame();
}

function drawGame() {
  drawGameBackground();
}

function drawCharacter() {}

function drawGameBackground() {
  const backgroundImg = new Image();
  backgroundImg.src = "./media/game-background.png";
  backgroundImg.onload = () => ctx.drawImage(backgroundImg, 0, 0);
}

function resizeGame() {
  oneViewWidth = window.innerWidth / 100;
  oneViewHeight = window.innerHeight / 100;
  canvas.height = oneViewHeight * 50;
  canvas.width = oneViewWidth * 70;
}

class Character {
  constructor(spriteSrc) {
    drawCharacter(spriteSrc);
  }
}

// Background Image NightForest by saukgp - https://saurabhkgp.itch.io/pixel-art-forest-background-simple-seamless-parallax-ready-for-2d-platformer-s

export { resizeGame };
