function setup() {
  // put setup code here 
  createCanvas(600, 600);
  // background(r[0 - 255], g[0 - 255], b[0 - 255]);
  background(255, 0, 255);
}
// 8 69 56 integers
// 2.567 6.890 4567.567 float
// 'I love coding' "i hate coding" `I medium code` string
let myNumber = 0;
function draw() {
  background(0, 0, 0);
  // put drawing code here
  // ellipse(position on x axis, position on y axis, width, height);
  // this is my first ellipse
  // ellipse(width / 2, height / 2, width - 50, height - 50);
  // fill(r, g, b)
  fill(255, 0, 0);
  // stroke(255, 255, 255);
  // strokeWeight(5);
  // stroke(0, 255, 0);
  let r = 300;
  // for(start, end, increment)
  for (let i = 0; i < 5; i += 1) {
    fill(i * 25.5);
    // strokeWeight(i);
    rect(x, y, width, height);
  }
}