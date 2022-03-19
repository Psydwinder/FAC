const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

window.addEventListener("resize", adjustCanvasSize);

const backgroundDrawSpeed = 10;
const backgroundExecution = setInterval(drawBackground, backgroundDrawSpeed);
const sphereCreation = setInterval(createSphere, 500);
const sphereCleanup = setInterval(cleanupSpheres, 10000);

let spheres = [];
class Sphere {
  constructor() {
    this.x = 0;
    this.y = Math.random() * 50 + window.innerHeight / 2;
    this.yMovement = Math.random() / 5;
    this.xMovement = Math.random() / 3;
    this.upOrDown = Math.random() < 0.5 ? -this.yMovement : +this.yMovement;
    this.size = Math.random() * 1.5 + 1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = "#4d3c82";
    ctx.fill();
    ctx.closePath();
  }
  move() {
    this.x += this.xMovement;
    this.y += this.upOrDown;
  }
}

function drawBackground() {
  adjustCanvasSize();
  drawSpheres();
}

function drawSpheres() {
  // For loop used instead of array method to improve performance
  for (
    let currentSphere = 0, spheresLength = spheres.length; // cache length for performance
    currentSphere < spheresLength;
    currentSphere++
  ) {
    spheres[currentSphere].draw();
    spheres[currentSphere].move();
  }
}

function createSphere() {
  spheres.push(new Sphere());
}

function cleanupSpheres() {
  spheres = spheres.filter((sphere) => {
    const { x, y } = sphere;
    if (x <= window.innerWidth && y <= window.innerHeight && y >= 0)
      return sphere;
  });
}

function adjustCanvasSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight < 450 ? 450 : window.innerHeight;
}

export { adjustCanvasSize };
