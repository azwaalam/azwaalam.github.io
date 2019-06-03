// Refactoring Exercise #1
// Azwa Alam
// 28th March 2019


//Recfactoring One
let x, y, changeX, changeY;
// x = x position
// y = y position
// changeX = changes x position
// changeY = changes y position 

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 200;
  y = 300;
  changeX = random(3, 8);
  changeY = random(3, 8);
}
//draws a rectangle
function draw() {
  bouncingRect();
  background(80, 80, 80);
  rect(x, y, 250, 75);
}
//makes the rectangle bounce in the screen
function bouncingRect() {
  x += changeX;
  y += changeY;
  //keeps the rectangle within the windoow
  if (y >= height - 75 || y <= 0) {
    changeY = changeY * -1;
  }
  if (x >= width - 250 || x <= 0) {
    changeX = changeX * -1;
  }
}


