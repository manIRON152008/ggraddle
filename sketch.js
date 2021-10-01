
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
function preload(){
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	bob = new Bob(170,100,20);
	bob2 = new Bob(175,100,20);
	bob3 = new Bob(180,100,20);
	bob4 = new Bob(185,100,20);
	bob5 = new Bob(190,100,20);
	roof = new Roof(220,200,300,20)
    rope = new Rope(bob.body,roof.body)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
bob.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
roof.display();
rope.display();
 
}



