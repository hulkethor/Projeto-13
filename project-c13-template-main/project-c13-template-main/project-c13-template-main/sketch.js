var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg
var leaf1,leaf2,orangeImg,redImg;
var num
var edges

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);

  edges = createEdgeSprites();
  rabbit.x = World.mouseX;
  rabbit.collide(edges);

  if (frameCount % 80 === 0 ){
    num=Math.round(random(1,3));
    if (num === 1 ){
      createApple();
    }
    if (num === 2 ){
      createOrange();
    }
    if (num === 3 ){
      createRed();
    }
  }



  drawSprites();
}  

function createApple(){
  apple = createSprite(Math.round(random (50,350)),40,10,10);
  apple.addImage(appleImg);
  apple.velocityY=3;
  apple.lifetime = 150;
  apple.scale = 0.07;
}
function createOrange(){
  leaf1 = createSprite(Math.round(random (50,350)),40,10,10);
  leaf1.addImage(orangeImg);
  leaf1.velocityY=3;
  leaf1.lifetime = 150;
  leaf1.scale = 0.07;
}
function createRed(){
  leaf2 = createSprite(Math.round(random (50,350)),40,10,10);
  leaf2.addImage(redImg);
  leaf2.velocityY=3;
  leaf2.lifetime = 150;
  leaf2.scale = 0.07;
}