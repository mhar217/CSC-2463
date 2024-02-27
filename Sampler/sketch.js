let soundFX, button1, button2, button3, button4, dSlider;

soundFX = new Tone.Players ({
  WaveDrums :"soundAssets/WaveDrums.mp3",
  AmenBreak : "soundAssets/AmenBreak.mp3",
  MetalLoop : "soundAssets/MetalLoop.mp3",
  MetalRiff : "soundAssets/MetalRiff.mp3"
}).toDestination();

let fDelay = new Tone.FeedbackDelay("8n", 0.5);

function setup() {
  createCanvas(500, 450);

  button1 = createButton('Wave Drums');
  button1.position(100,100);
  button1.mousePressed(() =>soundFX.player('WaveDrums').start());

  button2 = createButton('Amen Break');
  button2.position(300,100);
  button2.mousePressed(() =>soundFX.player('AmenBreak').start());

  button3 = createButton('MetalLoop');
  button3.position(100,300);
  button3.mousePressed(() =>soundFX.player('MetalLoop').start());

  button4 = createButton('Metal Riff');
  button4.position(300,300);
  button4.mousePressed(() =>soundFX.player('MetalRiff').start());

  dSlider = createSlider(0.,2,0,0.05);
  dSlider.position(150,200);
  dSlider.mouseMoved(() => fDelay.delayTime.value = dSlider.value());
}

function draw() {
  background(255, 0, 60);
  text("Feedback Delay", 155, 200);
}
