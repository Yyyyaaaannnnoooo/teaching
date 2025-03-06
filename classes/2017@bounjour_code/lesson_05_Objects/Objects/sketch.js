let fallingCircles = [];
function setup() {
  createCanvas(innerWidth, innerHeight)

}

function draw() {
  background(51);
  let myValue = map(mouseX, 0, width, 0, 3);
  let i = 0;
  for (let i = fallingCircles.length - 1; i >= 0; i--) {// pull out every single element and call it fc
    let fc = fallingCircles[i];
    fc.move();
    fc.changeColor();
    fc.grow();
    if(fc.y < 0 || fc.y > height){
      fallingCircles.splice(i, 1);
    }
  }
  for (const fc of fallingCircles) {
    fc.show();
  }
}

function mouseMoved(){
  let increment = random(10, 100);
  fallingCircles.push(new FallingCircle(mouseX, mouseY, increment));
}