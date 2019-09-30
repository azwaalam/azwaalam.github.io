// Major Project: Flames
//Azwa Alam

let newX;
let newY;
let x;
let y;
let offsetX;
let offsetY;
let colors = ["#FFDD00","#FFB300","#FF8000","#FF5500","#FF0000","#C21A01"]; //yellow to red
let changeColors = 5;
let changeSize = 1500; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  offsetX = random(10);
  offsetY = random(10);
  background(0);
}

function draw() {
  if(changeColors > 0){
    flame(colors[changeColors], changeSize);
    changeSize --; //reduces the size by 1
    if (frameCount % 150 === 0){
      changeColors --; //goes through the array of colors; color change every 150 frames
    } 
  } 
}

function flame(c, size) {
  x = width/2+100;
  y = height/3*5.5; //how far up/down fire is on the screen 
  for (let i = 0; i < size; i++) {
    stroke(c); 
    strokeWeight(map(i, 0, size, 50,1)); //lines thicker to thinner
    newX = x + map(noise(offsetX),0,1,-2,2);
    newY = y + map(noise(offsetY),0,1,-2,-2.5)/2.5;
    line(x, y, newX, newY);
    x = newX;
    y= newY;
    offsetX += 0.02;
    offsetY += 0.01; 
  }
}

function keyPressed() { //saves the image if space bar is pressed
  if (key === " ") {
    save();
  }
}