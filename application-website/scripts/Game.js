const canvas = document.querySelector("#game");
const ctx = canvas.getContext("2d");

// TODO
// Add player collision
// Detect game over
// Add score count system
// Submit highscore to DB
// Display top 10 leaderboard
// Change sprites
// Add bg music

canvas.height = 500;
canvas.width = 500;

canvas.addEventListener("click", init);
let hasGameStarted = false;

function init() {
  const createVerticalEnemies = setInterval(createVerticalEnemy, 1000);
  const createHorizontalEnemies = setInterval(createHorizontalEnemy, 2000);

  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", handleKeyUp);

  function drawGame() {
    window.requestAnimationFrame(drawGame);
    resetCanvas();
    updateObjects();
    movePlayer();
    clearEnemies();
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
  enemies.forEach((enemy) => enemy.update());
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
    player.velocity.y = -15;
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
  if (directions.right) return (player.velocity.x = 10);
  if (directions.left) return (player.velocity.x = -10);
  player.velocity.x = 0;
}

// Enemies
let enemies = [];
if (hasGameStarted) {
}

function clearEnemies() {
  enemies = enemies.filter(
    (enemy) =>
      enemy.x <= canvas.width && enemy.y <= canvas.height && !enemy.hasCollided
  );
}
class Enemy extends Character {
  constructor(obj) {
    super(obj);
    this.leftOrRight = Math.random() <= 0.5 ? -1 : 1;
    this.hasCollided = false;
  }

  update() {
    this.draw();
    this.detectProjectileCollision();
    this.detectPlayerCollision();
    this.x += this.velocity.x * this.leftOrRight;
    this.y += this.velocity.y;
  }

  detectProjectileCollision() {
    projectiles.forEach((projectile) => {
      if (
        projectile.x >= this.x &&
        projectile.x <= this.x + this.width &&
        projectile.y >= this.y &&
        projectile.y <= this.y + this.height
      )
        this.hasCollided = true;
    });
  }

  detectPlayerCollision() {
    if (
      player.x >= this.x &&
      player.x <= this.x + this.width &&
      player.y >= this.y &&
      player.y <= this.y + this.height
    )
      gameOver();
  }
}

enemies.push(
  new Enemy({
    gravity: 0,
    velocity: {
      x: 0,
      y: 0,
    },
    dimensions: {
      width: 25,
      height: 25,
    },
    position: {
      x: 25,
      y: 0,
    },
  })
);
function createVerticalEnemy() {
  enemies.push(
    new Enemy({
      gravity: 0.1,
      velocity: {
        x: Math.random() * 1,
        y: Math.random() * 5 + 1,
      },
      dimensions: {
        width: 25,
        height: 25,
      },
      position: {
        x: Math.random() * canvas.width,
        y: 0,
      },
    })
  );
}

function createHorizontalEnemy() {
  enemies.push(
    new Enemy({
      gravity: 0,
      velocity: {
        x: Math.random() * 10 + 2,
        y: 0,
      },
      dimensions: {
        width: 25,
        height: 25,
      },
      position: {
        x: -25,
        y: canvas.height - player.height,
      },
    })
  );
}

// Projectiles
const projectiles = [];
class Projectile {
  constructor() {
    this.x = player.x + player.width / 2;
    this.y = player.y;
    this.height = 5;
    this.width = 5;
  }

  draw() {
    ctx.fillStyle = "white";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  update() {
    this.draw();
    this.y += -5;
  }
}

function shoot() {
  projectiles.push(new Projectile());
}

function gameOver() {
  ctx.fillRect(0, 0, canvas.height, canvas.width);
  alert("gameOver");
}
