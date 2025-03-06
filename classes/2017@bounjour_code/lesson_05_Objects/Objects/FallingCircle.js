class FallingCircle{
    constructor(x, y, colorIncrement){
        this.x = x;
        this.y = y;
        this.r = 10;
        this.gravity = random(-5, 5);
        this.red = random(255);
        this.green = random(255);
        this.blue = random(255);
        this.color = color(this.red, this.green, this.blue);
        this.increment = PI / colorIncrement;
        this. angle = 0;
    }
    show(){
        noStroke();
        fill(this.color);
        ellipse(this.x, this.y, this.r);
    }
    move(){
        this.y += this.gravity;
    }
    grow(){
        this.r += 0.1;
    }
    changeColor(){
        this.angle += this.increment;
        this.red = abs(sin(this.angle) * 255)
        this.green = abs(cos(this.angle) * 255)
        this.blue = abs(tan(this.angle) * 255)
        this.color = color(this.red, this.green, this.blue);
    }    
}

// using let instead of this