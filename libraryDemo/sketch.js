// Project Title
// Your Name
// Date


let scribble;

function preload(){
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scribble = new Scribble();

}



function draw() {
  background(220);
  randomSeed(0);
  scribble.scribbleRoundedRect(mouseX,mouseY,200,200,10);
}
