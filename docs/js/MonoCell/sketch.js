let colorValue = 0;
let monoCell;
let slider;
let displayWeight = false;
let cnv;
let trainCount = 0;
function setup() {
	cnv = createCanvas(400, 400);
	cnv.parent('p5Sketch');
	monoCell = new MonoCell();
	slider = createSlider(0, 255, 1);
	slider.parent('p5Sketch');
	textSize(20);
}

function draw() {
	background(colorValue);
	colorValue = slider.value();
	monoCell.show();
	monoCell.update();
	if(displayWeight){
		stroke(255, 0, 0);
		fill(0, 255 , 0);
		line(monoCell.pos.x, monoCell.pos.y,width * 0.25, height * 0.75);
		text('W1 = ' + monoCell.brain.weights[0] +
			'\nBIAS = ' + monoCell.brain.weights[1], width * 0.25, height * 0.75 + 20);
	}
}

function fart() {
	let answer = colorValue > 127 ? 1 : 0;
	let trainer = new Trainer(colorValue, answer);
	monoCell.fart(monoCell.brain.predict(trainer.inputs))
}
/**
 * trains the cell with 1000 random values
*/
function trainCell() {
	for (let i = 0; i < 1000; i++) {
		colorValue = floor(random(255));
		let answer = colorValue > 127 ? 1 : 0;
		let trainer = new Trainer(colorValue, answer);
		monoCell.brain.train(trainer.inputs, trainer.answer);
	}
	trainCount++;
	console.log('The monoCell has been trained with ' + trainCount * 1000 + ' random values')
}
function reset(){
	monoCell.reset();
}
function show(){
	displayWeight = !displayWeight;
}