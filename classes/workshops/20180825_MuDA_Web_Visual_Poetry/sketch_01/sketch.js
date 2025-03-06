let counter = 100;
let direction = 1;
let posX = 100;
let posY = 100;
let directionX = 1;
let directionY = 1;
let velocity = 5;
function setup() {
  // put setup code here
  createCanvas(400, 375);// or choose a size
  background(255, 0, 0);
}
function draw() {
  // the code in here runs at 60 fps
  background(255, 0, 0);
  noStroke();
  let r = random(255);
  // console.log(r);
  fill(r, 255, 0);
  let w = 100; // this is the width of the ellipse
  let h = 50;
  ellipse(posX, posY, w, h);
  // counter = counter + direction

  // here we change the direction for the X - AXIS
  if (posX > width - (w / 2) || posX < 0 + (w / 2)) {
    directionX *= -1;
  }

  // here we change the direction for the Y - AXIS
  if (posY > height - (h / 2) || posY < 0 + (h / 2)) {
    directionY *= -1;
  }


  // here we change the position according to direction and velocity
  posX += directionX * velocity;
  posY += directionY * velocity;


  counter += direction * velocity;
  // console.log(counter);
}

function windowResized() {
  resizeCanvas(innerWidth, innerHeight);// resize the canvas if the window is resized
}