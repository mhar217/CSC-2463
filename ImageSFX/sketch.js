function preload() {
  tunnel = loadImage ('imageAssets/pipeImage.jpg')
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (mouseIsPressed === true) {
    background(tunnel); 
  } else if (mouseIsPressed === false) {
    background (240);
    text('Press on the canvas!', 150, height/3);
  }

}


let pySynth = new Tone.PolySynth().toDestination();
pySynth.type = 'sine'
pySynth.harmonicity.value = 0.7;

function mousePressed() {
  pySynth.triggerAttackRelease(('c4'), 0.7);
}
