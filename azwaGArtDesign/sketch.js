// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rX = 0;
let rY = 0;
let rZ = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

}

function draw() {
  background(220);
  translate(-width/2,-height/2);
  push();
  translate(300,500);
  rotateX(rX);
  rotateY(rY);
  rotateZ(rZ);
  scale(1.5, 0.8,1);
  plane(50,50);
  pop();
}

function keyPressed(){
  rX = random(0,2*PI);
  rY = random(0,2*PI);
  rZ = random(0,2*PI);
}