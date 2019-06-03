// Generative Art Design
// Azwa Alam
// April 2019


let rX = 0;
let rY = 0;
let rZ = 0;

function setup() {
  createCanvas(4500, 3000, WEBGL);
  noStroke();
  noLoop();
  background(0);
}

function setOfPlanes(y) { //draws a set of planes
  drawPlanes(random(width / 3 - y, width / 3 * 2 + y), y, map(y, 0, height, 50, 5));
}

function draw() {
  translate(-width / 2, -height / 2);
  rectMode(CENTER);
  rect(width / 2, 0, 2500, 800);
  chippedRoof();
  for (let i = 0; i < 1200; i++) {
    setOfPlanes(random(height * 0.07, height));
  }

}
function drawPlanes(x, y, size) { //draws planes at a particual amount of space
  push();
  translate(x, y);
  rX = random(0, 2 * PI);
  rY = random(0, 2 * PI);
  rZ = random(0, 2 * PI);
  rotateX(rX);
  rotateY(rY);
  rotateZ(rZ);
  scale(1.5, 0.8, 1);
  plane(size, size);
  pop();
}

function chippedRoof() {
  fill(0);
  for (let i = 0; i < 800; i++) {
    drawPlanes(random(width/2-1250,width/2+1250),random(350,400),random(30,100)); 
  }
  fill(255);
}

function keyPressed() { //saves the image if space bar is pressed
  if (key === " ") {
    save();
  }
}

