var thickness,wall;
var bullet,speed,weight;
var damage



function setup() {
  createCanvas(1600,400)

speed=random(55,90)
weight=random(400,1500)
thickness=random(22,83)

bullet=createSprite(50,200,50,10)
wall=createSprite(1200,200,thickness,height/2)

bullet.velocityX=speed

bullet.shapeColor=("yellow")
wall.shapeColor=color(80,80,80)

}

function draw() {
  background(255,255,255);  
  
  if(hascollided(bullet,wall))
{
bullet.velocityX=0
damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

if(damage>10)
{
  wall.shapeColor=color(255,0,0)
}

if(damage<10)
{
  wall.shapeColor=color(0,255,0)
}



}
  drawSprites();
  }

function hascollided(lbullet,lwall)
{

bulletRightEdge=bullet.x+bullet.width
wallLeftEdge=wall.x;

if(bulletRightEdge>=wallLeftEdge)
{
return true
}
return false
}



