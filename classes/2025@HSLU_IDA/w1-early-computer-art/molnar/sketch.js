function setup() {
    // happens only once at page load
    createCanvas(600, 600)
    background(127)
    rectMode(CENTER)
}

function draw() {
    // position x axis, y axis, size

    
    
    fill(0, 255, 0)
    stroke(255, 0, 255)
    strokeWeight(10)
    square(150, 50, 100)
    
    fill(255, 0, 0)
    
    square(100, 300, 100)
    square(300, 0, 100)

    for(let i = 0; i < 20; i++){
        console.log('number: '+i)
        console.log(i%4);
        
        fill(255)
        stroke(0)
        strokeWeight(1)
        // noFill()
        if(i <= 5){
            fill(0, 0, 255)
        }
        square(200, 400, 200 - (i * 10))
    }
    noLoop()
}