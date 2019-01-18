class droneSpawn {
    constructor(num, playerX, playerY){
        this.droneArray = [];
        this.num = num;
        this.count = 0;
        this.playerX = playerX;
        this.playerY = playerY;
    }

// random(350,450)

    spawn(){
        if (this.droneArray.length < this.num){
            this.droneArray[this.count] = new Drone (100, 1, this.count, this.playerX, this.playerY)
            this.count+=1;
        }

    }

    destr(){
        for (let drone of this.droneArray){
            if (drone.destroy == true){
                if (drone.oneTime == true){
                    this.num+=1;
                    drone.oneTime = false;
                }
                this.droneArray.splice[drone.number,1]
            }
        }
    }

    droneShow(){
        for (let drone of this.droneArray){
            drone.show()
            drone.scaleUp()
            drone.shoot()
        }
    }

}
