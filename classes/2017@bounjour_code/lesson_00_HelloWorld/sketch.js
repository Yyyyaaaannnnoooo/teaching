//GLOBAL VARIABLES
function setup() {
  // put setup code here
  createCanvas(innerWidth, innerHeight);
  fill(255, 0, 0);
  //TO PRINT SOMETHING TO THE VONSOLE USE
  console.log('a random number: ' + random(100));
  // ellipse(100, 145, 50, 100);//draws a circle
}

function draw() {
  // put drawing code here
  background(150);// draws a colored or b/w background
  line(width / 2, 0, width / 2, height);//draws a line(x1, y1, x2, y2)
  line(0, height / 2, width, height / 2);
  // if statements
  if (mouseX < width / 2 && mouseY < height / 2) {
    fill(255, 0, 0);//fills the form with a color r, g, b
  } else if (mouseX > width / 2 && mouseY < height / 2) {
    fill(0, 255, 0);
  } else if (mouseX > width / 2 && mouseY > height / 2) {
    fill(0, 0, 255);
  } else if (mouseX < width / 2 && mouseY > height / 2) {
    fill(0, 255, 255);
  }
  rect(mouseX, mouseY, 200, 300);//draws a rectangle
}
/**
 * this function makes your canvas responsive
 */
function windowResized() {
  resizeCanvas(innerWidth, innerHeight);
}