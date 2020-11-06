
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof,ground;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var connector1, connector2, connector3, connector4, connector5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,20,800,20);
	ground = new Roof(400,680,800,10);
	bobObject1 = new Bob(300,630,50);
	bobObject2 = new Bob(350,630,50);
	bobObject3 = new Bob(400,630,50);
	bobObject4 = new Bob(450,630,50);
	bobObject5 = new Bob(500,630,50);
	connector1 = new Rope(roof,bobObject1,300,630);
	connector2 = new Rope(roof,bobObject2,350,630);
	connector3 = new Rope(roof,bobObject3,400,630);
	connector4 = new Rope(roof,bobObject4,450,630);
	connector5 = new Rope(roof,bobObject5,500,630);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  roof.display();
  bobObject5.display();
  bobObject4.display();
  bobObject3.display();
  bobObject2.display();
  bobObject1.display();
  connector1.display();
  connector2.display();
  connector3.display();
  connector4.display();
  connector5.display();
  drawSprites();
 
}



