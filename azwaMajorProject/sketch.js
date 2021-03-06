// Major Project
// Azwa Alam
// 27th May 2019


let x;
let y;
let shapeX = 20;
let shapeY;
let xOff = 0;
let curHeight; //tracks current height
let offset; 
let amountToChange = 0.01;
let originalOffSet; 
let offsets; 
const STEP_AMOUNT = 30; //number of steps in the circle 
 

function setup(){
  createCanvas(windowWidth, windowHeight);
  originalOffSet = random(10); 
  curHeight = height/2; 
  background(0);

  offsets = []; //empty array that is pushing a random offset
  for(let a = 0; a < 361; a ++){
    offsets.push(random(100)); 
  }
}

function weirdCircle(x, y) { //draws a circle with random angles
  noFill();
  stroke(map(shapeX, 0, width, 100, 153), map(shapeX, 0, width, 100, 204), map(shapeX, 0, width, 150, 255), 90);
  push();
  translate(x, y);

  beginShape();
  offset = originalOffSet; 

  let origX, origY;

  for (let i = 0; i <= 360; i += STEP_AMOUNT) {
    let r = 30 + noise(offsets[i]) * 15 ; //gives a controlled but random line
    let rTwo = 30 + noise(offsets[i + STEP_AMOUNT]) * 100; 
    let anchor = 30 + noise(offsets[i + STEP_AMOUNT/2]) * 50-25;
    x = r * cos(radians(i)); //trig functions to draw  unit circle 
    y = r * sin(radians(i));

    let x2 = rTwo * cos(radians(i + STEP_AMOUNT));
    let y2 = rTwo * sin(radians(i + STEP_AMOUNT));

    let xA = anchor * cos(radians(i + STEP_AMOUNT/2)); //anchor pulls the line towards x and y lines
    let yA = anchor * sin(radians(i + STEP_AMOUNT/2));
    
    if (i === 0) {
      origX = x;
      origY = y;
      vertex(x, y);
    }
    bezierVertex(x, y, x2, y2, xA, yA); 
  
    endShape(CLOSE);
    offsets[i] += 0.02; 
    offsets[i + STEP_AMOUNT/2] += 0.02;
  }
 
  pop();
  originalOffSet += amountToChange; 
}

function flow() {
  shapeX += 1;
  curHeight += map(noise(xOff / 3) * 5, 0, 5, -1.4, 1.4); //current height plus noise - why the shape is going up/dpwn
  push();
  scale(1, map(shapeX, 0, width, random(1, 2), random(1, 2))); //mapping where the shape is 
  weirdCircle(shapeX, curHeight, shapeX + 5, height); 
  pop();
  xOff += 0.5;
}

function draw() {
  randomSeed(10);
  flow();
}

function keyPressed() { //saves the image if space bar is pressed
  if (key === " ") {
    save();
  }
}