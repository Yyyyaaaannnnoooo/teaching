let rect_sizes = [100, 125, 150, 175, 200, 225, 250, 275, 300];



function setup() {
  // setup of the sketch
  // let canvas = createCanvas(innerWidth, innerHeight);
  // lets use WEBGL, for 3d shapes
  let canvas = createCanvas(innerWidth, innerHeight, WEBGL);
  // put canvas inside div with id "p5"
  // canvas.parent('#p5')
  background(0);
  rectMode(CENTER);
  noFill();
  // frameRate(5)
}

let mx = []
let my = []

let limit = 30
let index = 0
function draw() {
  stroke(255)
  // for (let i = 0; i < rect_sizes.length; i++) {
  //   let rect_size = rect_sizes[i];
  //   let x = width / 2;
  //   let y = height / 2;
  //   rect(0, 0, rect_size, rect_size)
  //   push()
  //   translate(x, y)
  //   rotate(i)
  //   pop()
  // }
  background(0)
  // lights()
  // fill(255)


  index  =  index % limit
  for (let i = 0; i < mx.length; i++) {
    index = (index + i) % limit 
    // let x = mx[index];
    // let y = my[index];
    // try also the code below
    let x = mx[i];
    let y = my[i];
    let d = dist(x, y, width / 2, height / 2)

    let rotx = map(x, 0, width, 0, TWO_PI)
    let roty = map(y, 0, height, 0, TWO_PI)
    let sizex = map(d, 0, width, 10, 400)
    let sizey = map(d, 0, height, 10, 300)
    push()
    translate(0, 0)
    rotateX(rotx)
    rotateZ(roty)
    box(sizex, sizey, 100)
    pop()
  }
  index++
  
  // remove first item whe array is too big
  if (mx.length >= limit) {
    mx.shift()
  }
  if (my.length >= limit) {
    my.shift()
  }

}

function mouseMoved() {
  mx.push(mouseX)
  my.push(mouseY)
}






















  // background(0)
  // ///~~~ 01. draw rectangles from array ~~~///
  // noFill()
  // stroke(255);
  // let center_x = width / 2;
  // let center_y = height / 2;
  // for (let i = 0; i < rect_sizes.length; i++) {
  //   let x = center_x;
  //   let y = center_y;
  //   // rect(x, y, rect_sizes[i], rect_sizes[i]);
  //   ///~~~ 02. add rotation ~~~///
  //   // let rotation = i * TWO_PI / rect_sizes.length;
  //   let rotation = rect_sizes[i];
  //   // in order to assign transformations to the shapes
  //   // we need to use push and pop functions
  //   // otherwise the transformation will be applied to
  //   // all the shapes in the sketch in an additive way
  //   push()
  //   // very important to use the translate function FIRST!
  //   translate(x, y)
  //   // afterwards apply transformations to the shape
  //   // such as rotation, scaling, etc.
  //   rotate(rotation)
  //   // rect(0, 0, rect_sizes[i], rect_sizes[i]);
  //   pop()
  // }

  // ///~~~ 03. store mouse position in array and draw  ~~~///
  // ///~~~ rectagles that follow the mouse             ~~~///
  // ///~~~             ATTENZIONE!!!!                  ~~~///
  // ///~~~ there is the need to set the limit to the   ~~~///
  // ///~~~ array otherwise we will have memory problem ~~~///

  // // fill the arrays with mouse positions
  // mouse_x.push(mouseX);
  // mouse_y.push(mouseY);

  // // draw rectangles
  // for (let i = 0; i < mouse_x.length; i++) {
  //   // let x = mouse_x[i];
  //   // let y = mouse_y[i];

  //   // if we use WEBGL and the 3d environment
  //   // the default position is the center and not upper left corner
  //   // therefore we need to subtract the center of the canvas
  //   // to get the correct position of the rectangles
  //   let x = mouse_x[i] - center_x;
  //   let y = mouse_y[i] - center_y;
  //   // here we need to use the pop and push functions again
  //   push()
  //   // translate(x, y)
  //   // try to take advantage of the z dimension
  //   // translate(x, y, (i + 1) * 10)
  //   // what if we used the x and y stored value to rotate instead
  //   // of moving the rectabgles
  //   // translate(0, 0, ((i + 1) * 10) - 100)
  //   translate(0, 0)
  //   let rotation_x = map(mouse_x[i], 0, width, 0, TWO_PI)
  //   let rotation_y = map(mouse_y[i], 0, height, 0, TWO_PI)
  //   let size_x = map(mouse_x[i], 0, width, 100, 500)
  //   let size_y = map(mouse_y[i], 0, height, 50, 500)
  //   rotateX(rotation_x)
  //   rotateZ(rotation_y)
  //   // rect(0, 0, 300, 300);
  //   rect(0, 0, size_x, size_y);
  //   pop()
  // }

  // // remove first element of array if the limit is reached
  // if (mouse_x.length > limit) {
  //   mouse_x.shift();
  // }
  // if (mouse_y.length > limit) {
  //   mouse_y.shift();
  // }

// }
