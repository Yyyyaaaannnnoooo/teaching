// those arrays store the values of the x and y position of the polygon
let xPoint = [];
let yPoint = [];
let r = 5;
let d = 0;
// this boolean checks when the first point has been placed in the canvas
let firstPoint = false;
// this boolean checks wheter a polygon is done
let polygonDone = false;
function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  background(51);
  fill(0, 255, 0);
  stroke(255);
  beginShape();
  for (let i = 0; i < xPoint.length; i++) {
    if (!polygonDone) {
      vertex(xPoint[i], yPoint[i]);
    }
    else {
      /****************************
       * ADD HERE THE CODE TO FIND
       * THE CENTER OF THE POLYGON
      *****************************/
      vertex(mouseX + xPoint[i], mouseY + yPoint[i]);
    }
  }
  endShape();

  if (xPoint.length > 0) firstPoint = true;
  if (firstPoint && !polygonDone) {
    let x = xPoint[xPoint.length - 1];
    let y = yPoint[yPoint.length - 1];
    line(x, y, mouseX, mouseY);
    d = dist(mouseX, mouseY, xPoint[0], yPoint[0]);
    if (d < r) {
      fill(255, 0, 0);
      ellipse(mouseX, mouseY, r);
    }
  }
}

function mouseClicked() {
 if (!polygonDone) {
    xPoint.push(mouseX);
    yPoint.push(mouseY);
    if (d < r && xPoint.length > 1) {
      xPoint.push(xPoint[0]);
      yPoint.push(yPoint[0]);
      polygonDone = true;
    }
  }
  return false;
}