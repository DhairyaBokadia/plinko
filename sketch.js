const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var divisions=[];
var plinkos=[];
var particles=[];

function setup() {
  createCanvas(440,840);

  engine = Engine.create();
  world = engine.world;

  ground=new Ground(200,836,600,10)

  
}

function draw() {
  Engine.update(engine);
  background("black");  
  

  var divisionHeight=300

  for (var k=0;k<=width; k=k+80) {
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
  }


  for (var k=0;k<divisions.length;k++) {
    divisions[k].display()
  }


  for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,75));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,175));
  }

   for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,275));
  }

   for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,375));
  }




    
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();

}



if(frameCount%60===0){
  particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
}

for (var j = 0; j < particles.length; j++) {

  particles[j].display();
}




ground.display()

}