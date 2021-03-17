var PLAY = 1;
var END = 0;


var gameState = PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score=0
var ground
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
   createCanvas(600,200 );
  monkey = createSprite(150,50,20,50);
  
   monkey.addAnimation("running", monkey_running);
monkey.velocityY=-4
  monkey.scale = 0.1;
  
  ground = createSprite(550,170,1200,10);
  ground.velocityX=-6
  ground.x = ground.width /2;
 
invisibleGround = createSprite(550,170,111000,10);
     invisibleGround.x = invisibleGround.width /2;
  invisibleGround.velocityX=-6
  invisibleGround.visible = false;

obstacleGroup=new Group()
  bananaGroup=new Group()
}


function draw() {
background("white")
   
    score = score + Math.round(getFrameRate()/60);
    ground.velocityX = -(6 + 3*score/100);
  
 
    
    
    
    if (obstacleGroup.isTouching(monkey)){
      obstacleGroup.destroyEach()
     monkey.scale=0.08
      
         }
         if (bananaGroup.isTouching(monkey)){
bananaGroup.destroyEach()
score=score+2



         }
    
  switch(score){
     case 10:monkey.scale=0.12
       break;
        case 20:monkey.scale=0.14
       break;
        case 30:monkey.scale=0.16
       break;
        case 40:monkey.scale=0.18
       break;
   }
    
   if(keyDown("space") ) {
    monkey.velocityY = -3;
  }
    
  
    monkey.velocityY = monkey.velocityY + 0.8
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    monkey.collide(invisibleGround);
     
spawnBanana()
spawnObstace() 
    
  

   drawSprites();
   text("score"+score,450,70)
}

function spawnObstace() {
  if(frameCount % 60 === 0) {
    var  obstacle = createSprite(170,160,10,40);
    obstacle.addImage( obstaceImage)
  obstacle.x=Math.round(random(600,700))
    obstacle.scale = 0.1;
     obstacle.velocityX=-3
    obstacle.lifetime = 300;
obstacleGroup.add(obstacle)
  }
  }
  function spawnBanana() {
    if (frameCount % 60 === 0) {
      var banana = createSprite(600,120,40,10);
      banana.y = Math.round(random(10,120));
      banana.addImage(bananaImage);
      banana.scale = 0.1;
      banana.velocityX=-3
       banana.lifetime = 200;
    banana.depth = monkey.depth;
      monkey.depth = monkey.depth + 1;
      bananaGroup.add(banana)
       }
    
  }