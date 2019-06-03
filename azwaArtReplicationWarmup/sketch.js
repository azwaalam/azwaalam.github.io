// Art Replication Warmup
// Azwa Alam
// April 15th 2019

let x; // declares x 
let y; // declares y

// sets up the canvas and limits of x and y 
function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  x = width/2;
  y = height/2;
}
//creates random horizontal lengths
function horizontal(){
  let newX = random(width/2 - 200, width/2 + 200);
  line(x, y, newX, y); 
  x = newX; 
}
//creates random vertical lengths
function vertical(){
  let newY = random(height/2 + 350, height/2 - 350);
  line(x, y, x, newY); 
  y = newY; 
}
//creates random rectangles with the random 
//horizontal and vertical lines
function rectangles(){
  for(let z = 0; z < 65; z ++){
    horizontal();
    vertical();
  }
}
function draw() {
  background(220);
  rectangles();
}
