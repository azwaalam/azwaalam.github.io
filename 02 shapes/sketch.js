// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x, y;
let xSpeed, ySpeed; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  xSpeed = random(-3, 3);
  ySpeed = random(-5, 5);


}

function draw() {
  //background(255);
  ellipse(x, y, 25, 25);
  x += xSpeed;
  y += ySpeed;
  

}

function mousePressed(){
  fill(255,0, 0);
  xSpeed = random(-3, 3);
  ySpeed = random(-5, 5);

}

function mouseReleased() {
  fill(0,255,0);
}