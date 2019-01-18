class Drone {
    constructor(size, scale, number, playerX, playerY, toPlayer){
        this.random_x = Math.random() >= 0.5;
        this.random_y = Math.random() >= 0.5;
        this.x = random(-50,50);
        this.y = random(-50,50);
        this.go = Math.floor(random(0,8))
        console.log(Math.floor(random(0,8)))
        if (this.toPlayer == true){
            this.randX = playerX
            this.randY = playerY
        } else {
        if (this.go == 0){
            this.randX = random(-1.5,-1.4)//negative--shoot
            this.randY = random(-1.5,-1.4)//negative--shoot
        } else if (this.go == 1){
            this.randX = random(-1.4,-1.5)//negative--shoot
            this.randY = random(-1.5,1.5)//var
        } else if (this.go == 2){
            this.randX = random(-1.5,1.5)//var
            this.randY = random(-1.4,-1.5)//negative--shoot
        } else if (this.go == 3){
            this.randX = random(1.4,1.5)//positive--shoot
            this.randY = random(1.4,1.5)//positive--shoot
        } else if (this.go == 4) {
            this.randX = random(1.4,1.5)//positive--shoot
            this.randY = random(-1.4,-1.5)//negative--shoot
        } else if (this.go == 5){
            this.randX = random(-1.4,-1.5)//negative--shoot
            this.randY = random(1.4,1.5)//positive--shoot
        } else if (this.go == 6){
            this.randX = random(-1.5,1.5)//var
            this.randY = random(1.4,1.5)//positive--shoot
        } else if (this.go == 7){
            this.randX = random(1.4,1.5)//positive--shoot
            this.randY = random(-1.5,1.5)//var
        }
    }
        // if (this.random_y){
        //     this.randY = random(-1.5,-1.4)
        // } else {
        //     this.randY = random(1.4,1.5)
        // }
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
        this.speed = lerp(7, 11, .5)
        this.toPlayer = toPlayer;
    }


    scaleUp(){
        if (this.scale < 900){
            this.scale += pow(1.1,24);
        }
        //     this.x += pow(this.vector[0], 7);
        //     this.y += pow(this.vector[1], 7);
        // } else {
        //     this.shooter = true
        //     this.x += pow(this.vector[0], 11);
        //     this.y += pow(this.vector[1], 11);
        // }
        this.x += pow(this.vector[0], this.speed)
        this.y += pow(this.vector[1], this.speed)
        // this.x += pow(this.vector[0], 7);
        // this.y += pow(this.vector[1], 7);
    }

    shoot(){
        if (this.shooter == true){
            let laserBeam = new Laser(this.x, this.y, this.playerX, this.playerY)
        }
    }

    show(){
        if (this.x > 3000 || this.x < -3000 || this.y > 3000 || this.y < -3000){
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
