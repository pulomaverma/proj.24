
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	papper=new Papper(100,200,70) 
	dustbin1=new Dustbin(600,680)
	
	ground=new Ground(400,690,800,20) 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  papper.display();
 dustbin1.display();
 
 ground.display();
 
  drawSprites();
 
}
function keyPressed(){
	if (keyCode==UP_ARROW){
		Matter.Body.applyForce(papper.body,papper.body.position,{x:105,y:105})
	}
}






