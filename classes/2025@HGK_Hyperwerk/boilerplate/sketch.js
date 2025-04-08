let cnv;
function setup(){
    // setting up the sketch before to start drawing
    cnv = createCanvas(400, 400); // or (innerWidth, innerHeight) [full screen]
    cnv.parent('p5Sketch');// here we tell p5 in wich div should the sketch be placed
    background(0)
}

function draw(){
    // here the drawing happens
    // drawing a rectangle


    // rect(x, y, width, height);
    // rect(10, 10, 20, 40);


    // drawing circle


    // ellipse(x, y, width, height);
    // ellipse(200, 200, 50, 50);


    // drawing a free form defining the single vertices

    // beginShape();
    // vertex(x, y); // you can add as many vertices as you like
    // endShape(x, y);
    
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

function windowResized(){
    // resizeCanvas(innerWidth, innerHeight);
}