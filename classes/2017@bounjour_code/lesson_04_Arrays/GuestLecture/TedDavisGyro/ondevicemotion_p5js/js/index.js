/* VARS FOR LINE */
let xpos, ypos, xposp, yposp;
let pos = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  strokeWeight(15);
  background(0);
  xpos = width / 2;
  ypos = height / 2;
  colorMode(HSB)
}

function draw() {
  background(0);
  xpos += sx; // sx
  ypos -= sy; // sy
  pos.push(createVector(xpos, ypos));
  beginShape();
  let i = 0;
  for(const point of pos){
    let col = map(i, 0, pos.length, 0, 255)
    fill(col, 255, 255);
    vertex(point.x, point.y);
    i++;
  }
  endShape();
  if(pos.length > 300){
    pos.splice(0, 1);
  }
  // line(xpos, ypos, xposp, yposp);

  xposp = xpos;
  yposp = ypos;
}


/* PREFS */
let easing = 0.5; // set between 0 - 1

/* VARS */
let rx, ry, rz, sx, sy, sz;
rx = ry = rz = sx = sy = sz = 0;

/* ONDEVICEMOTION */
// https://developer.mozilla.org/en-US/docs/Web/Events/devicemotion
window.ondevicemotion = event => {
  /* RAW VALUES */
  rx = event.accelerationIncludingGravity.x;
  ry = event.accelerationIncludingGravity.y;
  rz = event.accelerationIncludingGravity.z;

  /* SMOOTHED VALUES */
  sx = smoothVal(rx, sx);
  sy = smoothVal(ry, sy);
  sz = smoothVal(rz, sz);
};

/* VALUE MAPPING */
function mapVal(value, istart, istop, ostart, ostop) {
  return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
}

/* VALUE SMOOTHING */
function smoothVal(inputVal, outputVal) {
  let tarVal = inputVal;
  let calcVal = tarVal - outputVal;
  outputVal += calcVal * easing;
  return outputVal;
}