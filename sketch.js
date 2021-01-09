
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	wall1 = new Dustbin(700,310,70,20);
	wall2 = new Dustbin(1000,310,70,20);
	wall3 = new Dustbin(850,335,20,280)
	paperObject = new paper(200,320,40);
	ground = new Ground(600,350,1200,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

   ground.display();
   wall1.display();
   wall2.display();
   wall3.display();
   paperObject.display();
  

  
  drawSprites();
 
}



function keyPressed()  {
if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paperObject.body , paperObject.body.position,{x:60 , y:-60});
}



}

// =========================================================================================================
//                           THANK     YOU     MA'AM      :)
//==========================================================================================================
