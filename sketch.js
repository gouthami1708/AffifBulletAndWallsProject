var bullet,speed;
var weight,wall;
var thickness;



function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  thickness=random(20,80);

  bullet = createSprite(50,200,50,10);
  wall= createSprite(1200,200,thickness,100);

  speed=random(40,90);
  weight=random(200,500);
    
  bullet.velocityX=speed;
 
}

function draw() {
  background("black");
  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
  bullet.velocityX=0;
  }
  var deformation=0.5*speed*weight*speed/22509;
  if(deformation > 180){
    bullet.shapeColor= "white";
  }
  if(deformation<180 && deformation>100){
    bullet.shapeColor= "white";
  }
  if(deformation < 100){
    bullet.shapeColor= "white";
  }
 if(hascollided(bullet,wall)){
   bullet.velocityX=0;
   var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
   if(damage>10){
    wall.shapeColor = "red";
  }
   if(damage<10){
    wall.shapeColor = "yellow";
  }
   
}
  drawSprites();
}


function hascollided(lbullet,lwall){

  bulletRightEdge= bullet.x + bullet.width;
  wallRightEdge=wall.width;

  if(bulletRightEdge>=wallRightEdge){

    return true;
  }
    return false;
}
    






