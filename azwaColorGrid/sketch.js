// Multi-Colored Grid
// Azwa
// Date
// 12th March 2019
// Extra for Experts:
// - improve the aesthetics of the sketch by making the colors in the squares
// only partially random (ie. some sort of color scheme or nice looking sequence)


let rectSize = 15;


function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(51);
  noLoop();
  
}
//draws the multicolored grid
function draw() {
  for (let w = 0; w <= width; w += rectSize){
    for (let h = 0; h <= height; h += rectSize){
      fill(random(255), 100, random(255));
      rect(w, h, rectSize, rectSize);
    }
  }
}
//squares would fill the entire sketch, 
//no matter what we change the size of the sketch to
function windowResized() {
  for (let w = 0; w <= width; w += rectSize){
    for (let h = 0; h <= height; h += rectSize){
      fill(random(255), 100, random(255));
      rect(w, h, rectSize, rectSize);
    }
  }
}
//change the size of the squares by clicking the mouse 
//(left click to make them smaller, right click to make them bigger)
function mousePressed() {
  if (mouseButton === LEFT) {
    if (rectSize <= 5) {
      rectSize = 5;
    }
    else {
      rectSize -= 5;
      for (let w = 0; w <= width; w += rectSize){
        for (let h = 0; h <= height; h += rectSize){
          fill(random(255), 100, random(255));
          rect(w, h, rectSize, rectSize); 
        }
      }
    }
  }
  if (mouseButton === RIGHT) {
    rectSize += 5;
    for (let w = 0; w <= width; w += rectSize){
      for (let h = 0; h <= height; h += rectSize){
        fill(random(255), 100, random(255));
        rect(w, h, rectSize, rectSize); 
      }
    }
  }
}
//Every time a button is pressed on the keyboard, the sketch refreshes
function keyPressed() {
  for (let w = 0; w <= width; w += rectSize){
    for (let h = 0; h <= height; h += rectSize){
      fill(random(255), 100, random(255));
      rect(w, h, rectSize, rectSize);
    }
  }
}