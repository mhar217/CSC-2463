let port;
let joyX = 0, joyY = 0, sw = 0;
let connectButton;
let circleX, circleY;
let speed = 2;
function setup() {
  port = createSerial();
  createCanvas(400, 400);
  circleX = width / 2;
  circleY = height / 2;
  connectButton = createButton("Connect");
  connectButton.mousePressed(connect);
 
}

function draw() {
  background(220);

  let str = port.readUntil("\n");
  let values = str.split(",");
  if (values.length > 2) {
    joyX = values[0];
    joyY = values[1];
    sw = values[2];
    if (joyX > 0) {
      circleX += speed;
    } else if (joyX < 0) {
      circleX -= speed;
    }

    if (joyY > 0) {
      circleY += speed;
    } else if (joyY < 0) {
      circleY -= speed;
    }
  }
  noStroke();
  fill('red');
  rect(0,0,width/2,height);
  fill('black');
  rect(width/2,0,width/2,height);
  if (sw == 1) {
    fill("purple");
  }
  else {
    fill ("blue");
  }
  circle(circleX, circleY, 30);
}


function connect () {
  if (!port.opened()) {
    port.open('Arduino', 9600);
  } else {
    port.close();
  }
}