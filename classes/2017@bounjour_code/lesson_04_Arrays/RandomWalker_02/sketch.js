let posX;
let posY;
let positionsX = [];
let positionsY = [];
let radius = 5;
function setup() {
  createCanvas(innerWidth, innerHeight);
  posX = width / 2;
  posY = height / 2;
  // frameRate(15)
}

function draw() {
  background(255);
  strokeWeight(radius);
  for (let i = 0; i < positionsX.length; i++) {
    point(positionsX[i], positionsY[i]);
  }

  move();
  let arrayLimit = 300;
  if(positionsX.length > arrayLimit){
    positionsX.splice(0, 1);
    positionsY.splice(0, 1);
  }
}
function move() {
  let probability = floor(random(4)); // 0 - 3
  if (probability == 0) {
    posY -= radius;
    positionsX.push(posX);
    positionsY.push(posY);
  } else if (probability == 1) {
    posX += radius;
    positionsX.push(posX);
    positionsY.push(posY);
  } else if (probability == 2) {
    posY += radius;
    positionsX.push(posX);
    positionsY.push(posY);
  } else if (probability == 3) {
    posX -= radius;
    positionsX.push(posX);
    positionsY.push(posY);
  }
}