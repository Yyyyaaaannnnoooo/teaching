let x = 100;
let y = 100;
let directionX = 1;
let directionY = 1;
let velocityX = 10;
let velocityY = 10;
let string = 'some text';
let boolean = false;
// floor() round()
function setup() {
  createCanvas(600, 600);
  colorMode(HSB);
}

function draw() {
  // background(51);
  // noStroke();
  stroke(0)
  fill(x % 255, 255, 255);
  ellipse(x, y, 20);
  y += velocityX * directionY;
  x += velocityY * directionX;
  if (y > 600) {
    // y = 0;
    directionY = -1;
    // x += 30;
  }
  if (y < 0) {
    directionY = 1;
  }
  if (x > 600) {
    directionX = -1;
  }
  if (x < 0) {
    directionX = 1;
  }
  if(frameCount % 10 == 0){
    // add some random number to the x and y
    velocityX = random(5);
    velocityY = random(3);
  }
  // y = y + a number;
  // ++ adds 1 to a number
  // -- subtracts 1 to a number
  // += adds any number to a number
  // -= ..
  // *= ..
  // /= ..

  // for(let i = 0; i < 10; i += 3){
  //   ellipse(300 + i * 10, 300, 200);
  // }
}