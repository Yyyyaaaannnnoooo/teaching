let PosX = 0

function setup() {
    // happens only once at page load
    createCanvas(600, 600)
    background(127)

    
}

function draw() {
    
    
    for (let i = 0; i < 20; i++) {
        plus(50, i, 20 * i, i * 40)
        
    }
    
    
}


function plus(size, chonky, x, y) {
    rectMode(CENTER)
    rect(x, y, size / chonky, size)
    rect(x, y, size, size / chonky)
    rectMode(CORNER)
}