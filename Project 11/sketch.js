var path, pathImg;
var boy, boy_running;

function preload(){
  
  //pre-load images
  pathImg = loadImage("path.png");
  
  boy_running = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);

  //path sprite
  path = createSprite(200,200);
  path.addImage("path",pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

//runner sprite
boy = createSprite (320,300);
boy.addAnimation("boy", boy_running);
boy.scale = 0.08;

//invis boundaries
invisibleLeft = createSprite (20,200,50,400);
invisibleLeft.visible = false;

invisibleRight = createSprite (380,200,15,400);
invisibleRight.visible = false;
}

function draw() {
  background(220);

  //repeat path image
  if (path.y > 400){
    path.y = -100;
  }

  //move runner
  boy.x=mouseX;

  //collide with invis walls
  boy.collide(invisibleRight);
  boy.collide(invisibleLeft);

  drawSprites();
}
