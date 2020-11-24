var bullet ,wall;
var bulletspeed,bulletweight;
var thickness;

function setup() {
  createCanvas(1600,400)
bulletspeed=random(223,321)
bulletweight=random(30,52)
bullet =createSprite(50,200,70,50)
thickness=random(22,83)
bullet .velocityX = speed;
wall=createSprite(1200,200,thickness,height/2);
bullet .shapeColour="white"
wall.shapeColor=rgb(80,80,80)

}

function draw() {
  background(255,255,255); 
 
if (hasCollided(bullet,wall)) {
  bullet.velocityX=0;
  var damage=0.5*bulletweight*bulletspeed*bulletspeed/(thickness*thickness*thickness);

  if (damage>10) {
    wall.shapeColor=rgb(255,0,0);
  }
if (damage<10) {
  wall.shapeColor=rgb(0,225,0);
}
}
  drawSprites();
}
