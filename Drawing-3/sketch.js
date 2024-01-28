function setup() {
    createCanvas(600, 400);
  }
  
  function draw() {
    background(0);
    noStroke();
    fill('yellow');
    arc(130,220,280,280,4,2.25)
    fill('red');
    rect(300,220,250,125)
    arc(425,220,250,250,3,TWO_PI)
    fill('white')
    ellipse(370,200,70,70)
    ellipse(480,200,70,70)
    fill('blue')
    ellipse(370,200,50,50)
    ellipse(480,200,50,50)
  }