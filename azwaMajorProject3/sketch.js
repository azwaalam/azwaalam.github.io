
//Chaos of Life 
// Azwa Alam


//Add tree
//Make lines more thick/thin and smoother=

const START_CIRCLE = 250; 
const NUM_PARTICLES = 200; 
let pArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  if(frameCount < NUM_PARTICLES){
    pArray.push(new Particle(mouseX, mouseY));
  }
  for (let i = 0; i < pArray.length; i++){
    pArray[i].move();
    pArray[i].display();
  }
}
function mouseClicked(){
  pArray.push(new Particle(mouseX, mouseY));
}
class Particle{
  constructor(x_, y_){
    this.scale = 1;
    this.circleAngle = random(2*PI); 
    //this.x = START_CIRCLE*cos(this.circleAngle);
    //this.y = START_CIRCLE*sin(this.circleAngle);
    this.position = createVector(START_CIRCLE*cos(this.circleAngle),START_CIRCLE*sin(this.circleAngle));
    this.c = color(random(255), random(255),random(255));
    this.size = random(10,20);
    this.xOff = random(10);
    this.yOff = random(10);
    this.strokeOff = random(10);
    this.circleAngle = random(this.circleAngle - (PI/6), this.circleAngle + (PI/6));
    this.velocity = createVector(cos(this.circleAngle)*10, sin(this.circleAngle)*10);

    this.angle = random(0,2*PI); //draws a circle 
  }
  move(){ 
  
    this.position.add(this.velocity); 
    this.xOff += random(1, 100);  //controls the direction of lines
    this.yOff += random(1, 100); //controls the direction of lines
    this.accel = createVector(random(-2.5,2.5),random(-2.5,2.5)); //tweak
    this.velocity.add(this.accel);
    //this.ySpeed = noise(this.yOff) * this.scale;
    //this.xSpeed = noise(this.xOff) * this.scale;
  }
  display(){ 
    stroke(this.c);
    push();
    translate(width/2,height/2);
    rotate(this.angle); //spinning in directions
    translate(this.position.x,this.position.y);
    //ellipse(0,0, 10, 10); 
    strokeWeight(noise(this.strokeOff)*12);
    this.strokeOff += 0.2;
    line(0,0,this.velocity.x, this.velocity.y);
    pop();
  }
}

function keyPressed() { //saves the image if space bar is pressed
  if (key === " ") {
    save();
  }
}