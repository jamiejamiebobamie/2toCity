class Laser{
    constructor(x,y,goX,goY){
        this.x = x;
        this.y = y;
        this.goX = goX;
        this.goY = goY;
        this.color = 255
    }

    show(){
        stroke(150)
        // fill(255)
        line(this.x, this.y, this.goX, this.goY)
    }

}
