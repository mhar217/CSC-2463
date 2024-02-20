let bugSprite;
let timer = 30;
let score = 0;

function preload() {
  bugSprite = new Sprite(random(0,400),400,128,128);
  bugSprite.spriteSheet = 'BugSheet/New Piskel.png';
  let animations = {
    bugDead: {row: 0, frames: 1},
    bugWalk: {row: 0, col: 1, frames: 4}
  };
  bugSprite.anis.frameDelay = 8;
  bugSprite.addAnis(animations);
  bugSprite.changeAni('bugWalk');
}

function setup() {
   createCanvas(400, 400);
}

function draw() {
    background(200);
    if (bugSprite.y > height) {
        bugSprite.vel.y = -.5;
        bugSprite.vel.x = 0;
    } else if (bugSprite.mouse.presses()) {
      bugSprite.changeAni('bugDead');
      bugSprite.vel.y = 0;;
      score+=1;
      preload();
    }
    textAlign(CENTER, CENTER);
    textSize(60);
    text(timer, width/2 + 160, height/2 - 160);
    text(score, width/2 - 170, height/2 - 160);
    textSize(20);
    text('Start by clicking the first bug!', width/2 - 10, 20);
    if (frameCount % 60 == 0 && timer > 0) { 
      timer--;
    }
    if (timer == 0) {
      remove();
    }
}
