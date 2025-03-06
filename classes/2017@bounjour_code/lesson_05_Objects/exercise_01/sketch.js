let fallingObject = [];
function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight)
  // fo = new FallingObject(100, 100);
}

function draw() {
  background(0);
  if (fallingObject != null) {
    let i = 0
    for (let fo of fallingObject) {
      fo.show();
      fo.update();
      if(fo.y > height || fo.y < 0){
        fallingObject.splice(i, 1);
      }
      i++;
    }
  }
}
function mouseMoved() {
  fallingObject.push(new FallingObject(mouseX, mouseY));
}