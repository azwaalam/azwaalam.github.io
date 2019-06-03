// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  noFill();
}

function draw() {
  randomSeed(4);
  background(220);
  circles(width/2, height/2,height);
}

function circles(x, y, d, depth){
  if(d > 5){
    ellipse(x, y, d, d);
    circles(x-d/2, y, d/2); 
    circles(x+d/2, y, d/2);
    circles(x, y+d/2, d/2);
    circles(x, y-d/2, d/2);
  }
}