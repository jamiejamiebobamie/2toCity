let rot = 0

// let drone1 = new Drone (401,401, 100, 1);
let drones = new droneSpawn(5, 400, 700);
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
        rot -= .1;
        // console.log("poop")
    } else if (key == 'd'){// || keyIsPressed && key == 'RIGHT_ARROW'){
        rot += .1;
        // console.log("pee")
    // } else {
    //     rot = 0;
    //     // console.log("eeh")
    // }
}
}
}


  function draw(){
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
   drones.spawn()
   drones.droneShow()
   drones.destr()
   // drone1.scaleUp()
   // image(img,0,0)
   pop();
   player1.show();
     // rect(mouseX,mouseY,300+(mouseY/150),25+(mouseY)/12)
}

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
