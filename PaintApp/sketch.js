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

player.loop = true;

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
  function mousePressed() {
    sounds.player('melody').start();
    if (mouseX > 0 - 40 && mouseX < 0 + 40 && mouseY > 0 - 40 && mouseY < 0 + 40) {
      stroke('red')
      sounds.player('redChange').start();
    } else if (mouseX > 0 - 40 && mouseX < 0 + 40 && mouseY > 40 - 40 && mouseY < 40 + 40) {
      stroke('orange')
      sounds.player('orangeChange').start();
    } else if (mouseX > 0 - 40 && mouseX < 0 + 40 && mouseY > 80 - 40 && mouseY < 80 + 40) {
      stroke('yellow')
      sounds.player('yellowChange').start();
    } else if (mouseX > 0 - 40 && mouseX < 0 + 40 && mouseY > 120 - 40 && mouseY < 120 + 40) {
      stroke('green')
      sounds.player('greenChange').start();
    } else if (mouseX > 0 - 40 && mouseX < 0 + 40 && mouseY > 160 - 40 && mouseY < 160 + 40) {
      stroke('cyan')
      sounds.player('cyanChange').start();
    } else if (mouseX > 0 - 40 && mouseX < 0 + 40 && mouseY > 200 - 40 && mouseY < 200 + 40) {
      stroke('blue')
      sounds.player('blueChange').start();
    } else if (mouseX > 0 - 40 && mouseX < 0 + 40 && mouseY > 240 - 40 && mouseY < 240 + 40) {
      stroke('purple')
      sounds.player('purpleChange').start();
    } else if (mouseX > 0 - 40 && mouseX < 0 + 40 && mouseY > 280 - 40 && mouseY < 280 + 40) {
      stroke('brown')
      sounds.player('brownChange').start();
    } else if (mouseX > 0 - 40 && mouseX < 0 + 40 && mouseY > 320 - 40 && mouseY < 320 + 40) {
      stroke('white')
      sounds.player('whiteChange').start();
    } else if (mouseX > 0 - 40 && mouseX < 0 + 40 && mouseY > 360 - 40 && mouseY < 360 + 40) {
      stroke('black')
      sounds.player('blackChange').start();
    }
  }
    function mouseReleased() {
    sounds.player('melody').stop();
  }