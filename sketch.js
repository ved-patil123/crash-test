var car;
var wall;



function setup() {
  createCanvas(1600,400);
   wall = createSprite(1200, 200, 20, 2500);
 

   car = createSprite(200,200,20,20);
   
}

function draw() {
  background("blue");  
  
  car.x = World.mouseX;
  car.y = World.mouseY;

  
  if(isTouching(car,wall)){
    car.shapeColor = "cyan";
    wall.shapeColor = "cyan";
  }
  else {
    car.shapeColor = "purple";
    wall.shapeColor = "purple";
  }

  drawSprites();
}