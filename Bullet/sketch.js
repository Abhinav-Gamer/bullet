var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
  speed=random(223,231);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50,200,60,10);
  wall=createSprite(500,200,thickness,60);
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  if(hascollided (bulletwall)) {
    bullet.velocityX=0;
    var damage=0.5*Weight*Speed*Speed/(thickness*thickness*thickness)
    if(damage > 10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage < 10 && deformation>100) {
      wall.shapeColor=color(230,230,0);
    }
    if(damage<100) {
      wall.shapeColor=color(0,225,0);
    } 
  }
  drawSprites();
} 

function hascollided(lbullet,lwall) {
   bulletRightEdge=lbullet.x + lbullet.width;
   wallLeftEdge=lwall.x;
   if(bulletRightEdge>=wallLeftEdge) {
     return true 
   }
   return false;
}