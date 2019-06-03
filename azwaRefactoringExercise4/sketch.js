// Refactoring Exercise Part 2: Exercise 4
// Azwa Alam
// 4th April 2019
//Chess Board

let x = 0; // sets x to 0
let y = 0; // sets y to 0 
const RECT_SIZE = 75; // sets up the constant for the size
let color = 0; // 0 = white, 1 = black 

function setup() {
  createCanvas(600, 600);
  noLoop(); // won't draw it every 60 sec
}
// set the fill color and flips it evcerytime
function fillColor() {
  if (color === 0){
    fill(255);
    color = 1; 
  }
  else {
    fill(0);
    color = 0;  
  }
}
// draws a chessboard 
function chessBoard(){
  for (let x = 0; x < 526; x += RECT_SIZE) {
    for (let y = 0; y < 526; y += RECT_SIZE) {
      fillColor();
      rect(x, y, RECT_SIZE, RECT_SIZE);
    }
    fillColor();
  }
}
// main loop
function draw() {
  chessBoard();
}
