
var trex ,trex_running;
var ground
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite (50,150,50,50)
trex.addAnimation ("trex_running",trex_running)
trex.scale=0.7
ground=createSprite(300,190,600,20)

}
function draw(){
  background("white")
  trex.collide(ground)
  if (keyDown ("space")) {
  trex.velocityY=-10
  }
  trex.velocityY+=0.5
  ground.velocityX=-5
  drawSprites()

}
