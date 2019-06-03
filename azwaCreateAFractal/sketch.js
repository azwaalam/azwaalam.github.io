// Create a Fractal
// Azwa Alam
// 21st May 2019
//PRODUCTION RULES:
//1.Create a sphere
//2. Create 8 "petals" with 6 spheres in each petal
//3. Rotate the flower and the petals 

let angle = 5;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  smooth();
}

function draw() {
  angle = map(mouseX, 0, width, -40, 40);
  background(220);
  push();
  rotateZ(radians(frameCount));

  for(let i = 0; i < 360; i += 45){
    push();
    rotateZ(radians(i));
    fill(0);
    flower(70);
    pop();
  }
  pop();
}

function flower(size){
  if(size > 20){   
    rotateZ(radians(angle));
    translate(size*1.5,0);
    sphere(size);
    flower(size*0.8);
  }
}