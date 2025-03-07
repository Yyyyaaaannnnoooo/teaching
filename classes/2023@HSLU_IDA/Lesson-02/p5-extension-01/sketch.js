console.log('😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫')


const sketch = function (p5) {
  // let x_pos = 0
  p5.setup = function() {
    let c = p5.createCanvas(p5.windowWidth, p5.windowHeight)
    c.style('top', '0px')
    c.style('left', '0px')
    c.style('pointer-events', 'none')
    c.style('position', 'fixed')
    c.style('z-index', '99999999999')
    p5.clear()
  }

  p5.draw = function () {
    // p5.background(0)
    p5.clear()
    p5.fill(255)
    p5.ellipse(p5.mouseX, p5.mouseY, 50, 50)
  }

  // p5.window
  p5.windowResized = function () {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
  }
}

let my_sketch = new p5(sketch)

