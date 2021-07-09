var fixedRect,movingRect;
var car,wall;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  car=createSprite(200,300,30,30);
  car.velocityX=3;
  wall=createSprite(500,300,50,150);

}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  car.shapeColor="orange";
  wall.shapeColor="pink";

  if(isTouch(car,wall)){
    car.velocityX=0;
  }
  if(isTouch(fixedRect,movingRect)){
    fixedRect.shapeColor="yellow";
    movingRect.shapeColor="blue";
  }
bounceoff(car,wall)
  drawSprites();
}
