let x = 100;
let y = 100;
let directionX = 1;
let directionY = 1;
let velocityX = 10;
let velocityY = 5;
function setup() {
  noCanvas();
  frameRate(1);
}

function draw() {//is not drawing
  // put drawing code here

  let myDiv = getDiv('content');
  let theWidth = myDiv.getBoundingClientRect().width;
  let theHeight = myDiv.getBoundingClientRect().height;
  bounce(theWidth, theHeight);
  // myDiv.style.backgroundColor = '#f00';
  myDiv.style.position = 'fixed';
  myDiv.style.top = y + 'px';
  myDiv.style.left = x + 'px';
  myDiv.style.backgroundColor = setDivColor(x, y);
  // get the value of the slider with id mySlider
  console.log(document.getElementById('mySlider').value)
  let divWidth = document.getElementById('mySlider').value;// .value returns the value of the slider
  // set the width of the div according to the value of the slider
  myDiv.style.width = divWidth + 'px';
}
// this function returns the rgb color as a string to be used in the styling
function setDivColor(x, y) {
  // add more compex algorithms
  let rgbColor = 'rgb(255,' + x % 255 + ', ' + y % 255 + ')'
  return rgbColor;// returns the string above
}
// changes the color of the a div if the div is given as input
function setDivColor2(div, x, y) {
  div.style.backgroundColor = 'rgb(255,' + x % 255 + ', ' + y % 255 + ')'
}
// this function shortens the document.getElementById
// using the return
function getDiv(id){
  return document.getElementById(id);
}

function bounce(w, h) {
  y += velocityX * directionY;
  x += velocityY * directionX;
  if (y > innerHeight - h) {
    directionY = -1;
  }
  if (y < 0) {
    directionY = 1;
  }
  if (x > innerWidth - w) {
    directionX = -1;
  }
  if (x < 0) {
    directionX = 1;
  }
}


let a = 50;
let b = 36;

function add(a, b){
  return a + b
}

console.log(add(a, b));
