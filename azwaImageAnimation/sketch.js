// Sprite Animation Project
// Azwa Alam
// 1st April 2019
// Extra for Experts: Completed


let direction = 1;
let starwars = [];
let counter = 0;
let x, y;

function preload() {
  for (let i = 0; i < 18; i++) {
    //Load all the images into the array
    starwars.push(loadImage("assets/starwars-0" + i + ".png"));
  }
}
// sets up the canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;

}
// checks if key is pressed: 
function checkKey() {
  print(counter);
  if (keyIsPressed) {
    // if left arrow is pressed, sprite moves left
    if (keyCode === LEFT_ARROW) {
      counter = 3;
      x -= 10;
    }
    // if right arrow is pressed, sprite moves right
    else if (keyCode === RIGHT_ARROW) {
      counter = 10;
      x += 10;
    }
    // if upper arrow is pressed, sprite moves up
    else if (keyCode === UP_ARROW) {
      counter = 7;
      y -= 10;
    }
    // if down arrow is pressed, sprite moves down
    else if (keyCode === DOWN_ARROW) {
      counter = 13;
      y += 10;
    }
    // if space bar is pressed, sprite moves all four directions in different color 
    else if (key === " ") {
      if (counter < 14 || counter >= 17) {
        counter = 14;
      }
      else {
        counter++;
      }
    }
  }
  // if nothing is pressed sprite roatates in idle animation
  else {
    counter++;
    if (counter > 12) {
      counter = 0;
    }
  }
}
function draw() {
  background(255);
  image(starwars[counter], x, y);
  if (frameCount % 4 === 0) {
    checkKey();
  }
}
