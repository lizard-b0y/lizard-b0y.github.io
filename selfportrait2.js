//Second Javascript Self Portrait

let asmoMove = 1; //used to move Asmo and friends
let asmoSpeed = 1.5; //speed of Asmo and friends
let rememberSpeed = asmoSpeed;
let asend = 1;
let r = 1;
let armRotate = 1;
let m = 1;
let m2 = true;
let randomShirt = [220, 220, 220]; //used to set random light colored shirt
let moveSun = 1;

function setup() {
  createCanvas(550, 550);
}

function draw() {
   background(153, 160, 201);
  
  drawGrid();
  
  for(let i=1;i<6;i=i+1){
  push();
  translate(0,160);
  translate(0,-110*i);
  drawAsmo();
  drawMonstera();
  translate(250,0);
  drawAsmo();
  drawMonstera();  
  pop();
  }
  
  asmoMove=asmoMove+asmoSpeed;
  if (asmoMove+450>width || asmoMove+100 <0){
  asmoSpeed=asmoSpeed*-1;
  }
  
  drawScene();
  background(153, 160, 201,80);

  push();

  translate(0,500);

  if(asend>=height+450){
  randomShirt = [random(165,255),random(165,255),random(165,255)];
  asend=1;
  
  }else{
  translate(0,-asend);
  drawBody();
  drawBIGflower();
  drawArms();
  
  push();
  stroke(46, 26, 27);
  strokeWeight(2);
  translate(160,30);
  scale(0.6);
  drawHead();
  drawFlower();
  pop();
  asend = asend+2.5; 

  pop();
  }
}

function drawFlower(){
  //flower
  
  //stem
  strokeWeight(5);
  noFill();
  stroke(176, 224, 117);
  curve(40, 50, 140, 30, 180, 70, 10, 10);
  strokeWeight(8);
  line(176,45,182,30);
    
  //petals  
  stroke(46, 26, 27);
  strokeWeight(2);
  rectMode(CENTER);
  fill(255, 130, 230);
  rect(140,30,40,10,30);
  rect(140,30,10,40,30);
  
  fill(176, 224, 117);
  circle(140,30,10);  
}

function drawBIGflower(){
  push();
  translate(252,370);
  rotate(r);
  stroke(46, 26, 27);
  strokeWeight(2);
  rectMode(CENTER);
  fill(255, 130, 230);
  rect(0,0,50,18,30);
  rect(0,0,18,50,30);

  fill(176, 224, 117);
  circle(0,0,20);
  pop();
  r=r+3;
}

function drawHead(){
  //face
  fill(252, 226, 159);
  beginShape();
  vertex(90,115);
  vertex(240,115);
  vertex(240,245);
  vertex(190,280);
  vertex(145,280);
  vertex(100,245);
  endShape(CLOSE);
  
  //collar
  fill(23, 33, 31);
  ellipseMode(CORNERS);
  ellipse(135,295,200,310);
  
  //neck
  rectMode(CORNER);
  fill(252, 226, 159);
  rect(150,280,35,20);
  
  //mask
  fill(23, 33, 31);
  beginShape();
  vertex(145,205);
  vertex(240,230);
  vertex(240,245);
  vertex(190,280);
  vertex(145,280);
  vertex(100,245);
  vertex(100,230);
  endShape(CLOSE);
  
  //hair
  fill(110, 103, 93);
  beginShape();
  vertex(75,170);
  vertex(80,120);
  vertex(120,80);
  vertex(180,60);
  vertex(225,80);
  vertex(260,120);
  vertex(285,130);
  vertex(260,150);
  vertex(265,170);
  vertex(265,240);
  vertex(275,265);
  vertex(250,250);
  vertex(250,260);
  vertex(260,285);
  vertex(240,270);
  vertex(235,290);
  vertex(230,275);
  vertex(230,165);
  vertex(230,220);
  vertex(215,215);
  vertex(215,185);
  vertex(200,210);
  vertex(190,170);
  vertex(190,150);
  vertex(180,165);
  vertex(145,120);
  vertex(110,170);
  vertex(105,210);
  vertex(95,190);
  vertex(85,215);
  endShape(CLOSE);
  
  triangle(80,210,70,205,76,195);
  triangle(227,280,215,268,227,260);
  
  //ear
  ellipseMode(CENTER);
  angleMode(DEGREES);
  fill(252, 226, 159);
  arc(230,190,40,50,270,90,CHORD);

  //earrings
  strokeWeight(7);
  stroke(227, 224, 48);
  point(250,180);
  point(240,210);
  
  //eyebrows
  stroke(0);
  strokeWeight(4);
  line(map(mouseX,0,width,105,110),map(mouseY,0,height,170,180),map(mouseX,0,width,125,130),map(mouseY,0,height,170,180));       
  line(map(mouseX,0,width,165,170),map(mouseY,0,height,170,180),map(mouseX,0,width,185,190),map(mouseY,0,height,170,180));
  
  //eyes
  strokeWeight(8);
  line(map(mouseX,0,width,105,110),map(mouseY,0,height,183,193),map(mouseX,0,width,125,130),map(mouseY,0,height,180,190));  
  line(map(mouseX,0,width,165,170),map(mouseY,0,height,180,190),map(mouseX,0,width,185,190),map(mouseY,0,height,183,193));
  
}

function drawGrid(){
  strokeWeight(1);
  stroke(0,0,0,95);
  for (x = 25; x <= width; x = x + 25) {
    line(x, 0, x, height);
  }

 for (y = 25; y <= height; y = y + 25) {
   line(0, y, width, y);
 }
}

function drawAsmo(){
  stroke(46, 26, 27);
  strokeWeight(2);
  fill(18, 17, 16);
  beginShape();
  vertex(80+asmoMove,430);
  vertex(90+asmoMove,430);
  vertex(95+asmoMove,475);
  vertex(60+asmoMove,470);
  vertex(45+asmoMove,450);
  vertex(50+asmoMove,430);
  vertex(65+asmoMove,410);
  vertex(80+asmoMove,430);
  vertex(100+asmoMove,430);
  vertex(115+asmoMove,410);
  vertex(130+asmoMove,430);
  endShape(CLOSE);
  fill(222, 188, 51);
  beginShape();
  vertex(90+asmoMove,430);
  vertex(100+asmoMove,430);
  vertex(130+asmoMove,430);
  vertex(135+asmoMove,450);
  vertex(130+asmoMove,470);
  vertex(110+asmoMove,475);
  vertex(95+asmoMove,475);
  endShape(CLOSE);
  
  strokeWeight(5);
  stroke(228, 245, 220);
  line(70+asmoMove,450,85+asmoMove,450);
  stroke(18, 17, 16);
  line(110+asmoMove,450,125+asmoMove,450);
}

function drawBody(){

//shirt
  fill(randomShirt);
  strokeWeight(1);
  stroke(0);
  beginShape();
  vertex(165,210);
  vertex(350,210);
  vertex(350,260);
  vertex(310,260);
  vertex(310,350);
  vertex(200,350);
  vertex(200,260);
  vertex(165,260);
  endShape(CLOSE);
  
  stroke(23, 33, 31);
  strokeWeight(7);
  line(350,213,350,258);
  line(165,213,165,258);

  if (m2==true){
  if(m<20){
  m=m+0.7;
  }else{
  m2 = false;
  }
  }

  if (m2==false){
  if(m>-20){
  m=m-4;
  }else{
  m2 = true;  
  }
  }

  
//legs
  strokeWeight(25);
  stroke(252, 226, 159);
  line(210,420,200,450);
  line(200,450,220+m,500);
  
  line(295,420,310,450);
  line(310,450,290-m,500);
 
//shoes
  strokeWeight(25);
  stroke(23, 33, 31);
  line(225+m,510,180+m,510);
  line(285-m,510,330-m,510);
  
//pant 
  strokeWeight(1);
  fill(23, 33, 31);
  stroke(220);
  beginShape();
  vertex(310,350);
  vertex(330,420);
  vertex(265,420);
  vertex(250,390);
  vertex(235,420);
  vertex(180,420);
  vertex(200,350);
  endShape(CLOSE);
  
}

function drawArms(){
//arms 
  strokeWeight(25);
  stroke(252, 226, 159);
  
  push();
  translate(155,230);
  rotate(-armRotate);
  line(110-155,230-230,0,0);
  circle(110-155,230-230,20);
  pop();
  
  push();
  translate(360,230);
  rotate(armRotate);
  line(0,0,410-360,230-230);
  circle(410-360,230-230,20);
  pop();
  
  armRotate=armRotate+8;
}

function drawAsmo(){
  stroke(46, 26, 27);
  strokeWeight(2);
  fill(18, 17, 16);
  beginShape();
  vertex(80+asmoMove,430);
  vertex(90+asmoMove,430);
  vertex(95+asmoMove,475);
  vertex(60+asmoMove,470);
  vertex(45+asmoMove,450);
  vertex(50+asmoMove,430);
  vertex(65+asmoMove,410);
  vertex(80+asmoMove,430);
  vertex(100+asmoMove,430);
  vertex(115+asmoMove,410);
  vertex(130+asmoMove,430);
  endShape(CLOSE);
  fill(222, 188, 51);
  beginShape();
  vertex(90+asmoMove,430);
  vertex(100+asmoMove,430);
  vertex(130+asmoMove,430);
  vertex(135+asmoMove,450);
  vertex(130+asmoMove,470);
  vertex(110+asmoMove,475);
  vertex(95+asmoMove,475);
  endShape(CLOSE);
  
  strokeWeight(5);
  stroke(228, 245, 220);
  line(70+asmoMove,450,85+asmoMove,450);
  stroke(18, 17, 16);
  line(110+asmoMove,450,125+asmoMove,450);
}

function drawMonstera(){
  stroke(46, 26, 27);
  strokeWeight(2);
  fill(176, 224, 117);
  beginShape();
  vertex(230+asmoMove,410);
  vertex(240+asmoMove,430);
  vertex(235+asmoMove,432);
  vertex(230+asmoMove,438);
  vertex(230+asmoMove,445);
  vertex(240+asmoMove,450);
  vertex(235+asmoMove,458);
  vertex(230+asmoMove,465);
  vertex(225+asmoMove,468);
  vertex(220+asmoMove,480);
  vertex(218+asmoMove,480);
  vertex(220+asmoMove,468);
  vertex(210+asmoMove,465);
  vertex(205+asmoMove,450);
  vertex(203+asmoMove,440);
  vertex(210+asmoMove,430);
  vertex(220+asmoMove,428);
  vertex(225+asmoMove,425);
  vertex(225+asmoMove,423);
  vertex(220+asmoMove,420);
  endShape(CLOSE);
}

function drawScene(){
push();
translate(0,350);
scale(0.8);
  fill(204, 159, 22);
  push();
  translate(width/2,height);
  rotate(moveSun);
   circle(-200,-500,100);
    noFill();
    strokeWeight(5);
    let q =20;
    for(let p=1.5; p<8;p+=1){
      q+=50;
      stroke(227, 227, 30,200/p);
      circle(-200,-500,100+q);
    }
  if(moveSun>100){
    moveSun=-40
  }else{
  moveSun= moveSun+0.6;
  }
    pop();
  strokeWeight(1);
  stroke(25);
  for(let i=0; i<width-50; i=i+120){
    fill(130, 250, 152);
    triangle(200+i,100,300+i,300,0+i,300);
    fill(125, 140, 138);
    triangle(200+i,100,300+i,200,100+i,300);
  }
  pop();
}

function keyPressed(){
if (asmoSpeed != 0){
rememberSpeed = asmoSpeed
asmoSpeed = 0 ;
}else{
asmoSpeed = rememberSpeed;
} 
}
