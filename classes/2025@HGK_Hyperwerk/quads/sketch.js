function setup() {
  // setting up the sketch before to start drawing
  createCanvas(637, 800); // or (innerWidth, innerHeight) [full screen]
  background(200)
  // noLoop()
}



function draw() {

  let number_of_cells = 11; // number of cells in the grid
  let cell = width / number_of_cells; // size of the cell
  let counter = 1; // counter for the cells
  for (let i = 0; i < number_of_cells; i += 1) {
    for (let j = 0; j < number_of_cells; j += 1) {
      fill(100)
      if (counter % 2 == 0) {
        fill(200)
      }
      rect(cell * j, cell * i, cell, cell);
      fill(255)
      text("fib:" + fibonacci(counter), cell * j, cell * i, cell, cell)
      // text("fib j:" + fibonacci(i+1), cell * j, cell*i, cell, cell)
      counter += 1;
    }
  }

  strokeWeight(10)
}

// https://www.geeksforgeeks.org/javascript-program-to-print-fibonacci-series/

function fibonacci(num) {
  let num1 = 0;
  let num2 = 1;
  let sum;
  if (num === 1) {
    return num1;
  } else if (num === 2) {
    return num2;
  } else {
    for (let i = 3; i <= num; i++) {
      sum = num1 + num2;
      num1 = num2;
      num2 = sum;
    }
    return num2;
  }
}

console.log("Fibonacci(5): " + fibonacci(5));
console.log("Fibonacci(8): " + fibonacci(13));


/* VERY IMPORTANT FEATURE TO RESIZE THE CANVAS*/

function windowResized() {
  // resizeCanvas(innerWidth, innerHeight);
}