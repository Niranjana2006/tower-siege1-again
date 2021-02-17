
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var holder,ball,ground;
var stand1;
var ball;
var slingShot;
var polygon_img;

function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup() {
  engine  = Engine.create();
  world = engine.world;

  createCanvas(900,400);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
 
 
  
  block1 = new Block(280,275,30,40);  
  block2 = new Block(310,275,30,40);
  block3 = new Block(340,275,30,40);
  block4 = new Block(370,275,30,40);
  block5 = new Block(400,275,30,40);
   block6 = new Block(430,275,30,40);
  block7 = new Block(460,275,30,40);
 block8 = new Block(490,275,30,40);
  
  block9  = new Block(310,235,30,40);
  block10 = new Block(340,235,30,40);
    block11 = new Block(370,235,30,40);
 block12 = new Block(400,235,30,40);
   block13 = new Block(430,235,30,40);
  block14 = new Block(460,235,30,40);
  
  block15 = new Block(340,195,30,40);
  block16 = new Block(370,195,30,40);
  block17 = new Block(400,195,30,40);
  block18 = new Block(430,195,30,40);
  
  block19 = new Block(370,155,30,40);
block20 = new Block(400,155,30,40);
  
  block21 = new Block(385,115,30,40);

 
  ball = Bodies.circle(200,200,20);
  World.add(world,ball);

  slingShot = new SlingShot(this.ball,{x:200,y:200});

}

function draw() {
  background(56,44,44);  
  Engine.update(engine);
  

  ground.display();
  stand1.display();
 
  strokeWeight(2);
  stroke(15);
  fill("blue");

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
 block7.display();
  block8.display();
  fill("green");

  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
 block14.display();
  fill("pink");  

  block15.display();
  block16.display();
  block17.display();
 block18.display();
  fill("orange");  

  block19.display();
 block20.display();
  fill("red");

  block21.display();
  fill("yellow");



  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}