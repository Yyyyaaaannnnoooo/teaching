let r = 200;//radius
function setup() {
  // put setup code here
  // rectMode(CENTER);
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  // background(0);
  // save mouse positions into variables
  let x = mouseX;
  let y = mouseY;
  background(x % 255, 255 - y % 255, 0);  
  let vertices = map(mouseX, r, width - r, 4, 10);
  let start = 0;
  beginShape();
  for (let i = start; i < vertices; i++) {
    let angle = map(i, start, vertices, 0, TWO_PI);
    let posX = r * cos(angle) + x;
    let posY = r * sin(angle) + y;
    vertex(posX, posY);
  }
  endShape();
  // i'm transforming a circle
  // to a square 
  // with an if/else statement
  if (x > width / 2) {
    // fill();
    rect(x - r / 2, y - r / 2, r, r);
  } else {
    // fill();
    ellipse(x, y, r);
  }
  // map(mouseX, 0, width, min number of vertices, max number of vertices);

}

function windowResized() {
  resizeCanvas(innerWidth, innerHeight);
}