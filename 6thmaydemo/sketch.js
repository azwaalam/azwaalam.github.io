// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(300, 250);
  currentFill = 0;
}
// not done
function draw() {
  //let position = 0;
  //while (position <= width){
    //let s = int(random(10,20));
    //ellipse(position, height/2, s, s)
    //position += 20;

  for (let x = 0; x <= 100; x++){
    for (let y = 0; y <= 100; y++){
      if(x % 2 == 0 || y % 4 == 0){
        stroke(random(255),random(100),200);
        point(x,y);
      } 
    }
  }
}
  