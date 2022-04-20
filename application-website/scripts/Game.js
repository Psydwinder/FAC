// TODO
// Display top 10 leaderboard
// Change sprites
// Add SFX
// Refactor

import { firestore, db } from "./firebase.js";

const canvas = document.querySelector("#game");
const ctx = canvas.getContext("2d");
const rankingInput = document.querySelector(".ranking__input");
const rankingSaveBtn = document.querySelector(".ranking__button");

// Game dimensions
canvas.height = 360;
canvas.width = 620;
const floorPositionY = canvas.height - 110;

canvas.addEventListener("click", init);
rankingSaveBtn.addEventListener("click", addScoreToDb);

let hasGameStarted = false;
let score = 0;
let gameVelocity;
let createVerticalEnemies;
let createHorizontalEnemies;
let updateDifficultyInterval;
let verticalInterval = 1000;
let horizontalInterval = 2000;

function init() {
  if (hasGameStarted) return;
  hasGameStarted = true;
  setIntervals();
  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", handleKeyUp);
  ctx.fillStyle = "white";
  function drawGame() {
    if (hasGameStarted) {
      window.requestAnimationFrame(drawGame);
      drawScore();
      background.draw();
      // drawGameBackground();
      updateObjects();
      movePlayer();
      clearEnemies();
      clearProjectiles();
    }
  }
  drawGame();
}

function resetCanvas() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function setIntervals() {
  createVerticalEnemies = setInterval(createVerticalEnemy, 1000);
  createHorizontalEnemies = setInterval(createHorizontalEnemy, 2000);
  updateDifficultyInterval = setInterval(updateDifficulty, 1000);
}

function clearIntervals() {
  clearInterval(createHorizontalEnemies);
  clearInterval(createVerticalEnemies);
  clearInterval(updateDifficultyInterval);
}

function updateObjects() {
  player.update();
  projectiles.forEach((projectile) => projectile.update());
  // enemies.forEach((enemy) => enemy.update());
  gameVelocity = score / 200;
}

function updateDifficulty() {
  if (score % 200 === 0 && score > 0) {
    clearIntervals();
    horizontalInterval -= 50;
    verticalInterval -= 50;
    createHorizontalEnemies = setInterval(
      createHorizontalEnemy,
      horizontalInterval
    );
    createVerticalEnemies = setInterval(createVerticalEnemy, verticalInterval);
  }
}

function drawGameBackground() {
  // Background Image NightForest by saukgp - https://saurabhkgp.itch.io/pixel-art-forest-background-simple-seamless-parallax-ready-for-2d-platformer-s
  const backgroundImg = new Image();
  backgroundImg.src = "./media/game-assets/game-background.png";
  backgroundImg.onload = () =>
    ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
}

function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "white";
  ctx.fillText(`Score:  ${score}`, canvas.width - 120, 30);
  ctx.fillText(`Hi-score:  ${localStorage.hiScore}`, canvas.width - 120, 50);
}

class Sprite {
  constructor({ position, dimensions, imageSrc, frame, scale = 1 }) {
    this.x = position.x;
    this.y = position.y;
    this.width = dimensions.width;
    this.height = dimensions.height;
    this.frame = frame;
    this.imageSrc = imageSrc;
    this.scale = scale;
  }

  draw() {
    this.image = new Image();
    this.image.src = this.imageSrc;
    this.image.onload = () =>
      ctx.drawImage(
        this.image, // image,
        this.frame.x, // subRectangleX,
        this.frame.y, // subRectangleY,
        this.frame.width, // subRectangleWidth,
        this.frame.height, // subRectangleHeight,
        this.x, // destinationX,
        this.y, // destinationY,
        this.width * this.scale, // destinationWidth,
        this.height * this.scale // destinationHeight
      );
  }
}

const background = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  dimensions: {
    height: canvas.height,
    width: canvas.width,
  },
  frame: {
    x: 0,
    y: 0,
    width: canvas.width,
    height: canvas.height,
  },
  imageSrc: "./media/game-assets/game-background.png",
});

class Character extends Sprite {
  constructor(obj) {
    const { position, velocity, dimensions, gravity = 0.7 } = obj;
    super(obj);
    this.x = position.x;
    this.y = position.y;
    this.velocity = velocity;
    this.width = dimensions.width;
    this.height = dimensions.height;
    this.gravity = gravity;
  }

  update() {
    this.draw();
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    this.y + this.velocity.y >= floorPositionY
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
    width: 65,
    height: 110,
  },
  position: {
    x: canvas.width / 2,
    y: floorPositionY,
  },

  frame: {
    x: 110,
    y: 72,
    width: 65,
    height: 110,
  },
  scale: 0.85,
  imageSrc: "./media/game-assets/Idle.png",
});

// Player Movement
let lastDirection = "";
const directions = {
  right: false,
  left: false,
};

function handleKeyDown({ key }) {
  if (key === "d") return changeDirection("right");
  if (key === "a") return changeDirection("left");
  // Check if player is on ground to allow jump
  if (
    key === "k" &&
    player.y + player.height >= floorPositionY - player.height
  ) {
    player.velocity.y = -15;
  }
  if (key === "j") shoot();
}

function handleKeyUp({ key }) {
  if (key === "d") directions.right = false;
  if (key === "a") directions.left = false;
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
    this.hp = 2;
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
      ) {
        this.hp -= 1;
        projectile.hasCollided = true;
        score += 50;
        if (this.hp === 0) this.hasCollided = true;
      }
    });
  }

  detectPlayerCollision() {
    if (
      player.x + player.width > this.x &&
      player.x < this.x + this.width &&
      player.y + player.height > this.y &&
      player.y < this.y + this.height
    )
      gameOver();
  }
}

function createVerticalEnemy() {
  enemies.push(
    new Enemy({
      gravity: 0.1,
      velocity: {
        x: Math.random() * 1,
        y: Math.random() * 5 + gameVelocity,
      },
      dimensions: {
        width: 25,
        height: 25,
      },
      position: {
        x: player.x + Math.random() * 100,
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
        x: Math.random() + gameVelocity + 1,
        y: 0,
      },
      dimensions: {
        width: 25,
        height: 25,
      },
      position: {
        x: -25,
        y: canvas.height - floorPositionY,
      },
    })
  );
}

// Projectiles
let projectiles = [];
function clearProjectiles() {
  projectiles = projectiles.filter(
    (projectile) =>
      projectile.x <= canvas.width &&
      projectile.y <= canvas.height &&
      !projectile.hasCollided
  );
}

class Projectile {
  constructor() {
    this.x = player.x + player.width / 2;
    this.y = player.y;
    this.height = 5;
    this.width = 5;
    this.hasCollided = false;
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
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.fillText("Game Over!", canvas.width / 2, canvas.height / 2);
  hasGameStarted = false;
  enemies = [];
  projectiles = [];
  (localStorage.hiScore || 0) < score && localStorage.setItem("hiScore", score);
  gameVelocity = 0;
  horizontalInterval = 2000;
  verticalInterval = 1000;
  addScoreToDb();
  clearIntervals();
}

async function addScoreToDb() {
  const { hiscoreRef } = await fetchData();
  const currentScore = { name: rankingInput.value, score };
  await firestore.updateDoc(hiscoreRef, {
    users: firestore.arrayUnion(currentScore),
  });
  displayRanking(currentScore);
  score = 0;
}

async function displayRanking(currentScore) {
  const { sortedHiscoreData } = await fetchData();
  const top10Div = document.querySelector(".ranking__top10");
  const top10 = sortedHiscoreData.slice(0, 10);
  const displayTop10 = () => top10.forEach(({ name, score }) => {});
  const currentScorePosition = sortedHiscoreData.findIndex(
    (user) =>
      user.name === currentScore.name && user.score === currentScore.score
  );

  top10Div.innerText = top10;
}

async function fetchData() {
  const hiscoreRef = firestore.doc(db, "ranking", "hiscores");
  const hiscoreSnap = await firestore.getDoc(hiscoreRef);
  const hiscoreData = hiscoreSnap.data();
  const sortedHiscoreData = hiscoreData.users.sort(
    (user1, user2) => user2.score - user1.score
  );
  return { hiscoreRef, hiscoreSnap, hiscoreData, sortedHiscoreData };
}
