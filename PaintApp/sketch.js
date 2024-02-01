function setup() {
    createCanvas(550, 455);
    background(220);
  }
  
  function draw() {
    fill('red')
    rect(0,0,40,40)
    fill('orange')
    rect(0,40,40,40)
    fill('yellow')
    rect(0,80,40,40)
    fill('green')
    rect(0,120,40,40)
    fill('cyan')
    rect(0,160,40,40)
    fill('blue')
    rect(0,200,40,40)
    fill('magenta')
    rect(0,240,40,40)
    fill('brown')
    rect(0,280,40,40)
    fill('white')
    rect(0,320,40,40)
    fill('black')
    rect(0,360,40,40)
    
  }
  function mouseDragged() {
    strokeWeight(10)
    if (mouseX >= 40) {
      line(mouseX, mouseY, pmouseX, pmouseY)
      noFill()
    }
  }
  function mouseReleased() {}
  
  function mousePressed() {
    if (mouseX > 0 - 40 && mouseX < 0 + 40 && mouseY > 0 - 40 && mouseY < 0 + 40) {
      stroke('red')
    } else if (mouseX > 0 - 40 && mouseX < 0 + 40 && mouseY > 40 - 40 && mouseY < 40 + 40) {
      stroke('orange')
    } else if (mouseX > 0 - 40 && mouseX < 0 + 40 && mouseY > 80 - 40 && mouseY < 80 + 40) {
      stroke('yellow')
    } else if (mouseX > 0 - 40 && mouseX < 0 + 40 && mouseY > 120 - 40 && mouseY < 120 + 40) {
      stroke('green')
    } else if (mouseX > 0 - 40 && mouseX < 0 + 40 && mouseY > 160 - 40 && mouseY < 160 + 40) {
      stroke('cyan')
    } else if (mouseX > 0 - 40 && mouseX < 0 + 40 && mouseY > 200 - 40 && mouseY < 200 + 40) {
      stroke('blue')
    } else if (mouseX > 0 - 40 && mouseX < 0 + 40 && mouseY > 240 - 40 && mouseY < 240 + 40) {
      stroke('purple')
    } else if (mouseX > 0 - 40 && mouseX < 0 + 40 && mouseY > 280 - 40 && mouseY < 280 + 40) {
      stroke('brown')
    } else if (mouseX > 0 - 40 && mouseX < 0 + 40 && mouseY > 320 - 40 && mouseY < 320 + 40) {
      stroke('white')
    } else if (mouseX > 0 - 40 && mouseX < 0 + 40 && mouseY > 360 - 40 && mouseY < 360 + 40) {
      stroke('black')
    }
  }