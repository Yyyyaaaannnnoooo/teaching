function setup() {
  // setup of the sketch
  createCanvas(400, 400);
  background(51);
  rectMode(CENTER);
  // frameRate(5);
}

function draw() {
  /// ~~~~~~~~ ///
  // get_slider_of_doom_value();
  /// ~~~~~~~~ ///
  
  /// ~~~~~~~~ ///
  // let's build some variables that change over time
  // let r = random(255);
  // let g = random(255);
  // let b = random(255);
  // background(r, g, b);
  /// ~~~~~~~~ ///

  /// ~~~~~~~~ ///
  // let's build another more smooth variable using sin()
  // remember that sin() returns a value between -1 and 1
  // let sinus = map(sin(frameCount / 100), -1, 1, 0, 1)
  // let sinus2 = map(sin(frameCount / 10), -1, 1, 0, 1)
  // background(sinus * 255)
  /// ~~~~~~~~ ///

  /// ~~~~~~~~ ///
  background(51);
  // here you draw to the screen
  // fill(r, g, b) or fill(0=>255) for b/w
  fill(255);
  // noFill();
  // stroke(255)
  // strokeWeight(2)
  ellipse(200, 200, 100, 100);
  /// ~~~~~~~~ ///

  /// ~~~~~~~~ ///
  // control the ellipse using the mouse
  // mouseX, mouseY
  // ellipse(mouseX, mouseY, 100, 100);
  /// ~~~~~~~~ ///

  /// ~~~~~~~~ ///
  // maybe is good to save mouseX and mouseY into a variable
  // let x = mouseX;
  // let y = mouseY;
  // ellipse(x, y, width, height)
  /// ~~~~~~~~ ///

  /// ~~~~~~~~ ///
  // draw multiple ellipses that follow the mouse
  for (let i = 0; i < 20; i++) {
    // ellipse(x + i * 10, y + i * 10, 100, 100);
    /// ~~~~~~~~ ///

    /// ~~~~~~~~ ///
    // what about different size depending on the loop
    // ellipse(x, y, i * 10, i * 10);
    /// ~~~~~~~~ ///

    /// ~~~~~~~~ ///
    // what about different color depending on the loop
    // stroke(i * 10, 100, 255)
    // what about fill()?
    /// ~~~~~~~~ ///

    /// ~~~~~~~~ ///
    // what about alternating ellipse and rect
    // if (i % 2 === 0) {
    //   rect(x, y, i * 10 * sinus, i * 10);
    // } else {
    //   ellipse(x, y, i * 10, i * 10 * sinus);
    // }
    /// ~~~~~~~~ ///

    /// ~~~~~~~~ ///
    // what if we nest another loop?
    // for (let j = 0; j < 20; j++) {
    //   ellipse(x + j * 10, y + i * 10, 10, 10);
    //   what about alternating ellipse and rect in the nested loop?
    // }
    /// ~~~~~~~~ ///


  }

}

function get_slider_of_doom_value() {
  // this is a function that returns the value of the slider
  // you can use it to control the speed of the sketch
  // the slider is located in the HTML file
  // the value of the slider is stored in the variable slider_value
  let slider_value = 0
  let slider_of_doom = document.querySelector(".slider-of-doom")
  slider_value = slider_of_doom.value
  // console.log(slider_value);
  return slider_value;
}