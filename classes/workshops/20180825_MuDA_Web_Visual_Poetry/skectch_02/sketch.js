// let w = 300;
// let h = 300;
// let color1;
// let color2;
// function setup() {
//   // put setup code here
//   createCanvas(innerWidth, innerHeight);// or choose a size
//   rectMode(CENTER);
//   angleMode(DEGREES);
//   // define colors
//   color1 = color(255, 100, 0);// orange
//   color2 = color(0, 255, 255);// cyan
// }

// function draw() {
//    // important when you want to rotate things
//   translate(width / 2, height / 2);
//   // console.log(sy);
//   let col = map(sy, -10, 10, 0, 255)
//   background(0, col, 255 - col);
//   fill(100, 0, 150);
//   // console.log(sx);
//   for(let i = 0; i < 50; i++){
//     rotate(i + sx);
//     if(i % 2 == 0){
//       fill(color1);
//     }else{
//       fill(color2);
//     }
//     rect(0, 0, w + (i * -5), h + (i * -5));
//   }
// }

// function windowResized() {
//   resizeCanvas(innerWidth, innerHeight);// resize the canvas if the window is resized
// }

//  /* PREFS */
//  let easing = 0.5; // set between 0 - 1

//  /* VARS */
//  let rx, ry, rz, sx, sy, sz;
//  rx = ry = rz = sx = sy = sz = 0;

//  /* ONDEVICEMOTION */
//  // https://developer.mozilla.org/en-US/docs/Web/Events/devicemotion
//  window.ondevicemotion = event => {
//      /* RAW VALUES */
//      rx = event.accelerationIncludingGravity.x;
//      ry = event.accelerationIncludingGravity.y;
//      rz = event.accelerationIncludingGravity.z;

//      /* SMOOTHED VALUES */
//      sx = smoothVal(rx, sx);
//      sy = smoothVal(ry, sy);
//      sz = smoothVal(rz, sz);
//  };

//  /* VALUE MAPPING */
//  function mapVal(value, istart, istop, ostart, ostop) {
//      return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
//  }

//  /* VALUE SMOOTHING */
//  function smoothVal(inputVal, outputVal) {
//      let tarVal = inputVal;
//      let calcVal = tarVal - outputVal;
//      outputVal += calcVal * easing;
//      return outputVal;
//  }