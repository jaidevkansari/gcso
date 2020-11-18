var fixedRect, movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(1, 200, 50, 80);
  fixedRect.shapeColor = "purple";
  fixedRect.debug = true;
  
  movingRect = createSprite(800, 200, 20, 20);
  movingRect.shapeColor = "purple";
  movingRect.debug = true;
  movingRect.velocityX=-5;
 
  wall = createSprite(10, 50, 50, 80);
  wall.shapeColor = "purple";
  wall.debug = true;
  
  car = createSprite(800, 50, 20, 20);
  car.shapeColor = "purple";
  car.debug = true;
  car.velocityX=-5;

  wall1 = createSprite(10, 350, 50, 80);
  wall1.shapeColor = "purple";
  wall1.debug = true;
  
  car1 = createSprite(800, 350, 20, 20);
  car1.shapeColor = "purple";
  car1.debug = true;
  car1.velocityX=-5;


}

function draw() {
  background(0,0,0);  
  
 
  
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2){
     movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
     }
  else {
    movingRect.shapeColor = "purple";
    fixedRect.shapeColor = "purple";
  }

  if(car.x - wall.x < car.width/2 + wall.width/2 && wall.x - car.x < car.width/2 + wall.width/2){
    car.shapeColor = "green";
   wall.shapeColor = "green";
    }
 else {
   car.shapeColor = "pink";
   wall.shapeColor = "pink";
 }

 if(car1.x - wall1.x < car1.width/2 + wall1.width/2 && wall1.x - car1.x < car1.width/2 + wall1.width/2){
  car1.shapeColor = "white";
 wall1.shapeColor = "white";
  }
else {
 car1.shapeColor = "blue";
 wall1.shapeColor = "blue";
} 

  drawSprites();
}
