function setup() {
    // setting up the sketch before to start drawing
    createCanvas(400, 600); // or (innerWidth, innerHeight) [full screen]
    background(100)
}

function draw() {
    background(100); // background color
    // here the drawing happens
    // drawing a rectangle
    // rect(x, y, width, height);

    // mouseX => 0 : 400
    // console.log("mouse: "+mouseX);

    // define a color based on the mouse position
    // map(mouseX, 0, width, 0, 255) => 0 : 255
    // map is a function that maps a value from one range to another
    // map(value, start1, stop1, start2, stop2)
    // mouseX is the x position of the mouse
    // width is the width of the canvas
    // 0 is the start of the range
    // 255 is the end of the range
    let colorB = map(mouseX, 0, width, 0, 255);


    fill(0, 0, colorB); // fill color
    noStroke(); // no stroke
    rect(100, 200, 200, 40);

    // drawing circle
    // ellipse(x, y, width, height);

    fill(255, 0, 0); // fill color
    noFill(); // no fill
    stroke(255, 0, 0); // stroke color
    strokeWeight(2); // stroke weight
    ellipse(200, 200, 50, 50);

    stroke(0, 0, 255); // stroke color
    ellipse(width / 2, height / 2, mouseX, mouseY);


    // // loops!
    // for(start, end, increment){
    //     // repeat something
    // }

    // // if statement
    // if(statement == true){
    //     // do something
    // }else{
    //     // do something else
    // }
}

/* VERY IMPORTANT FEATURE TO RESIZE THE CANVAS*/

function windowResized() {
    // resizeCanvas(innerWidth, innerHeight);
}