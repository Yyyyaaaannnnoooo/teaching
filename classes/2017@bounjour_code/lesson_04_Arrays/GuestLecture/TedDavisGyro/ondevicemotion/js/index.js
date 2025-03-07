/* 
ondevicemotion
mobile gyro websites workshop
teddavis.org @ bonjour_code 2018 
*/

/* PREFS */
let easing = 0.05; // set between 0 - 1
const decPlaces = 3; // # of dec in debug

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

  /* DEBUG INFO */
  let debugHTML =
    db("RAW") +
    db("SMOOTHED") +
    db("RX", rx) +
    db("SX", sx) +
    db("RY", ry) +
    db("SY", sy) +
    db("RZ", rz) +
    db("SZ", sz);
  document.getElementById("debug").innerHTML = debugHTML;

  /* YOUR CODE HERE */
  document.body.style.fontSize = mapVal(sx, -5, 5, 1, 10) + "vh";

  // change background color
  let col1 = parseInt(mapVal(sx, -5, 5, 0, 255));
  let col2 = parseInt(mapVal(sy, 0, 9, 0, 255));
  let col3 = parseInt(mapVal(sz, -10, 10, 255, 0));
  document.body.style.backgroundColor = 'rgb(' + col1 + ', ' + col2 + ', ' + col3 + ')';
  // moving the box div
  let top = parseInt(mapVal(sx, -5, 5, 0, innerWidth)) + 'px';
  let left = parseInt(mapVal(sz, -5, 5, 0, innerHeight)) + 'px';
  let myDiv = document.getElementById('box');
  myDiv.style.top = top;
  myDiv.style.left = left;
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

/* VALUE DEBUGGING */
function db(dbname, dbvar) {
  let dbval = "";
  if (dbvar != null) dbval = dbvar.toFixed(decPlaces);
  return '<div class="db">' + dbname + ": " + dbval + "</div>";
}