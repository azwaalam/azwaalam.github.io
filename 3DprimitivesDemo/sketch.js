// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let angle = 5;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  smooth();
}

function draw() {
  angle = map(mouseX, 0, width, -40, 40);
  background(220);
  push();
  rotateY(radians(frameCount));
  // rotateY(radians(frameCount));
  // ellipsoid(50);
  for(let i = 0; i < 360; i += 45){
    push();
    rotateY(radians(i));
    boxes(70);
    pop();
  }
  pop();
}

function boxes(size){
  if(size > 20){
    rotateZ(radians(angle));
    translate(size*1.5,0);
    box(size);
    boxes(size*0.8);

  }
}