
function setup() {
    // setting up the sketch before to start drawing
    createCanvas(innerWidth - 6, innerHeight - 6); // or (innerWidth, innerHeight) [full screen]
    background(0)
}

function draw() {
    background(0);
    noFill();
    stroke(255);

    let h = 150;
    let animation = sin(frameCount * 0.05)
    animation = map(animation, -1, 1, 0.5, 1.8)
    h = h * animation;

    let animation2 = sin(frameCount * 0.05)
    animation2 = map(animation2, -1, 1, 0, 255)

    let animation3 = sin(frameCount * 0.05)
    animation3 = map(animation3, -1, 1, 100, 250)
    let animation4 = sin(frameCount * 0.05)
    animation4 = map(animation4, -1, 1, 100, 400)
    let animation5 = cos(frameCount * 0.001)
    animation5 = map(animation5, -1, 1, 0, 16)
    // console.log(frameCount);

    for (let i = 0; i < 200; i++) {
        let redValue = map(i, 0, 50, 0, 255);
        stroke(redValue, 255 - redValue, animation2);
        push()
        translate(width / 2, height / 2)
        let angle = map(i, 0, 100, 0, animation5 * PI)
        rotate(angle)
        ellipse(0, 0, animation3 + i * 5, i * 3 + h)
        pop()
    }
}

/* VERY IMPORTANT FEATURE TO RESIZE THE CANVAS*/

function windowResized() {
    resizeCanvas(innerWidth, innerHeight);
}