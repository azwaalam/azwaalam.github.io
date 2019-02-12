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

function keyTyped() {
  if (key === 'a') {
    rect(mouseX, mouseY, 20, 20);
  
  if (key === 's') {
    ellipse(mouseX, mouseY, 55, 55);
  }
}
function draw() {
  background(51);
  keyTyped();
}
  