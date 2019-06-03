// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  push();
  translate(width/2, height/2);

  ellipse(0, 0, 600, 600);

  for (let i = 0; i < 360; i += 6){
    push();
    rotate(radians(i));
    if (i % 30 === 0) {
      strokeWeight(5);
      line(180,0,270,0);
    }
    else{
      strokeWeight(2);
      line(180,0,250,0);
    }
  
    pop();
  }

  push();
  rotate(radians(frameCount));
  strokeWeight(2);
  line(0,0,240,0);
  pop();

  push();
  rotate(radians(frameCount/6));
  strokeWeight(4);
  line(0,0,0,-150);
  pop();
  
  pop();
}
