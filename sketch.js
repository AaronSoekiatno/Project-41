const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var thunderImg1, thunderImg2, thunderImg3, thunderImg4;
var umb, thunder;
var rain = [];
var maxDrops = 100;
var drop;


function preload(){
    thunderImg1 = loadImage("js/1.png");
    thunderImg2 = loadImage("js/2.png");
    thunderImg3 = loadImage("js/3.png");
    thunderImg4 = loadImage("js/4.png");
}

function setup(){
   canvas = createCanvas(500,800);
    
    engine = Engine.create();
    world = engine.world;
    
    //drop = new Drops(random(0,400), random(0,400),50);
    umb = new Umb(250,600, 10,10);

    thunder = createSprite(random(50,400),random(50,150),10,10);
    thunder.scale = 0.3;
    var rand = Math.round(random(1,4));
    if(frameCount%12===0){
        console.log(rand);
    switch(rand){
        case 1: thunder.addImage(thunderImg1);
            break;
        case 2: thunder.addImage(thunderImg2);
            break;
        case 3: thunder.addImage(thunderImg3);
            break;
        case 4: thunder.addImage(thunderImg4);
            break;
        default: break;
        
    }
  }

  for(i=0; i<maxDrops; i++){
    rain.push(new Drops(Math.round(random(0,400)), Math.round(random(0,400))));
}
   
    
   Engine.run(engine);
}

function draw(){
    background(0);
    
    console.log(rain);
    if(frameCount%1===0){
        rain[0].display();
        rain[0].reposDrops();
    }
    
    
    umb.display();
    drawSprites();
}   

 