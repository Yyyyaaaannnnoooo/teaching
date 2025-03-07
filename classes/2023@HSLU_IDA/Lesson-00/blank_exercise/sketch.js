
function setup() {
  // setup of the sketch
  let canvas = createCanvas(600, 400);
  // put canvas inside div with id "p5"
  canvas.parent('#p5')
  background(51);
  rectMode(CENTER);
}

let slider = document.querySelector('#my-slider')
let red = document.querySelector('#red')
let green = document.querySelector('#green')
let blue = document.querySelector('#blue')
// option + shift + f  = format your code
function draw() {
  let value = slider.value
  let rand = random(-10, 10)
  let sinus = sin(frameCount / 100);
  let sinus2 = sin(frameCount / 50);

  let n = noise(sinus, sinus2)

  // background(r, g, b)
  background(red.value, green.value, blue.value);
  // here you draw to the screen
  fill(120);
  noFill();
  stroke(255)
  strokeWeight(3)

  // mouseX and mouseY are the mouse coordinates 
  let x = mouseX;
  let y = mouseY;
  // rect(x, y, 100, 100);

  for (let i = 0; i < 20; i++) {
    // stroke()
    // let pos_x = (x + (i * 50)) + sinus2 *(25 * i);
    let pos_x = (x + (i * 50));
    // let pos_x = x + sinus * (5 * i);
    // let pos_y = y + sinus * (5 * i);
    let pos_y = y + n * 50;
    if (i % 2 == 0) {
      ellipse(x, y,
        (i + 2) * 10,
        sinus * (i + 2) * 30
      )
    } else {
      rect(x, y,
        (sinus2 + 2) * (i + 2) * 10,
        125
      )
    }
  }
}