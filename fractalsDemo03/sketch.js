// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noLoop();
}

function draw() {
  background(220);
  rectangles(width/2,height/2,height*0.6);
}

function rectangles(x,y,sideLength){
  if(sideLength > 5){
    fill(random(255),0,0,200);
    rect(x,y,sideLength,sideLength);
    let half = sideLength/2;
    rectangles(x-half,y-half,half);
    rectangles(x-half,y+half,half);
    rectangles(x+half,y-half,half);
    rectangles(x+half,y+half,half);

  }
}