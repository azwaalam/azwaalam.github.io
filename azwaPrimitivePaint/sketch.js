// Primitive Paint
// Azwa Alam
// February 11th 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(1200, 900);
  background(51);
}

function keyPressed() {
  if (key === 'a') {
    rect(mouseX, mouseY, 20, 20);
  }
  if (key === 's') {
    ellipse(mouseX, mouseY, 55, 55);
  }
  if (key === 'd') {
    quad(mouseX+38, mouseY+31, mouseX+86, mouseY+20, mouseX+69, mouseY+63, 30, mouseX+76);
  }
}
function draw() {
  background(51);
  keyPressed();
}
