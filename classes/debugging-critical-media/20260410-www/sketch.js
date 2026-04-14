// variable that will contain the video
let video;
// variable to keep track to whether the video is playing or not
let playing = false;

// preload function that executes code before draw and setup
function preload() {
    // load video, replace the path with a path to a locally saved video
    video = createVideo("IMG_0422.MOV");
    // hide the video, as it normally loads it into a DOM element
    // but we want to use as a texturing element for 3d objects
    video.hide();
}

function setup() {
    // build the canvas
    createCanvas(windowWidth, windowHeight, WEBGL);
    background(0);
    // video.size(AUTO, 200)
    // video.resize(400, 300);
    // video.loop();
}

function draw() {

    // draw the video as a flat image
    image(
        video, // video
        0, // x position
        0, // y position
        500, // width
        300 // height
    );

    noStroke();

    // draw a big sphere that replaces the background and rotates

    // lights()
    // push()
    // translate(0, 0, 0)
    // rotateY(frameCount * 0.01)
    // texture(video)
    // sphere(2000)
    // pop()

    // animate a cube using sin on cos functions

    push()
    translate(
        sin(frameCount * 0.05) * 150,
        cos(frameCount * 0.06) * 150,
        0
    )
    rotateY(frameCount * 0.01)
    texture(video)
    box(150)
    pop()

    push()
    translate(0, -160, 0)
    rotateY(frameCount * 0.02)
    texture(video)
    box(200, 150, 50)
    pop()

}

function mousePressed() {
    console.log(playing);
    if (playing === true) {
        video.pause()
    } else {
        video.loop()
    }

    playing = !playing;
}

