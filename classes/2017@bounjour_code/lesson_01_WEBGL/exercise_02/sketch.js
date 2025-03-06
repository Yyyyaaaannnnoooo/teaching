let inc;
let rot = 0;
function setup() {
  // put setup code here
  createCanvas(600, 600, WEBGL)
  pixelDensity(1);
  inc = PI / 1000;
  rectMode(CENTER);
}

function draw() {
  // ortho();
  noFill();
  stroke(255);
  background(51)
  // noStroke();
  // translate(width / 2, height / 2);
  // for (let i = 0; i < 10; i++) {

    rotateX(rot);
    rotateY(rot);
    // ellipse(10 + i * 10, 0, 200, 200);
    sphere(200, 3, 10)
  // }
  rot += inc;
}

function mouseClicked() {
}