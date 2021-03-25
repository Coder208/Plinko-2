const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles;
var plinkos = [];
var divisions =[];
var particle;

var divisionHeight=250;
var score =0;
var count = 0;
var gameState ="start";


function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(966,594);
  ground = new Ground(width/2,height,width,20);


  for(var k =0; k<=width; k=k+80){
    divisions.push(new Divisions(k,height-103.5,10,185));
    }

  for(var j =25; j<=width; j = j+70){
    plinkos.push( new Plinko(j,75,10));
     }

  for(var g =52; g<=width-10; g=g+65){
    plinkos.push( new Plinko(g,160,10));
    }
  
  for(var y =25;y<=width;y=y+60){
    plinkos.push( new Plinko(y,250,10));
    }
  
  for(var s =30;s<=width-10;s=s+50){
    plinkos.push( new Plinko(s,350,1000));
    }
    
}
 
function draw() {
  background("lightblue");

  textSize(18);
  text("Score : "+score,20,40);
  fill("white");
  
  textSize(20)
  text(" 500 ", 15, 550);
  text(" 500 ", 96, 550);
  text(" 500 ", 175, 550);
  text(" 500 ", 256.7, 550);
  text(" 100 ", 335, 550);
  text(" 100 ", 415, 550);
  text(" 100 ", 495, 550);
  text(" 200 ", 575, 550);
  text(" 200 ", 655, 550);
  text(" 200 ", 735, 550);
  text(" 500 ", 820, 550);
  text(" 500 ", 900, 550);

  Engine.update(engine);
  ground.display();
  
  if ( gameState =="end") {
    textSize(90);
    fill("black")
    text("GameOver", 150, 300);
        
  }

  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }

  for(var i  = 0;i<plinkos.length;i++){
  plinkos[i].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30,width/2+30),10,10));
  }

  for(var p = 0;p<particles.length;p++){
    particles[p].display();
  }
 
}



function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     particle=new Particle(mouseX, 10, 10, 10); 
  }   
}