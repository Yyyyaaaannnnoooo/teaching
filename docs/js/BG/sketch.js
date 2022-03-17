let minBallSize = 50;
let maxBallSize = 200;
let ellipseSize = 0;
let colorVal = 0;
const rectW = minBallSize;
function setup() {
	let cnv = createCanvas(windowWidth, windowHeight);
	cnv.position(0, 0);
	cnv.style('z-index', '-1');
	// cnv.style('position', 'fixed');
	document.getElementById('defaultCanvas0').style.position = 'fixed';
	colorz = [
		color(255, 0, 0),
		color(0, 255, 0),
		color(0, 0, 255),
		color(0, 255, 255),
	];
	colorMode(HSB);
}

function draw() {
	colorVal = map(mouseX, 0, width, 0, 255);
	let angle = map(mouseX, 0, width, 0, PI);
	ellipseSize = abs(cos(angle) * maxBallSize) + minBallSize;
	background(colorVal / 2, 255, 255)
	noStroke();
	fill(colorVal, 155, 200);
	rect(width/ 2 - rectW / 2, 0, rectW, mouseY - minBallSize * 0.5);
	rect(width/ 2 - rectW / 2, (mouseY - minBallSize * 0.5) + minBallSize, rectW, height);
	fill(255 - colorVal, 50, 200);
	ellipse(mouseX, mouseY, ellipseSize * 0.85);
}
function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}
