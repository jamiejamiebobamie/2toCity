class Player{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.score = 0;
        this.health = 0;
    }

show(){
    rect(this.x-75, this.y, 150, 50)
    // console.log(this.x-75, this.y)
}

}
