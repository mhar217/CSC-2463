let sprite1;
let sprite2;
let sprite3;

function preload() {
  sprite1 = new Sprite(200,80,80,80);
  sprite2 = new Sprite(200,200,80,80);
  sprite3 = new Sprite(200,320,80,80);
  sprite1.spriteSheet = 'AnimAssets/SpelunkyGuy.png';
  sprite2.spriteSheet = 'AnimAssets/Green.png';
  sprite3.spriteSheet = 'AnimAssets/Ninja.png';
  let animations = {
    stand: {row: 0, frames: 1},
    walkRight: {row: 0, col: 1, frames: 8}
  };
  sprite1.anis.frameDelay = 4;
  sprite1.addAnis(animations);
  sprite1.changeAni('walkRight');
  sprite2.anis.frameDelay = 4;
  sprite2.addAnis(animations);
  sprite2.changeAni('walkRight');
  sprite3.anis.frameDelay = 4;
  sprite3.addAnis(animations);
  sprite3.changeAni('walkRight');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  if (sprite1.x + sprite1.width/4 > width) {
    sprite1.vel.x = -1;
    sprite1.scale.x = -1;
  } else if (sprite1.x - sprite1.width/4 < 0) {
    sprite1.vel.x = 1;
    sprite1.scale.x = 1;
  }
  if (sprite2.x + sprite2.width/4 > width) {
    sprite2.vel.x = -1;
    sprite2.scale.x = -1;
  } else if (sprite2.x - sprite2.width/4 < 0) {
    sprite2.vel.x = 1;
    sprite2.scale.x = 1;
  }
  if (sprite3.x + sprite3.width/4 > width) {
    sprite3.vel.x = -1;
    sprite3.scale.x = -1;
  } else if (sprite3.x - sprite3.width/4 < 0) {
    sprite3.vel.x = 1;
    sprite3.scale.x = 1;
  }
}

function keyTyped() {
  switch(key) {
    case 'd':
      sprite1.vel.x = 1;
      sprite1.scale.x = 1;
      sprite1.vel.y = 0;
      sprite1.changeAni('walkRight');
      sprite2.vel.x = 1;
      sprite2.scale.x = 1;
      sprite2.vel.y = 0;
      sprite2.changeAni('walkRight');
      sprite3.vel.x = 1;
      sprite3.scale.x = 1;
      sprite3.vel.y = 0;
      sprite3.changeAni('walkRight');
      break;
    case 'a':
      sprite1.vel.x = -1;
      sprite1.scale.x = -1;
      sprite1.vel.y = 0;
      sprite1.changeAni('walkRight');
      sprite2.vel.x = -1;
      sprite2.scale.x = -1;
      sprite2.vel.y = 0;
      sprite2.changeAni('walkRight');
      sprite3.vel.x = -1;
      sprite3.scale.x = -1;
      sprite3.vel.y = 0;
      sprite3.changeAni('walkRight');
      break;
    case 'x':
      sprite1.vel.x = 0;
      sprite1.vel.y = 0;
      sprite1.changeAni('stand');
      sprite2.vel.x = 0;
      sprite2.vel.y = 0;
      sprite2.changeAni('stand');
      sprite3.vel.x = 0;
      sprite3.vel.y = 0;
      sprite3.changeAni('stand');
  }
}