class Cell {
    constructor(_x, _y, _r) {
        this.x = _x || random(width);
        this.y = _y || random(width);
        this.r = _r || 70;
        this.col = color(random(255), random(255), random(255), 35);
    }

    move() {
        let velX = random(-5, 5);
        let velY = random(-5, 5);
        this.x += velX;
        this.y += velY;
    }

    show() {
        // noStroke();
        fill(this.col);
        ellipse(this.x, this.y, this.r)
    }

    mitosis() {
        this.x += random(- this.r, this.r);
        let cell = new Cell(this.x, this.y, this.r * 0.75);
        return cell;
    }

    clicked(x, y) {
        let d = dist(x, y, this.x, this.y);
        if (d < this.r) return true;
        else return false;
    }
}