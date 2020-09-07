var box1, box2 ;
function setup() {
  createCanvas(600,600);
  box1 = createSprite(50, 50, 50, 50);
  box2 = createSprite(550, 550 ,50 ,50);
  box1.shapeColor="orange";
  box2.shapeColor="blue";
  box1.velocityX=1;
  box1.velocityY=1;
  box2.velocityX=-1;
  box2.velocityY=-1;
}

function draw() {
  background(0);  
 // box1.x=mouseX;
 // box1.y=mouseY;
  if(isTouching(box1,box2)){
      box1.shapeColor="pink";
      box2.shapeColor="purple";
    }
    /*
    else {
      box1.shapeColor="orange";
      box2.shapeColor="blue";
    }
    */
   bounceOff (box1,box2);
  drawSprites();
}
 