// Primitive Paint
// Azwa Alam
// February 14th 2019
// - describe what you did to take this project "above and beyond" - I put in extra work after school


let a = 'Azwa Alam';
let cir = 2;

function setup() {
  createCanvas(1200, 900);
  background(51);
  // the code below is for the name
  textSize(width / 6);
  textAlign(CENTER, CENTER);
  textFont('Georgia');
}

function keyPressed() {
  // this will draw a rectangle when the a key is pressed
  if (key === 'a') {
    rect(mouseX, mouseY, 50, 75);
    fill(random(255), random(255), random(255)); 
  }
  // this will draw a circle when the a key is pressed
  if (key === 's') {
    ellipse(mouseX, mouseY, 66, 66);
    fill(random(255), random(255), random(255));
      
  }
  if (key === 'd') {
    // this will draw a quadrilateral when the a key is pressed
    quad(mouseX, mouseY, mouseX+86, mouseY+20, mouseX+69, mouseY+63, mouseX+30, mouseY+76);
    fill(random(255), random(255), random(255));
  }
  if (key === " ") {
    background(51);
  }
}
//the code below activates all the drawings and sets up size and color
function draw() {
  fill(255);
  text(a, width / 2, height / 2);
  cir += 2;
  if (cir > 100){
    cir = 2;
  }
  fill(random(255), random(255), random(255));
  ellipse(width/2, height/2, cir, cir);
}
