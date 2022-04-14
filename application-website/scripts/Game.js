const canvas = document.querySelector("#game");
const ctx = canvas.getContext("2d");

canvas.height = 500;
canvas.width = 500;

canvas.addEventListener("click", init);
let hasGameStarted = true;

function init() {
  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", handleKeyUp);

  function drawGame() {
    window.requestAnimationFrame(drawGame);
    resetCanvas();
    updateObjects();
    player.draw();
    movePlayer();
  }
  drawGame();
}

function resetCanvas() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function updateObjects() {
  player.update();
  projectiles.forEach((projectile) => projectile.update());
}

function drawGameBackground() {
  // Background Image NightForest by saukgp - https://saurabhkgp.itch.io/pixel-art-forest-background-simple-seamless-parallax-ready-for-2d-platformer-s
  const backgroundImg = new Image();
  backgroundImg.src = "./media/game-assets/game-background.png";
  backgroundImg.onload = () => ctx.drawImage(backgroundImg, 0, 0);
}

class Character {
  constructor({ position, velocity, dimensions, gravity = 0.7 }) {
    this.x = position.x;
    this.y = position.y;
    this.velocity = velocity;
    this.width = dimensions.width;
    this.height = dimensions.height;
    this.gravity = gravity;
  }

  draw() {
    ctx.fillStyle = "blue";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  update() {
    this.draw();
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    this.y + this.height + this.velocity.y >= canvas.height
      ? (this.velocity.y = 0)
      : (this.velocity.y += this.gravity);
  }
}

// Player initialization
const player = new Character({
  velocity: {
    x: 0,
    y: 0,
  },
  dimensions: {
    width: 25,
    height: 25,
  },
  position: {
    x: canvas.width / 2,
    y: canvas.height - 25,
  },
});

// Player Movement
let lastDirection = "";
const directions = {
  right: false,
  left: false,
};

function handleKeyDown(event) {
  event.preventDefault();
  const { key } = event;

  if (key === "ArrowRight") return changeDirection("right");
  if (key === "ArrowLeft") return changeDirection("left");
  // Check if player is on ground to allow jump
  if (key === "x" && player.y + player.height >= canvas.height)
    player.velocity.y = -10;
  if (key === "z") shoot();
}

function handleKeyUp(event) {
  event.preventDefault();
  const { key } = event;
  if (key === "ArrowRight") directions.right = false;
  if (key === "ArrowLeft") directions.left = false;
}

function changeDirection(direction) {
  directions[direction] = true;
  lastDirection = direction;
}

function movePlayer() {
  if (directions.right) return (player.velocity.x = 5);
  if (directions.left) return (player.velocity.x = -5);
  player.velocity.x = 0;
}

// Projectiles
const projectiles = [];
class Projectile {
  constructor(direction) {
    this.x = player.x;
    this.y = player.y + player.height / 2;
    this.height = 5;
    this.width = 5;
    this.speed = direction === "left" ? -5 : 5;
  }

  draw() {
    ctx.fillStyle = "white";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  update() {
    this.draw();
    this.y += this.speed;
  }
}

function shoot() {
  projectiles.push(new Projectile("left"));
}
