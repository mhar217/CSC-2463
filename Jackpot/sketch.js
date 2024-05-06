let port;
let count = 0;
let connectButton;
let sound;
let jackpot = 0;
sound = new Tone.Players ({
  Cyclone:"soundAssets/MainTheme.mp3"
}).toDestination();

function setup() {
  port = createSerial();
  createCanvas(400, 400);
  songButton = createButton('Music');
  songButton.position(70,400);
  songButton.mousePressed(() =>sound.player('Cyclone').start());
  connectButton = createButton("Connect");
  connectButton.mousePressed(connect);
}
function draw() {
  background(220, 0, 0);
  let c1 = color('red');
  fill(c1);
  strokeWeight(8);
  rect(0,0,180,230);
  let c2 = color('blue');
  fill(c2);
  rect(365,230,150,80)
  let c3 = color('yellow');
  fill(c3);
  rect(180,390,90,80)
  let c4 = color('black');
  fill(c4);
  rect(270,390,90,80)
  let c5 = color('green')
  fill(c5);
  rect(180,0,230,230)
  rect(180,230,180,160)
  textSize(100);
  fill('black');
  text(count,width/2+20, height/2+20);
  textSize(40);
  text('CYCLONE',5,height/2+20);
  let str = port.read("\n");
  if (str++) {
    count+=1;
  }
}
function connect () {
  if (!port.opened()) {
    port.open('Arduino', 9600);
  } else {
    port.close();
  }
}

