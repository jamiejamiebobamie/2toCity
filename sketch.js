let rot = 0
let playerPos = [0,0]
let GlobeScore = 100;
let signPos = false;

// let drone1 = new Drone (401,401, 100, 1);
let drones = new droneSpawn(20, playerPos[0], playerPos[1]);
let player1 = new Player(400, 700);

function preload() {

}


function setup () {
  var canvas = createCanvas(800, 800); //400, 400
  canvas.parent('sketch-holder');
  img = loadImage('public/images/test.png')
}

function spin(){
if (keyIsPressed){
    if (key == 'a'){// || keyIsPressed && key == 'LEFT_ARROW'){
        rot -= .05;
        signPos = false;
        player1.score += 3;
        // console.log(rot)
    } else if (key == 'd'){// || keyIsPressed && key == 'RIGHT_ARROW'){
        rot += .05;
        signPos = true;
        player1.score += 3;
        // console.log(rot)
    } else {
        if (signPos == true){
            rot += .05;
        } else {
            rot -= .05;
        }

    }
}
// player1.score += 1;
}
//
let interv;

  function draw(){

// if (player1.health > 0) {
 spin()
   // background(0)
   push();
    translate(width / 2, height / 2);
    rotate(rot);
    imageMode(CENTER);
    // tint(50)
    image(img, 0, 0);
   // translate(400,400)
   // rotate(5)
   scale(.2)
   fill(0)
   // // if ((drone1.x < 800 && drone.x > 0) && (drone1.y < 800 && drone.y > 0)){
   //     drone1.show()
   //     drone1.scaleUp()
   // }
   drones.spawn(1700*sin(rot),1700*cos(rot))
   drones.droneShow(1700*sin(rot),1700*cos(rot))
   drones.destr()
   // drone1.scaleUp()
   // image(img,0,0)
   // fill('yellow')
   // // rect(0, 1700, 50,50)
   // // rect(0, -1700, 50,50)
   // // rect(-1700, 0, 50,50)
   // // rect(1700, 0, 50,50)
   // fill('red')
   playerPos = [1700*sin(rot),1700*cos(rot)]
   // console.log(drones.playerX, drones.playerY)
   rect(1700*sin(rot), 1700*cos(rot), 100,100)
   pop();
   player1.show();
   if (player1.health != GlobeScore){
       player1.health = GlobeScore
   }
   text(player1.score,100,100)
   text(player1.health,300,100)
// console.log(sin(rot))
// } else {
    // text(player1.score, width/2, height/2)
}

// }

  draw()




// let img;
//
// function preload() {
//   img = loadImage('public/images/test.png');
// }
//
// function setup() {
//   createCanvas(720, 200);
//   pixelDensity(1);
//   img.loadPixels();
//   loadPixels();
// }
//
// function draw() {
//   for (let x = 0; x < img.width; x++) {
//     for (let y = 0; y < img.height; y++) {
//       // Calculate the 1D location from a 2D grid
//       let loc = (x + y * img.width) * 4;
//       // Get the R,G,B values from image
//       let r, g, b;
//       r = img.pixels[loc];
//       // Calculate an amount to change brightness based on proximity to the mouse
//       let maxdist = 50;
//       let d = dist(x, y, mouseX, mouseY);
//       let adjustbrightness = (255 * (maxdist - d)) / maxdist;
//       r += adjustbrightness;
//       // Constrain RGB to make sure they are within 0-255 color range
//       r = constrain(r, 0, 255);
//       // Make a new color and set pixel in the window
//       //color c = color(r, g, b);
//       let pixloc = (y * width + x) * 4;
//       pixels[pixloc] = r;
//       pixels[pixloc + 1] = r;
//       pixels[pixloc + 2] = r;
//       pixels[pixloc + 3] = 255;
//     }
//   }
//   updatePixels();
// }
