let cells = [];
function setup() {
  createCanvas(innerWidth, innerHeight);
  for (let i = 0; i < 50; i++) {
    cells.push(new Cell());
  }
 background(51);
}

function draw() {
 
  for (const cell of cells) {
    cell.move();
    cell.show();
  }
}

function windowResized() {
  resizeCanvas(innerWidth, innerHeight);
}

function mousePressed(){
  for (let i = cells.length - 1; i >=0; i--) {
    let cell = cells[i];
    if(cell.clicked(mouseX, mouseY)){
      let childCellA = cell.mitosis();
      let childCellB = cell.mitosis();
      cells.push(childCellA);
      cells.push(childCellB);
      cells.splice(i, 1);
      console.log('CLICKED');
    }
  }
}
