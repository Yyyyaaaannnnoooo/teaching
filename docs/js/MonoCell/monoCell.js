class MonoCell{
    constructor(){
        this.pos = createVector(width / 2, height / 2);
        this.r = 30;
        this.molecules = [];
        this.brain = new Brain(2);
        this.inc = 0.03, this.xoff = 0, this.yoff = 0;
    }
    show(){
        noStroke();
        fill(255, 200, 0);
        ellipse(this.pos.x, this.pos.y, this.r);
        stroke(0, 255, 255);
        fill(0, 255, 255, 50)
        beginShape();
        this.xoff = 0;
        for(let a = 0; a < 180; a++){
            let n = map(noise(this.xoff + this.yoff, this.yoff), 0, 1, this.r, this.r * 2.5);
            let angle = map(a, 0, 180, 0, TWO_PI);
            let x = n * cos(angle);
            let y = n * sin(angle);
            vertex(this.pos.x + x, this.pos.y + y);
            this.xoff += this.inc;
        }
        endShape(CLOSE);
        /*if (this.molecules.length > 0)*/ for (let mol of this.molecules)mol.show();
    }
    update() {
        // if (this.molecules.length > 0) {
            for (let mol of this.molecules) {
                mol.applyBehaviors(this.molecules);
                mol.update();
            }
        // }
        if(this.molecules.length > 150){
            this.molecules.splice(0, 1);
            console.log(this.molecules.length);
        }
        this.yoff += 0.01;
    }
    /**
     * this function farts a molecule of oxygen or one of carbon
     * @param {float} value 
     */
    fart(value){
        let color = value > 0.5 ? 255 : 0;
        this.molecules.push(new Molecule(width / 2, height / 2, color));
    }
    reset(){
        this.brain = new Brain(2);
    }
}