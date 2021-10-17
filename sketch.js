let x = 75;
let y = 200;
let z = 300 - y;

let fillColor1 = 0;
let fillColor2 = 0;
let fillColor3 = 0;
let fillColor4 = 0;
   


function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('sketch-container');
  canvas.mouseClicked(newPages);
}


function draw() {
  clear();
  noFill();
  stroke(0);
  strokeWeight(5);
        
  if(mouseX > 50 && mouseX < 300 && mouseY < 300 && mouseY > 50){
      fill(255,0,0,50);
  }
  circle(width/2-x,height/2-x,280); 
  
  
  noFill();
  if(mouseX > 300 && mouseX < 550 && mouseY < 300 && mouseY > 50){
      fill(0,255,0,50);
  }
  circle(width/2+x,height/2-x,280);
  
  noFill();
  if(mouseX > 50 && mouseX < 300 && mouseY < 550 && mouseY > 300){
      fill(0,0,255,50);
  }
  circle(width/2-x,height/2+x,280);
  
  noFill();
  if(mouseX > 300 && mouseX < 550 && mouseY < 550 && mouseY > 300){
      fill(255,255,0,50);
  }
  circle(width/2+x,height/2+x,280);
  
  //Hover + Click Targets
  
  /*
  noFill();
  strokeWeight(1);
  stroke(200,75);
  square(width/2,height/2,y);
  square(z,height/2,y);
  square(z,height/2-y,y);
  square(width/2,height/2-y,y);
  circle(width/2,height/2,75);
  */
}

function newPages(){
  let d = dist(mouseX,mouseY,width/2,height/2); 
  if(d < 75){
    window.open('statement.html');
  }

  else if(mouseX < width/2 && mouseY < height/2){
    window.open('music.html','_self');
  }
  else if(mouseX > width/2 && mouseY < height/2){
    window.open('entrepreneurship.html','_self');
  }
  else if(mouseX < width/2 && mouseY > height/2){
    window.open('performance.html','_self');
  }
  else if(mouseX > width/2 && mouseY > height/2){
    window.open('technology.html','_self');
  }
}
