// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

var xoff = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);

  var x = map(noise(xoff), 0, 1, 0, width);

  xoff += 100;

  ellipse(x, 200, 24, 24);
}
