const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;


function setup() {
  
  createCanvas(480,800);
  
 // createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,height-10,480,20);

  for(var k = 0; k <= width; k = k + 80){
    divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight));

    for(var j = 10; j <= width; j = j + 50){
      plinkos.push(new Plinko(j,75,10));
    }
    for(var b = 40; b <= width - 10; b = b + 50){
      plinkos.push(new Plinko(b,175,10));
    }
    for(var i = 10; i <= width - 20; i = i + 50){
      plinkos.push(new Plinko(i,275,10));
    }
    for(var m = 40; m <= width - 30; m = m + 50){
      plinkos.push(new Plinko(m,375,10));
    }
    if(frameCount%60 === 0){
      particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
    }
    
  }

  Engine.run(engine);
}

function draw() {
  background("black"); 
  Engine.update(engine); 
  ground.display();
  for(var a = 0; a < plinkos.length; a++){
    plinkos[a].display();
  }
  for(var l = 0; l < particles.length; l++){
    particles[l].display();
  }
  for(var v = 0; v < divisions.length; v++){
    divisions[v].display();
  }
 // console.log("hey");
  drawSprites();
}
