let rect_pos ={
  x:500,
  y:500,
  w:100,
  h:100
}

const s = function (p5) {
  // variable should be initialized using the p5. namespace
  p5.my_array = []
  p5.my_int = 137
  p5.etc = 'something'

  p5.setup = function () {
    // local variables can also be declared with let
    // but calling p5 functions requires p5. namespace
    let c = p5.createCanvas(p5.windowWidth, p5.windowHeight)
    // there is a reason for saving the canvas into a variable
    // so that we can style it at setup
    // for exaple the position on the screen
    c.style('top', '0px')
    c.style('left', '0px')
    // and also style its css
    // this comes handy for setting styling properties
    // for example remove pointer events so that 
    // it is possible to click trough the sketch
    c.style('pointer-events', 'none')
    // style its css position
    c.style('position', 'fixed')
    // z-index, so that the sketch is always on top
    c.style('z-index', '99999999')
    p5.clear()
  }
  p5.draw = function () {
    // to have transparent background use clear
    // at the beginning of the sketch
    p5.clear()
    // add your code after clearing the screen
    p5.noFill()
    p5.strokeWeight(10)
    p5.rect(10, 10, p5.width - 10, p5.height - 10)
    p5.fill(255, 0, 0)
    p5.rect(rect_pos.x, rect_pos.y, rect_pos.w, rect_pos.h)
  }

  p5.windowResized = function () {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
  }

}

const myp5 = new p5(s)

console.log('sketch loaded');

window.onclick = e => {
  console.log(e.target);  // to get the element
  console.log(e.target.tagName);  // to get the element tag name alone
  // get element position on the screen
  let element_pos = e.target.getBoundingClientRect()  // to get the element position
  rect_pos.x = element_pos.x
  rect_pos.y = element_pos.y
  rect_pos.w = element_pos.width
  rect_pos.h = element_pos.height
  // get text 
  let html_txt = e.target.textContent
  console.log(html_txt);
  // change css
  e.target.setAttribute('style', 'background-color: #ff0000,  color: #ffffff')
} 