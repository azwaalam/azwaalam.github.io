// Perlin Noise and Terrain Generation
// Azwa Alam
// 25th March 2019
// Extra for Experts: Done


let tWidth = 1;
let start = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  
}
//draws the flag at the highest peak
function drawFlag(x, y) {
  fill(51);
  rectMode(CORNER);
  rect(x, y-65, 10, 65);
  triangle(x, y-50, x+30, y-60, x, y - 80);

}

function generateTerrain() {
  rectMode(CORNERS);
  let highest = height;
  let highestX = 0;
  let sumHeight = 0;
  //do all the work to draw terrain 1 frame
  let xOff = start;
  for (let x = 0; x < width; x += tWidth) {
    let curHeight = noise(xOff) * height;
    rect(x, curHeight, x + tWidth, height);
    xOff += 0.01;
    sumHeight += curHeight;

    if (curHeight < highest) {
      highest = curHeight;
      highestX = x;
    }
  }
  //takes the average and makes an average bar
  sumHeight /= width;
  stroke(255,0,0);
  strokeWeight(4);
  line(0,sumHeight,width,sumHeight);

  drawFlag(highestX, highest);
  start += 0.01;
}

function draw() {
  background(220);
  stroke(51);
  generateTerrain();

}
