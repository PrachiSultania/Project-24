
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var hammer, stone, plane;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    Hammer = new Hammer(100, 100)
    Plane = new Plane(width/2 ,height ,width,20);
    Stone = new Stone(700,250,40,40);
   // Rubber = Bodies.circle(width/2, 100, 20, {restitution:1})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  //ellipseMode(RADIUS)
  //ellipse(Rubber.position.x, Rubber.position.y, 20)
  background("#66c2ff");
  Engine.update(engine);
  Hammer.display();
  Plane.display();
  Stone.display();
  //Rubber.display();
  drawSprites();
 
}

    
    
    

