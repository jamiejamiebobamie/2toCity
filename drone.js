class Drone {
    constructor(size, scale, number, playerX, playerY){
        this.random_x = Math.random() >= 0.5;
        this.random_y = Math.random() >= 0.5;
        this.x = random(-50,50);
        this.y = random(-50,50);
        if (this.random_x){
            this.randX = random(-1.5,-1.4)
        } else {
            this.randX = random(1.4,1.5)
        }
        if (this.random_y){
            this.randY = random(-1.5,-1.4)
        } else {
            this.randY = random(1.4,1.5)
        }
        this.scale = scale;
        this.vector = [this.randX,this.randY];
        this.size = size;
        this.destroy = false;
        this.number = number;
        this.count = 0;
        this.oneTime = true;
        this.playerX = playerX;
        this.playerY = playerY;
        this.shooter = false;
        this.hit = false;
    }

    scaleUp(){
        if (this.scale < 1000){
            this.scale += pow(1.1,24);
            this.x += pow(this.vector[0], 9);
            this.y += pow(this.vector[1], 9);
        } else {
            this.shooter = true
            this.x += pow(this.vector[0], 11);
            this.y += pow(this.vector[1], 11);
        }
        // this.x += pow(this.vector[0], 7);
        // this.y += pow(this.vector[1], 7);
    }

    shoot(){
        if (this.shooter == true){
            let laserBeam = new Laser(this.x, this.y, this.playerX, this.playerY)
        }
    }

    show(){
        if (this.x > 3000 || this.x < -3000){
            this.destroy = true
        } else {
            push()

            if (dist(this.x, this.y, this.playerX, this.playerY) < 400){
                fill('red')
                if (this.hit == false){
                    GlobeScore -= 5;
                    this.hit = true;
                }
            }else{
                this.hit = false;
                fill("black")
            }
            // console.log(this.size+this.scale)
            ellipse(this.x, this.y, this.size+this.scale)
            pop()
        }

    }

}
