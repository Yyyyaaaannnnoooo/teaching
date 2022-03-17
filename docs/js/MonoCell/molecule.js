class Molecule {
    /**
     * Molecule constructor
     * @param {float} x - pos on the x axis
     * @param {float} y - pos on y axis
     * @param {color} _col - the color to be displayed
     */
    constructor(x, y, _col) {
        let posX = random(width);
        this.pos = createVector(x, y),
            this.r = 15, this.speed = 2, this.force = 0.7,
            this.target = createVector(posX, this.r * 1.6),
            this.vel = createVector(),
            this.acc = createVector(),
            this.c = _col;
    }
    /**
     * show the molecule as circle
     */
    show() {
        fill(this.c);
        stroke(255 - this.c);
        //float theta = this.vel.heading();
        push();
        translate(this.pos.x, this.pos.y);
        ellipse(0, 0, this.r);
        pop();
    }
    /**
     * update the agent position according to vector math
     */
    update() {
        // Update this.velocity
        this.vel.add(this.acc);
        // Limit this.speed
        this.vel.limit(this.speed);
        this.pos.add(this.vel);
        // Reset accelertion to 0 each cycle
        this.acc.mult(0);
    }
    /**
     * set a new this.target for the agent
     * @param {PVector} p - vector element of the this.pos to reach
     */
    settarget(p) {
        this.target = p;
        // this.target.add(p);
    }
    /**
     * returns the radius of the agent
     */
    getRadius() {
        return this.r;
    }
    //returns if the agent has reached his this.target
    targetReached() {
        let d = p5.Vector.dist(this.pos, this.target);
        return (d < 1);
    }
    // applyForce(force) {
    //     // We could add mass here if we want A = F / M
    //     this.acc.add(force);
    // }
    /**
     * The functions below are from Nature of Code
     * Separation and Seek by Daniel Shiffman
     * http://natureofcode.com
     */
    applyBehaviors(agents) {
        let separateForce = this.separate(agents);
        let seekForce = this.seek(this.target);
        separateForce.mult(2.0);
        seekForce.mult(1.5);
        this.acc.add(separateForce);
        this.acc.add(seekForce);
        // applyForce(separateForce);
        // applyForce(seekForce);
    }
    // Separation
    // Method checks for nearby Agents and steers away
    separate(Agents) {
        let desiredseparation = this.r * 1.2;
        let sum = createVector();
        let count = 0;
        // For every boid in the system, check if it's too close
        for (let other of Agents) {
            let d = p5.Vector.dist(this.pos, other.pos);
            // If the distance is greater than 0 and less than an arbitrary amount (0 when you are yourself)
            if ((d > 0) && (d < desiredseparation)) {
                // Calculate vector pointing away from neighbor
                let diff = p5.Vector.sub(this.pos, other.pos);
                diff.normalize();
                diff.div(d);        // Weight by distance
                sum.add(diff);
                count++;            // Keep track of how many
            }
        }
        // Average -- divide by how many
        if (count > 0) {
            sum.div(count);
            // Our desired vector is the average scaled to maximum this.speed
            sum.normalize();
            sum.mult(this.speed);
            // Implement Reynolds: Steering = Desired - this.vel
            sum.sub(this.vel);
            sum.limit(this.force);
        }
        return sum;
    }

    // A method that calculates a steering this.force towards a this.target
    // STEER = DESIRED MINUS this.vel
    seek(target) {
        let desired = p5.Vector.sub(target, this.pos);  // A vector pointing from the this.pos to the this.target
        // Normalize desired and scale to maximum this.speed
        desired.normalize();
        desired.mult(this.speed);
        // Steering = Desired minus this.vel
        let steer = p5.Vector.sub(desired, this.vel);
        steer.limit(this.force);  // Limit to maximum steering this.force

        return steer;
    }
}

