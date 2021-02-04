
var gameState = 0;
var PLAY = 0
var END = 1;
var score;


var cyan, cyanImage;
var purple, purpleImage, purpleGroup;
var blue, blueImage, blueGroup;
var white, whiteImage, whiteGroup;
var yellow, yellowImage, yellowGroup;
var green, greenImage, greeGroup;


function preload(){
  cyanImage =loadImage("Cyan.png");
  purpleImage = loadImage("Purple.png");
  blueImage = loadImage("blue.png");
  whiteImage = loadImage("white.png");
  yellowImage = loadImage("yellow.png");
  greenImage = loadImage("green.png");
  
}


function setup() {
  createCanvas(600, 550);
  
  
  
  cyan = createSprite(300,300,10,10);
  cyan.addImage(cyanImage);
  cyan.scale = 0.1;
  cyan.tint = "cyan";


  
  
  
  purpleGroup = createGroup();
  blueGroup = createGroup();
  whiteGroup = createGroup();
  yellowGroup = createGroup();
  greenGroup = createGroup();
  
  score = 0;
}

function draw() {
  background(20);
  //displaying score
  fill("cyan");
  text("Score: "+ score, 500,50);
  
if(gameState === PLAY){
      score = score + Math.round(getFrameRate()/60);

   //Controls 
  if(keyDown("right_arrow")){
    cyan.x = cyan.x + 5;
  }
  if(keyDown("left_arrow")){
    cyan.x = cyan.x - 5;
  }
  if(keyDown("up_arrow")){
    cyan.y = cyan.y - 5;
  }
  if(keyDown("down_arrow")){
    cyan.y = cyan.y + 5;
  }
  //collide
  purpleGroup.collide(blueGroup);
  purpleGroup.collide(whiteGroup);
  purpleGroup.collide(yellowGroup);
  purpleGroup.collide(greenGroup);
  blueGroup.collide(whiteGroup);
  blueGroup.collide(yellowGroup);
  //Spawn
  spawnPurple();
  spawnBlue();
  spawnWhite();
  spawnYellow();
  spawnGreen();
  if(purpleGroup.isTouching(cyan) || whiteGroup.isTouching(cyan) || blueGroup.isTouching(cyan)  || yellowGroup.isTouching(cyan) || greenGroup.isTouching(cyan)){
   gameState = END; 
  }
}  
  drawSprites();
  if(gameState === END){

fill("cyan");
textSize(20);
text("𝙂𝘼𝙈𝙀𝙊𝙑𝙀𝙍 𝘼𝙉𝘿 𝙔𝙊𝙐 𝙇𝙊𝙎𝙏", 225,300);
purpleGroup.destroyEach();
blueGroup.destroyEach();
whiteGroup.destroyEach();
yellowGroup.destroyEach();
greenGroup.destroyEach();    
}
}



function spawnPurple(){
 if(frameCount%60 === 0){ 
  purple = createSprite(620,Math.round(random(0,600)),10,10);
  purple.addImage(purpleImage);
  purple.scale = 0.21555;
  purple.velocityX = Math.round(random(-2,-10)); 
  purple.lifetime = 500; 
  purpleGroup.add(purple); 
 }
}

function spawnBlue(){
 if(frameCount%60 === 0){ 
  blue = createSprite(620,Math.round(random(0,600)),10,10);
  blue.addImage(blueImage);
  blue.scale = 0.21555;
  blue.velocityX = Math.round(random(-2,-10)); ; 
  blue.lifetime = 500;
  blueGroup.add(blue); 
 } 
  
}

function spawnWhite(){
 if(frameCount%60 === 0){ 
  white = createSprite(620,Math.round(random(0,600)),10,10);
  white.addImage(whiteImage);
  white.scale = 0.21;
  white.velocityX = Math.round(random(-2,-10)); 
  white.lifetime = 500;
  whiteGroup.add(white); 
 }
  
}

function spawnYellow(){
 if(frameCount%60 === 0){ 
  yellow = createSprite(620,Math.round(random(0,600)),10,10);
  yellow.addImage(yellowImage);
  yellow.scale = 0.21;
  yellow.velocityX = Math.round(random(-2,-10)); 
  yellow.lifetime = 500; 
  yellowGroup.add(yellow); 
 } 
  
}

function spawnGreen(){
 if(frameCount%60 === 0){ 
  green = createSprite(620,Math.round(random(0,600)),10,10);
  green.addImage(greenImage);
  green.scale = 0.215;
  green.velocityX = Math.round(random(-2,-10)); 
  green.lifetime = 500; 
  greenGroup.add(green); 
 }
  
}






