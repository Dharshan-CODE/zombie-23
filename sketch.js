var helicopterIMG, helicopter, package,packageIMG;
var packageBody, packageBody_options,ground;
var box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadAnimation("h1.png","h2.png","h3.png","h4.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	
	package=createSprite(width/2,200,10,10);
	package.addImage(packageIMG)
	package.scale=0.2;

    box1 = new Box(width/2-100,height-75,12,70);
    box2 = new Box(width/2+100,height-75,12,70);
	box3 = new Box(width/2,height-46,190,12);

	

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addAnimation("fly",helicopterIMG);
	helicopter.scale=0.6;
	helicopter.debug=false;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


	packageBody_options={
		restitution:0.25,
		isStatic:true
		
		}
	packageBody = Bodies.circle(width/2 , 200 , 5,packageBody_options );
	World.add(world, packageBody);
	
	
    var ground_options={
		isStatic:true
	}

	ground = Bodies.rectangle(width/2, 650, width, 10,ground_options);
 	World.add(world, ground);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine); 

 

  box1.display();
  box2.display();
  box3.display();

  package.x= packageBody.position.x;
  package.y= packageBody.position.y;
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   
	Matter.Body.setStatic(packageBody, isStatic=false)
	
    
  }
}



