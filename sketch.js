var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
object1=createSprite(400,200,50,80);
object1.shapeColor="green";
object2=createSprite(365,400,50,80);
object2.shapeColor="green";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(movingRect,object1)){

object1.shapeColor="red";
movingRect.shapeColor = "red";
}
 else{
  object1.shapeColor="green";
  movingRect.shapeColor = "green";
 } 

  drawSprites();
}
