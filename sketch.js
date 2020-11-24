
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;

function preload(){
  
  
  monkey_running =       loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
  monkey=createSprite(80,315,20,20)
monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  ground=createSprite(400,350,900,10);  
  ground.velocityX=-4
  ground.x=ground.width/2;
  console.log(ground.x)
  FoodGroup = new Group();
  obstacleGroup= new Group();
 
  
  
 
}


function draw() {
  background(255);
   ground.velocityX=-4
  ground.x=ground.width/2;
  console.log(ground.x)
  if(keyDown("space")){
    monkey.velocityY=-12
  }
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX=0;
    monkey.velocityY=0;
    obstacleGroup.setVelocityXEach(0);
  }
  monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
spawnBananas();
  spawnObstacles();
  
   stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
  
   stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50);
  
  drawSprites();
}
function spawnBananas(){
if (frameCount % 80===0){
   banana=createSprite(140,200,20,20)
  banana.addImage(bananaImage);
  banana.scale=-0.1
  banana.y=Math.round(random(120,200))
  banana.velocityX=-2
   banana.lifetime=300
  FoodGroup.add(banana)
}
}
  function spawnObstacles(){
     if(frameCount % 300 === 0) {
    var obstacle = createSprite(300,330,20,20);
       obstacle.addImage(obstacleImage);
       obstacle.scale=0.1;
        obstacle.x = Math.round(random(120,300));
        obstacle.velocityX = -3;
       obstacle.lifetime=300
       obstacleGroup.add(obstacle)
      
     }
  }


  



  
 
