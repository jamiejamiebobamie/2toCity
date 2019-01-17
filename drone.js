class Drone {
    constructor(x, y, size, scale, number){
        this.x = x;
        this.y = y;
        this.scale = scale;
        this.vector = [(this.x)-random(-1,1), (this.y)-random(-1,1)];
        this.size = size;
        this.destroy = false;
        this.number = number;
    }

    scaleUp(){
        this.scale += 1;
        this.x += this.vector[0]/15;
        this.y += this.vector[1]/15;

    }

    show(){
        // if (this.x < 2000 && this.x > -1000){
        //     console.log(this.x, this.y)
            push()
            ellipse(this.x, this.y, this.size+this.scale)
            pop()
        // } else {
        //     this.destroy = true
        // }
    }

}
