let cnv;
let radius = 20;
let vertices = 4;
let inc;
let wave = 0;
let waveHeight = 10;
let waveFreq = 0;
let period = 3;
let polygonNum = 30;
function setup() {
  cnv = createCanvas(innerWidth, innerHeight);
  cnv.parent('p5Sketch');
  inc = PI / 50;// this is the speed of the wave
}

function draw() {
  background(51);
  noFill();
  strokeWeight(3)
  stroke(0, 255, 255);
  // get the values from the HTML sliders
  vertices = document.getElementById('vertices').value;
  period = document.getElementById('frequency').value;
  waveHeight = document.getElementById('height').value;
  polygonNum = document.getElementById('number').value;
  for (let i = 1; i <= polygonNum; i++) {
    // here we define the wave frequency 
    waveFreq = map(i, 0, polygonNum, 0, TWO_PI * period);
    // here we define how the single polygons move along their y axis
    let y = (height / 2) + (sin(wave + waveFreq) * waveHeight);
    // here we draw the polygon
    polygon(vertices, radius * i, 5 * i, width / 2, y);
  }
  wave += inc;
}
/**
 * this function draws a squished polygon
 * @param {Number} vert number of vertices
 * @param {Number} r radius
 * @param {Number} offset offset of the points
 * @param {Number} posX position on x axis
 * @param {Number} posY position on y axis
 */
function polygon(vert, r, offset, posX, posY) {
  beginShape(POINTS);
  // draw a polygon using sine and cosine and polar coordinate algorithm
  for (let i = 0; i < vert; i++) {
    let angle = map(i, 0, vert, 0 + offset, TWO_PI + offset);
    let x = cos(angle) * r + posX;
    // we divide the radius by 2 to create a 3d effect
    let y = sin(angle) * (r / 2) + posY;
    vertex(x, y);
  }
  endShape(CLOSE);
}

function windowResized() {
  resizeCanvas(innerWidth, innerHeight);
}