// Project Title
// Your Name
// Date

let winBlack = 0; //my code
let winWhite = 0; //my code
let NUM_ROWS = 4;
let NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow, currentCol;
let gridData = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 255, 0, 0, 0], [255, 255, 255, 0, 0]];

function setup() {
  // Determine the size of each square. Could use windowHeight,windowHeight  for Canvas to keep a square aspect ratio
  createCanvas(windowWidth, windowHeight);
  rectWidth = width / NUM_COLS;
  rectHeight = height / NUM_ROWS;
  randomGrid();
}



function mousePressed() {
  // cross-shaped pattern flips on a mouseclick. Boundary conditions are checked within the flip 
  //function to ensure in-bounds access for array
  if (mouseButton === LEFT) {
    flip(currentCol, currentRow);
    flip(currentCol - 1, currentRow);
    flip(currentCol + 1, currentRow);
    flip(currentCol, currentRow - 1);
    flip(currentCol, currentRow + 1);
  }
  // if center button is clicked, will only flip the square the mouse is over
  if (mouseButton === CENTER) { //my code
    flip(currentCol, currentRow);
  }
}


function flip(col, row) {
  // given a column and row for the 2D array, flip its value from 0 to 255 or 255 to 0
  // conditions ensure that the col and row given are valid and exist for the array. If not, no operations take place.
  if (col >= 0 && col < NUM_COLS) {
    if (row >= 0 && row < NUM_ROWS) {
      if (gridData[row][col] === 0) {
        gridData[row][col] = 255;
        winBlack -= 1; //my code
        winWhite += 1; //my code
      }
      else {
        gridData[row][col] = 0;
        winWhite -= 1; //my code
        winBlack += 1; //my code
      }
    }
  }
}

function determineActiveSquare() {
  // An expression to run each frame to determine where the mouse currently is.
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
}

function drawGrid() {
  // Render a grid of squares - fill color set according to data stored in the 2D array
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      fill(gridData[y][x]);
      rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
    }
  }
}

function winConditon() { //my code - determines if you win
  if (winBlack === 20 || winWhite === 20) {
    textSize(200);
    textAlign(CENTER);
    fill(255, 0, 0);
    text("YOU WIN!", width / 2, height / 2);
  }
}
function randomGrid(){ //my code - function that can be called once in setup() to randomize the starting board.
  for(let y = 0; y < NUM_ROWS; y++){
    for(let x = 0; x < NUM_COLS; x++){
      let blackOrWhite = random(4);
      if(blackOrWhite < 2){
        gridData[y][x] = 0;
        winBlack += 1;
      }
      else {
        gridData[y][x] = 255;
        winWhite += 1;
      }
    }
  }
}
function draw() {
  drawGrid();                //render the current game board to the screen (and the overlay)
  determineActiveSquare();   //figure out which tile the mouse cursor is over
  winConditon();             //my code - display "you win" across the screen if all the squares are black/white
}

