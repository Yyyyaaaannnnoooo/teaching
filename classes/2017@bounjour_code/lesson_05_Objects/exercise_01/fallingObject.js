class FallingObject {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.gravity = random(-5, 5);
        this.r = 10;
    }
    update() {
        this.y += this.gravity;
        this.r -= 0.05;
        if(this.r < 3)this.r = 3;
    }
    show() {
        ellipse(this.x, this.y, this.r)
    }
}