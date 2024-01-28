function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    noStroke();
    const ellipse1 = color(255, 0, 0, 102);
    const ellipse2 = color(0, 0, 255, 102);
    const ellipse3 = color(0, 255, 0, 102);
    fill(ellipse1)
    ellipse(200,120,180,180);
    fill(ellipse2)
    ellipse(140,220,180,180);
    fill(ellipse3)
    ellipse(260,220,180,180);
  }