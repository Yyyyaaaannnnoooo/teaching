let rot = 0;
function setup() {
  // put setup code here
  createCanvas(600, 600, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(51)
  // put drawing code here
  // noStroke();
  // += -=
  let originX = mouseX - width / 2;
  let originY = mouseY - height / 2;
  let originZ = width / 2;
  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      for (let z = 0; z < 10; z++) {
        // push and pop apply transformation to every single shape
        push();
        // transformations
        translate(originX + (x * 30), originY + (y * 30), originZ - (z * 30));
        rotateX(rot * x);// rotates on x axis
        rotateY(rot + y);// y axis
        rotateZ(rot - z);// z axis
        // there is even more
        // rotateX(radians(rot));
        // rotateY(radians(rot));
        box(10);//draws a cube with size 10
        pop();
      }
    }
  }
  // rect(0, 0, 100 , 100)
  // rot += PI / 100;
  rot += 2;
}