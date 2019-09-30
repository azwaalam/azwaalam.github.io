// CS30 - Final Programming Challenge
// Azwa Alam
// June 19th 2019
// Mr.Scott

let staticImages = [];      //array to hold 1 image for each direction -> should use this to start  
let animationImages = [];   //array to hold all 8 images in each direction
let counter = 0;
let x;
let y;

function preload() {
  loadStatic();     //defined at bottom
  loadAnimation();  //also defined at bottom
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
}
function draw() {
  background(220);
  image(staticImages[counter], x, y);
  drawFox();
  changeSize();
}
function loadStatic() {
  staticImages.push(loadImage("/assets/left1.png"));   //0 - left
  staticImages.push(loadImage("/assets/right1.png"));   //1 - right
  staticImages.push(loadImage("/assets/up1.png"));   //2 - up
  staticImages.push(loadImage("/assets/down1.png"));   //3 - down
}

function loadAnimation() {
  for (let i = 1; i <= 8; i++) {    //0-7 LEFT
    animationImages.push(loadImage("/assets/left" + i + ".png"))
  }
  for (let i = 1; i <= 8; i++) {  //8-15 RIGHT
    animationImages.push(loadImage("/assets/right" + i + ".png"))
  }
  for (let i = 1; i <= 8; i++) {  //16-23 UP
    animationImages.push(loadImage("/assets/up" + i + ".png"))
  }
  for (let i = 1; i <= 8; i++) {  //24-31 DOWN
    animationImages.push(loadImage("/assets/down" + i + ".png"))
  }
}


function drawFox() {
  if (keyIsPressed) {
    // if a is pressed, fox moves left
    if (key === "a") {
      counter = 0;
      x -= 10;
    }
    // if d is pressed, fox moves right
    else if (key === "d") {
      counter = 1;
      x += 10;
    }
    // if w is pressed, fox moves up
    else if (key === "w") {
      counter = 2;
      y -= 10;
    }
    // if s is pressed, fox moves down
    else if (key === "s") {
      counter = 3;
      y += 10;
    }

    else if (key === "p") {
      tint(random(255), random(255),random(255));

   
    }
    else if(key === "r"){
      noTint();
    }
  }
}

function mouseClicked() {
  changeSize(); 
}

function changeSize(){
  if (mouseY > height/2) {
    image(staticImages[counter], x, y, 50, 50);
  }
  else {
    scale(1.5);
  }
}
