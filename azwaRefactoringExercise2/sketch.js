// Refactoring Exercise #2
// Azwa Alam
// 28th March 2019

function setup() {
  createCanvas(480, 270);
}
function draw() {
  //sets the backround color
  background(255); 
  //sets the line thickness
  stroke(0); 
  // creates a horizontal & vertical line in top left corner
  line(240, 0, 240, 270); 
  line(0, 135, 480, 135);
  noStroke(); 
  fill(0);

  //fills a black rectangle in the mouse's quadrant
  if (mouseX < 240 && mouseY < 135) { 
    rect(0, 0, 240, 135); 
  }
  else if (mouseX > 240 && mouseY < 135) {
    rect(240, 0, 240, 135); 
  }
  else if (mouseX < 240 && mouseY > 135) { 
    rect(0, 135, 240, 135); 
  }
  else if (mouseX > 240 && mouseY > 135) { 
    rect(240, 135, 240, 135); 
  }
}
