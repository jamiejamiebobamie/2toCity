class droneSpawn {
    constructor(num){
        this.droneArray = [];
        this.num = num;
        this.count = 0;
    }

// random(350,450)

    spawn(){
        if (this.droneArray.length < this.num){
            this.droneArray[this.count] = new Drone (random(-50,50), random(-50,50), 100, 1, this.count)
            this.count+=1
        }

    }

    destr(){
        for (let drone of this.droneArray){
            if (drone.destroy == true){
                droneArray.splice[drone.count]
            }
        }
        this.count-=1
    }

    droneShow(){
        for (let drone of this.droneArray){
            drone.show()
            drone.scaleUp()
        }
    }

}
