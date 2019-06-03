// Major Project
// Azwa Alam
// 27th May 2019


let x;
let y;
let shapeX = 20;
let shapeY;
let xOff = 0;
let curHeight;
let offset; 
let amountToChange = 0.01;
let originalOffSet; 
let offsets; 
const STEP_AMOUNT = 30; 
 

function setup(){
  createCanvas(windowWidth, windowHeight);
  originalOffSet = random(10); 
  curHeight = height/2; 

  offsets = [];
  for(let a = 0; a < 361; a ++){
    offsets.push(random(100)); 
  }
  //noLoop();

}

function weirdCircle(x, y) { //draws a circle with random angles
  noFill();
  stroke(map(shapeX, 0, width, 100, 153), map(shapeX, 0, width, 100, 204), map(shapeX, 0, width, 150, 255), 200);
  push();
  translate(x, y);
  beginShape();
  offset = originalOffSet; 
  let origX, origY;
  let secondX, secondY; 


  for (let i = 0; i <= 360; i += STEP_AMOUNT) {
    let r = 30 + noise(offsets[i]) * 150 ; //gives a controlled random line
    x = r * cos(radians(i));
    y = r * sin(radians(i));
    if (i === 0) {
      origX = x;
      origY = y;
    }
    else if(i === STEP_AMOUNT){
      secondX = x;
      secondY = y; 
    }
    else if(i === 360) {
      curveVertex(origX, origY);
      curveVertex(secondX, secondY);
    }

    else{
      offsets[i] += 0.01; 
      curveVertex(x, y);
    }

  }
  endShape(CLOSE);
  pop();
  originalOffSet += amountToChange; 
}

function flow() {
  shapeX += 1;
  curHeight += map(noise(xOff / 3) * 5, 0, 5, -1.4, 1.4);
  push();
  scale(1, map(shapeX, 0, width, random(1, 2), random(1, 2)));
  weirdCircle(shapeX, curHeight, shapeX + 1, height);
  pop();
  xOff += 0.1;

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