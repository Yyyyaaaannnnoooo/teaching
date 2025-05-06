function setup() {
  createCanvas(600, 600)
  background(0)
}
function draw() {
  rectMode(CORNER)
  fill(255)
  stroke(0)
  // rect takes 4 values:
  // x, y, width and height
  square(0, 0, 200)

  for (let i = 0; i < 20; i++) {
    noFill()
    stroke(255)
    square(width - 200, 0, 10 * i)
  }

  for (let i = 0; i < 20; i++) {
    fill(255)
    square(i * (20 + 10), 230, 20)
  }

  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 10; j++) {
      noFill()
      if (i >= 10) {
        fill(0, 255, 0)
      }
      if (j >= 5) {
        fill(255, 0, 0)
      }
      if (j >= 5 && i >= 10) {
        fill(0, 0, 255)
      }
      square(i * (20 + 10), 290 + j * (20 + 10), 20)
    }
  }

  for (let i = 0; i < 20; i++) {
    rectMode(CENTER)
    noFill()
    stroke(255, 0, 0)
    push()
    translate(300, 100)
    rotate(i * PI / 19)
    square(0, 0, 10 * i)
    pop()
  }
}