// Refactoring Exercise Part 2: Exercise 3
// Azwa Alam
// 4th April 2019


//Black and White Target

let x = 200; // sets x to 200
let y = 200; // sets y to 200
const CIRCLE_SIZE = 40; // sets up the constant for the size

function setup() {
  createCanvas(400, 400);
}
// draws a target board
function targetBoard(){
  for (let i = 400; i >= CIRCLE_SIZE; i -= CIRCLE_SIZE){
    ellipse(x, y, i, i);
  }
}
function draw() {
  background(240);
  targetBoard(); 
}

