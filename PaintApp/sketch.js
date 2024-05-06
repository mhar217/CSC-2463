let sounds = new Tone.Players({
  melody : "soundAssets/melody.wav",
  redChange : "soundAssets/bbass.wav",
  orangeChange : "soundAssets/stringRub.wav",
  yellowChange : "soundAssets/octbass.wav",
  greenChange : "soundAssets/single.wav",
  cyanChange : "soundAssets/slap.wav",
  blueChange : "soundAssets/prep.wav",
  purpleChange : "soundAssets/four.wav",
  brownChange : "soundAssets/stringSlide.wav",
  whiteChange : "soundAssets/chord.wav",
  blackChange : "soundAssets/abstract.wav"
}).toDestination();

sounds.loop = true;

let port;
let joyX = 0, joyY = 0, sw = 0;
let connectButton;
let circleX, circleY;
let speed = 2;

function setup() {
  createCanvas(550, 455);
  background(220);
  port = createSerial();
  circleX = width / 2;
  circleY = height / 2;
  connectButton = createButton("Connect");
  connectButton.mousePressed(connect);
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
    noFill();
    let str = port.readUntil("\n");
    let values = str.split(",");
    if (values.length > 2) {
    joyX = values[0];
    joyY = values[1];
    sw = Number(values[2]);
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
  if (sw == 1) {
    fill('red');
  }
  else {
    fill(255);
  }
   circle(circleX, circleY, 20);
  }
function SW () {
  if (circleX > 0 - 40 && circleX < 0 + 40 && circleY > 0 - 40 && circleY < 0 + 40 && sw == 1) {
      stroke('red')
      sounds.player('redChange').start();
    } else if (circleX > 0 - 40 && circleX < 0 + 40 && circleY > 40 - 40 && circleY < 40 + 40 && sw == 1) {
      stroke('orange')
      sounds.player('orangeChange').start();
    } else if (circleX > 0 - 40 && circleX < 0 + 40 && circleY > 80 - 40 && circleY < 80 + 40 && sw == 1) {
      stroke('yellow')
      sounds.player('yellowChange').start();
    } else if (circleX > 0 - 40 && circleX < 0 + 40 && circleY > 120 - 40 && circleY < 120 + 40 && sw == 1) {
      stroke('green')
      sounds.player('greenChange').start();
    } else if (circleX > 0 - 40 && circleX < 0 + 40 && circleY > 160 - 40 && circleY < 160 + 40 && sw == 1) {
      stroke('cyan')
      sounds.player('cyanChange').start();
    } else if (circleX > 0 - 40 && circleX < 0 + 40 && circleY > 200 - 40 && circleY < 200 + 40 && sw == 1) {
      stroke('blue')
      sounds.player('blueChange').start();
    } else if (circleX > 0 - 40 && circleX < 0 + 40 && circleY > 240 - 40 && circleY < 240 + 40 && sw == 1) {
      stroke('purple')
      sounds.player('purpleChange').start();
    } else if (circleX > 0 - 40 && circleX < 0 + 40 && circleY > 280 - 40 && circleY < 280 + 40 && sw == 1) {
      stroke('brown')
      sounds.player('brownChange').start();
    } else if (circleX > 0 - 40 && circleX < 0 + 40 && circleY > 320 - 40 && circleY < 320 + 40 && sw == 1) {
      stroke('white')
      sounds.player('whiteChange').start();
    } else if (circleX > 0 - 40 && circleX < 0 + 40 && circleY > 360 - 40 && circleY < 360 + 40 && sw == 1) {
      stroke('black')
      sounds.player('blackChange').start();
    }
}
  function connect () {
    if (!port.opened()) {
      port.open('Arduino', 9600);
    } else {
      port.close();
    }
  }