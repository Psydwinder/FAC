const canvas = document.querySelector("#game");
const ctx = canvas.getContext("2d");
const directions = {
  right: false,
  left: false,
  up: false,
};

canvas.height = 360;
canvas.width = 620;

function drawGame() {
  window.requestAnimationFrame(drawGame);
  resetCanvas();
  updateObjects();
  movePlayer();
}

function resetCanvas() {
  ctx.fillStyle = "black";
  ctx.fillReact(0, 0, canvas.width, canvas.height);
}

function updateObjects() {
  player.update();
}

function movePlayer() {}

function drawGameBackground() {
  // Background Image NightForest by saukgp - https://saurabhkgp.itch.io/pixel-art-forest-background-simple-seamless-parallax-ready-for-2d-platformer-s
  const backgroundImg = new Image();
  backgroundImg.src = "./media/game-assets/game-background.png";
  backgroundImg.onload = () => ctx.drawImage(backgroundImg, 0, 0);
}

class Character {
  constructor({ position, velocity, dimensions }) {
    this.position = position;
    this.velocity = velocity;
    this.dimensions = dimensions;
  }

  draw() {
    ctx.fillStyle = "blue";
    ctx.fillRect(
      this.position.x,
      this.position.y,
      this.dimensions.width,
      this.dimensions.height
    );
  }

  update() {
    this.draw();
    this.position;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    this.position.y + this.height + this.velocity.y >= canvas.height
      ? (this.velocity.y = 0)
      : (this.velocity.y += gravity);
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
    y: canvas.height - 50,
  },
});

player.draw();
