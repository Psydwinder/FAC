const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

window.addEventListener("resize", drawBackground);

const spheres = [];

class Sphere {
  constructor() {
    this.x = 0;
    this.y = Math.random() * 200 - 100 + window.innerHeight / 2;
    this.randomY = Math.random();
    this.ySpeed = Math.random() / 6;
    this.xSpeed = Math.random() / 2;
    this.size = Math.random() * 1.5 + 1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = "#3f2b7a";
    ctx.fill();
    ctx.closePath();
  }
  move() {
    this.x += this.xSpeed;
    this.y += this.randomY > 0.5 ? -this.ySpeed : +this.ySpeed;
  }
}

function createSphere() {
  spheres.push(new Sphere());
}

function drawBackground() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  spheres.forEach((sphere) => {
    sphere.draw();
    sphere.move();
  });
}

const backgroundExecution = setInterval(drawBackground, 7);
const sphereCreation = setInterval(createSphere, Math.random() * 700);

export { drawBackground as adjustCanvasSize };
