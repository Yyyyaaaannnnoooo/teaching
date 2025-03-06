let posX;
let posY;
// we addan array for all the position x and y
let positionsX = [];
let positionsY = [];
// we add a limiter for our array
let arrayLimit = 300;
let walkerSize = 5;
function setup() {
  createCanvas(innerWidth, innerHeight);
  background(51);
  // we set the initial porsition to the center of the screen
  posX = width / 2;
  posY = height / 2;
}

function draw() {
  background(51)
  stroke(255);
  strokeWeight(walkerSize);
  for (let i = 0; i < positionsX.length; i++) {
    point(positionsX[i], positionsY[i]);
  }
  move();
}

function move() {
  let probability = floor(random(4));
  if (probability == 0) {
    posX += walkerSize * 2;
    // here we add the positions of x and y in the arrays
    positionsX.push(posX);
    positionsY.push(posY);
  } else if (probability == 1) {
    posY += walkerSize * 2;
    // here we add the positions of x and y in the arrays
    positionsX.push(posX);
    positionsY.push(posY);
  } else if (probability == 2) {
    posX -= walkerSize * 2;
    // here we add the positions of x and y in the arrays
    positionsX.push(posX);
    positionsY.push(posY);
  } else if (probability == 3) {
    posY -= walkerSize * 2;
    // here we add the positions of x and y in the arrays
    positionsX.push(posX);
    positionsY.push(posY);
  }
  if(positionsX.length > arrayLimit){
    positionsX.splice(0, 1);
    positionsY.splice(0, 1);
  }
}