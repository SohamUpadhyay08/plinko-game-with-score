const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world

var particle
var plinkos = [];
var particles = [particle];
var divisions = [];

var divisionHeight=300

var gameState = "PLAY"

var score = 0
var count = 0


function preload(){
  
}


function setup() {
  createCanvas(500,780);


  engine = Engine.create();
  world = engine.world;
 
  for(var k = 10;k <= width; k = k+80){
    divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
  }

  for(var j = 50; j <=width-30; j=j+50){
    plinkos.push(new Plinko(j,85));
  }

  for(var j = 50; j <=width-50; j=j+50){
    plinkos.push(new Plinko(j,175));
  }

  for(var j = 20; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,275));
  }

  for(var j = 20; j <=width; j=j+50){
    plinkos.push(new Plinko(j,375));
  }

  
  


  
  ground = new Ground(240,775,800,10)
  
}

function draw() {
  background("cyan");
  Engine.update(engine);

  fill("black")
  textSize(30)
  text("SCORE : "+score,10,30)

  fill("brown")
  textSize(28)
  text(" 500 ", 15, 500);
  text(" 500 ", 100, 500);
  text(" 100 ", 175, 500);
  text(" 100 ", 255, 500);
  text(" 200 ", 338, 500);
  text(" 200 ", 420, 500);

  ground.display();


  if ( gameState =="END") {
    //background("black");
    fill("black");
    textSize(40);
    text("Game Over", 150, 350);
  } 

  for(var k = 0;k < divisions.length; k++){
    divisions[k].display();
  }

  if(particle!=null)
{
  particle.display();

  if (particle.body.position.y>720)
        {
            if (particle.body.position.x < 140) 
            {
              score=score+500;      
              particle=null;
                if ( count>= 5) gameState ="END";

              }


              else if (particle.body.position.x < 350 && particle.body.position.x > 148 ) 
              {
                    score = score + 100;
                    particle=null;
                    if ( count>= 5) gameState ="END";

              }
              else if (particle.body.position.x < 460 && particle.body.position.x > 308 )
              {
                    score = score + 200;
                    particle=null;
                    if ( count>= 5)  gameState ="END";

              }      
              
        }
}




  for(var j = 0;j < plinkos.length; j++){
    plinkos[j].display();
  }

  
 

  textSize(40);
  fill("grey");
  text("PLINKO GAME ",100,450);
  //drawSprites();
}

function mousePressed() {
  if(gameState !== "END") {
      count++;
  particle = new Particle(mouseX, 50, 10, 10);
  }
}
