class droneSpawn {
    constructor(num, playerX, playerY){
        this.droneArray = [];
        this.num = num;
        this.count = 0;
        this.playerX = playerX;
        this.playerY = playerY;
    }

// random(350,450)

    spawn(playerX, playerY){
        // console.log(this.droneArray.length, this.num)
        if (this.droneArray.length < this.num){
            this.playerX = playerX
            this.playerY = playerY
            if (this.count == 0){
                this.droneArray[this.count] = new Drone (100, 1, this.count, this.playerX, this.playerY, Math.random() >= 0.4, true)//Math.random() >= 0.9)
            } else {
                this.droneArray[this.count] = new Drone (100, 1, this.count, this.playerX, this.playerY,Math.random() >= 0.4, false)//Math.random() >= 0.9)
            }
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

    droneShow(playerX, playerY){
        this.playerX = playerX
        this.playerY = playerY
        for (let drone of this.droneArray){
            drone.playerX = playerX
            drone.playerY = playerY
            drone.show()
            drone.scaleUp()
            drone.shoot()
        }
    }

}
