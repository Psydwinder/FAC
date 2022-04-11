const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const backgroundDrawSpeed = 10;
const backgroundExecution = setInterval(drawBackground, backgroundDrawSpeed);
const sphereCreation = setInterval(createSphere, 500);
const sphereCleanup = setInterval(cleanupSpheres, 10000);
let spheres = [];

function drawBackground() {
  resizeCanvas(); // Redraws the whole canvas, avoiding trails
  drawSpheres();
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight < 450 ? 450 : window.innerHeight;
}

function drawSpheres() {
  // For loop used instead of array method to improve performance
  for (
    let currentSphere = 0, spheresLength = spheres.length; // cache array length for performance
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
  // Removes spheres that are currently out of bounds to improve performance
  spheres = spheres.filter(
    (sphere) =>
      sphere.x <= window.innerWidth &&
      sphere.y <= window.innerHeight &&
      sphere.y >= 0 &&
      sphere
  );
}

class Sphere {
  constructor() {
    this.x = 0;
    this.y = Math.random() * window.innerHeight;
    // Movement along the Y axis has been set to a slower speed than the X axis, prioritizing left to right movement over up or down;
    this.yMovement = Math.random() / 5;
    this.xMovement = Math.random() / 3;
    this.upOrDown = Math.random() < 0.5 ? -this.yMovement : +this.yMovement;
    this.size = Math.random() * 1.5 + 1; // Minimum size of sphere set to be at least one
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); // (x, y, radius, startAngle, endAngle) endAngle set to 2pi radians (360deg)
    ctx.fillStyle = "#4d3c82";
    ctx.fill();
    ctx.closePath();
  }

  move() {
    this.x += this.xMovement;
    this.y += this.upOrDown;
  }
}

export { resizeCanvas };
