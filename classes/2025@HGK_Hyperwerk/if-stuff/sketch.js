let x = 0;
let y = 0;
let direction = 1;

function setup() {
    // setting up the sketch before to start drawing
    createCanvas(innerWidth-6, innerHeight-6); // or (innerWidth, innerHeight) [full screen]
    background(100)  
}

function draw() {
    background(100); // clear the canvas
    x = x + 1 * direction;
    // console.log(x);
    // rotate(PI/3);
    rect(x , y, 50, 50);
    if(x > 400){
        // reset to zero
        // x = 0;
        // change direction
        direction = -1;
    }
    if(x <= 0){
        direction = 1;
    }
    // let newX = 100 + sin(x * 0.01) * 100;
    // rect(newX, 100, 50, 50);
}

/* VERY IMPORTANT FEATURE TO RESIZE THE CANVAS*/

function windowResized() {
    resizeCanvas(innerWidth-6, innerHeight-6);
}