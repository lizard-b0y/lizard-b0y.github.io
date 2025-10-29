//NOTES ON USER INTERACTION: If user presses on flower it can be "plucked" and moved around and if plant is "russled" the leaves fall

let plucked = false;
let russle = false;
let asmoMove = 1; //used to move Asmo and friends
let asmoSpeed = 2.5; //speed of Asmo and friends
let rememberSpeed = asmoSpeed;
let r = 1; //used for flower rotation
let r2 = 1; //used for russle

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(153, 160, 201);
  noStroke();
  rectMode(CORNER);
  fill(255, 255, 255, 50);
  rect(0, 375, 500, 375);
  fill(255, 255, 255, 90);
  rect(325, 0, 500, 375);

  blendMode(OVERLAY);
  drawGrid();

  blendMode(BLEND);

  push();
  translate(35, -25);
  drawPlant();
  pop();

  drawAsmo();
  drawMonstera();
  push();
  translate(250, 0);
  drawAsmo();
  drawMonstera();
  pop();

  asmoMove = asmoMove + asmoSpeed;
  if (asmoMove + 400 > width || asmoMove + 100 < 0) {
    asmoSpeed = asmoSpeed * -1;
  }

  push();
  stroke(46, 26, 27);
  strokeWeight(2);
  translate(-10, 20);
  drawMe();
  drawFlower();
  pop();
}

function mousePressed() {
  if (mouseX >= 90 && mouseX <= 190 && mouseY > 10 && mouseY < 100) {
    plucked = true;
  }

  if (
    mouseX >= 352 &&
    mouseX < 352 + 190 &&
    mouseY >= 40 &&
    mouseY <= 40 + 290
  ) {
    russle = true;
  }
}

function mouseReleased() {
  if (plucked == true) {
    plucked = false;
  }
}

function drawFlower() {
  //flower
  if (plucked == true) {
    //stem
    strokeWeight(5);
    noFill();
    stroke(176, 224, 117);
    curve(30, 80, mouseX, mouseY, 180, 70, 30, 100);
    //strokeWeight(8);
    //line(mouseX+36,mouseY+15,mouseX+42,mouseY);

    //petals
    push();
    translate(mouseX, mouseY);
    rotate(r);
    stroke(46, 26, 27);
    strokeWeight(2);
    rectMode(CENTER);
    fill(255, 130, 230);
    rect(0, 0, 40, 10, 30);
    rect(0, 0, 10, 40, 30);

    fill(176, 224, 117);
    circle(0, 0, 10);
    pop();
    r = r + 5;
  } else {
    //stem
    strokeWeight(5);
    noFill();
    stroke(176, 224, 117);
    curve(40, 50, 140, 30, 180, 70, 10, 10);
    strokeWeight(8);
    line(176, 45, 182, 30);

    //petals
    stroke(46, 26, 27);
    strokeWeight(2);
    rectMode(CENTER);
    fill(255, 130, 230);
    rect(140, 30, 40, 10, 30);
    rect(140, 30, 10, 40, 30);

    fill(176, 224, 117);
    circle(140, 30, 10);
  }
}

function drawMe() {
  //face
  fill(252, 226, 159);
  beginShape();
  vertex(90, 115);
  vertex(240, 115);
  vertex(240, 245);
  vertex(190, 280);
  vertex(145, 280);
  vertex(100, 245);
  endShape(CLOSE);

  //collar
  fill(23, 33, 31);
  ellipseMode(CORNERS);
  ellipse(135, 295, 200, 305);

  //neck
  rectMode(CORNER);
  fill(252, 226, 159);
  rect(150, 280, 35, 20);

  //mask
  fill(23, 33, 31);
  beginShape();
  vertex(145, 205);
  vertex(240, 230);
  vertex(240, 245);
  vertex(190, 280);
  vertex(145, 280);
  vertex(100, 245);
  vertex(100, 230);
  endShape(CLOSE);

  //hair
  fill(110, 103, 93);
  beginShape();
  vertex(75, 170);
  vertex(80, 120);
  vertex(120, 80);
  vertex(180, 60);
  vertex(225, 80);
  vertex(260, 120);
  vertex(285, 130);
  vertex(260, 150);
  vertex(265, 170);
  vertex(265, 240);
  vertex(275, 265);
  vertex(250, 250);
  vertex(250, 260);
  vertex(260, 285);
  vertex(240, 270);
  vertex(235, 290);
  vertex(230, 275);
  vertex(230, 165);
  vertex(230, 220);
  vertex(215, 215);
  vertex(215, 185);
  vertex(200, 210);
  vertex(190, 170);
  vertex(190, 150);
  vertex(180, 165);
  vertex(145, 120);
  vertex(110, 170);
  vertex(105, 210);
  vertex(95, 190);
  vertex(85, 215);
  endShape(CLOSE);

  triangle(80, 210, 70, 205, 76, 195);
  triangle(227, 280, 215, 268, 227, 260);

  //ear
  ellipseMode(CENTER);
  angleMode(DEGREES);
  fill(252, 226, 159);
  arc(230, 190, 40, 50, 270, 90, CHORD);

  //earrings
  strokeWeight(7);
  stroke(227, 224, 48);
  point(250, 180);
  point(240, 210);

  //eyebrows
  stroke(0);
  strokeWeight(4);
  line(
    map(mouseX, 0, width, 105, 110),
    map(mouseY, 0, height, 170, 180),
    map(mouseX, 0, width, 125, 130),
    map(mouseY, 0, height, 170, 180)
  );
  line(
    map(mouseX, 0, width, 165, 170),
    map(mouseY, 0, height, 170, 180),
    map(mouseX, 0, width, 185, 190),
    map(mouseY, 0, height, 170, 180)
  );

  //eyes
  strokeWeight(8);
  line(
    map(mouseX, 0, width, 105, 110),
    map(mouseY, 0, height, 183, 193),
    map(mouseX, 0, width, 125, 130),
    map(mouseY, 0, height, 180, 190)
  );
  line(
    map(mouseX, 0, width, 165, 170),
    map(mouseY, 0, height, 180, 190),
    map(mouseX, 0, width, 185, 190),
    map(mouseY, 0, height, 183, 193)
  );
}

function drawGrid() {
  strokeWeight(1);
  stroke(0, 0, 0, 95);
  for (x = 25; x <= width; x = x + 25) {
    line(x, 0, x, height);
  }

  for (y = 25; y <= height; y = y + 25) {
    line(0, y, width, y);
  }
}

function drawAsmo() {
  stroke(46, 26, 27);
  strokeWeight(2);
  fill(18, 17, 16);
  beginShape();
  vertex(80 + asmoMove, 430);
  vertex(90 + asmoMove, 430);
  vertex(95 + asmoMove, 475);
  vertex(60 + asmoMove, 470);
  vertex(45 + asmoMove, 450);
  vertex(50 + asmoMove, 430);
  vertex(65 + asmoMove, 410);
  vertex(80 + asmoMove, 430);
  vertex(100 + asmoMove, 430);
  vertex(115 + asmoMove, 410);
  vertex(130 + asmoMove, 430);
  endShape(CLOSE);
  fill(222, 188, 51);
  beginShape();
  vertex(90 + asmoMove, 430);
  vertex(100 + asmoMove, 430);
  vertex(130 + asmoMove, 430);
  vertex(135 + asmoMove, 450);
  vertex(130 + asmoMove, 470);
  vertex(110 + asmoMove, 475);
  vertex(95 + asmoMove, 475);
  endShape(CLOSE);

  strokeWeight(5);
  stroke(228, 245, 220);
  line(70 + asmoMove, 450, 85 + asmoMove, 450);
  stroke(18, 17, 16);
  line(110 + asmoMove, 450, 125 + asmoMove, 450);
}

function keyPressed() {
  if (asmoSpeed != 0) {
    rememberSpeed = asmoSpeed;
    asmoSpeed = 0;
  } else {
    asmoSpeed = rememberSpeed;
  }
}

function drawMonstera() {
  stroke(46, 26, 27);
  strokeWeight(2);
  fill(176, 224, 117);
  beginShape();
  vertex(230 + asmoMove, 410);
  vertex(240 + asmoMove, 430);
  vertex(235 + asmoMove, 432);
  vertex(230 + asmoMove, 438);
  vertex(230 + asmoMove, 445);
  vertex(240 + asmoMove, 450);
  vertex(235 + asmoMove, 458);
  vertex(230 + asmoMove, 465);
  vertex(225 + asmoMove, 468);
  vertex(220 + asmoMove, 480);
  vertex(218 + asmoMove, 480);
  vertex(220 + asmoMove, 468);
  vertex(210 + asmoMove, 465);
  vertex(205 + asmoMove, 450);
  vertex(203 + asmoMove, 440);
  vertex(210 + asmoMove, 430);
  vertex(220 + asmoMove, 428);
  vertex(225 + asmoMove, 425);
  vertex(225 + asmoMove, 423);
  vertex(220 + asmoMove, 420);
  endShape(CLOSE);
}

function drawPlant() {
  //plant leaves
  strokeWeight(0);
  fill(61, 156, 94);
  if (russle == true) {
    push();
    translate(400, 105 + r2);
    rotate(r2);
    quad(0, 0, 30, 15, 45, 40, 20, 30);
    pop();

    push();
    translate(355, 120 + r2);
    rotate(80 + r2);
    quad(0, 0, 30, 15, 45, 40, 20, 30);
    pop();

    if (r2 < width) {
      r2 = r2 + 10;
    } else {
      russle = false;
    }
  } else {
    r2 = 1;
    push();
    translate(400, 105);
    quad(0, 0, 30, 15, 45, 40, 20, 30);
    pop();

    push();
    translate(355, 120);
    rotate(80);
    quad(0, 0, 30, 15, 45, 40, 20, 30);
    pop();
  }

  //plant stems
  strokeWeight(4);
  stroke(35, 97, 76);
  line(400, 70, 375, 330);
  line(355, 90, 395, 330);

  stroke(46, 26, 27);
  strokeWeight(2);
  //water
  fill(0, 171, 255, 80);
  rect(350, 250, 55, 90, 20);
  //vase
  fill(255, 255, 255, 90);
  rect(340, 200, 75, 150, 30);
  rect(350, 190, 55, 10, 10);
}
