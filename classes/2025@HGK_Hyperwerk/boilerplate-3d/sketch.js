function setup(){
    // setting up the sketch before to start drawing
    // define it as 3d rendering
    createCanvas(innerWidth - 6, innerHeight - 6, WEBGL);
    background(100)
}

function draw(){
    background(100); // background color

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
    // console.log("color: "+colorB);

    fill(0, 0, colorB); // fill color
    // 3d rendering has x, y, z position starting from the center
    // furthermore, when working in 3d it si better to use the translate function
    // yet it should be used within push() and pop() functions
    push(); // save the current state of the canvas
    // use translate to move the origin of the canvas
    translate(-width/2, -height/2, 0);
    // and than move based on mouse position
    translate(mouseX, mouseY, 0);
    // rotate the rectangle on X axis
    rotateX(PI/4);
    // rotate the rectangle on Y axis
    rotateY(PI/4);
    // rotate the rectangle on Z axis
    rotateZ(PI/4);
    // draw a cube
    // the cube is 100x100x100
    box(100, 100, 100);
    pop(); // restore the previous state of the canvas

}

/* VERY IMPORTANT FEATURE TO RESIZE THE CANVAS*/

function windowResized(){
    // resizeCanvas(innerWidth, innerHeight);
}