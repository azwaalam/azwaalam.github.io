// Primitive Paint
// Azwa Alam
// February 11th 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let squareX = [];
function setup() {
  createCanvas(1200, 900);
  background(51);
}

function keyPressed() {
  if (key === 'a') {
    squareX.push(mouseX);
    rect(mouseX, mouseY, 50, 75);
    fill(random(255), random(255), random(255)); 
  }
  if (key === 's') {
    ellipse(mouseX, mouseY, 66, 66);
    fill(random(255), random(255), random(255));
  }
  if (key === 'd') {
    quad(mouseX+38, mouseY+31, mouseX+86, mouseY+20, mouseX+69, mouseY+63, mouseX+30, mouseY+76);
    fill(random(255), random(255), random(255));
  }
  if (key === " ") { 

  }
}
function draw() {

  //background(51);

  //keyPressed();
}
