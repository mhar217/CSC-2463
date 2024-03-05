let chorus = new Tone.Chorus(2, 2.5, 10).toDestination().start();
let synth = new Tone.PolySynth(Tone.Synth).connect(chorus);
synth.toDestination();

function setup() {
  createCanvas(400, 400);
  cSlider = createSlider(0.,20,0,1);
  cSlider.position(100,240);
  cSlider.mouseMoved(() => chorus.delayTime.value = cSlider.value());
}

let notes = {
  'a' : 'C4',
  's' : 'D4',
  'd' : 'E4',
  'f' : 'F4',
  'g' : 'G4',
  'h' : 'A4',
  'j' : 'B4',
  'k' : 'C5'
}

function keyPressed() {
  let playNotes = notes[key];
  synth.triggerAttackRelease(playNotes, 0.2);
}

function draw() {
  background(255, 0, 60);
  text("Chorus Slider", 155, 240)
  text("Press keys from A to K on the keyboard.", 90, 200);
}
