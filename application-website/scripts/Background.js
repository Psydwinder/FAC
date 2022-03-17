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
    this.y = Math.random() * 200 - 100 + window.innerHeight / 2;
    this.upOrDown = Math.random();
    this.ySpeed = Math.random() / 5;
    this.xSpeed = Math.random() / 3;
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
    this.y += this.upOrDown < 0.5 ? -this.ySpeed : +this.ySpeed;
  }
}

createSphere();

function drawBackground() {
  adjustCanvasSize();
  for (
    let currentSphere = 0, spheresLength = spheres.length;
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
    if (sphere.x <= window.screen.width && sphere.y <= window.screen.height)
      return sphere;
  });
}

function adjustCanvasSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

export { adjustCanvasSize };
