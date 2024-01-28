function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background('darkblue');
    stroke('white')
    strokeWeight(6)
    fill('green')
    ellipse(width/2,height/2,250,250)
    fill('red');
    beginShape()  
    vertex(200,70);
    vertex(160,140);
    vertex(80,140);
    vertex(140,200);
    vertex(110,300);
    vertex(200,240);
    vertex(300,300);
    vertex(260,200);
    vertex(320,140);
    vertex(240,140);
    vertex(200,70);
    endShape();
  }