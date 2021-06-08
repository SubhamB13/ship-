var ship,ship_moving,edges;
var sea;
var seaImage;

function preload(){
ship_moving = loadAniation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);

  sea = createSprite(200,200,20,20);
  sea.addImage(seaImage);

}

function draw() {
 background("blue");

 

}