const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var score=0;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

   // box1 = new Box(700,320,70,70);
    //box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    pig2 = new Pig(860, 350);
    pig3 = new Pig(910, 350);
    pig4 = new Pig(960, 350);
    pig5 = new Pig(1010, 350);
    pig6 = new Pig(835, 310);
    pig7 = new Pig(885, 310);
    //log1 = new Log(810,260,300, PI/2);

    // box3 = new Box(700,240,70,70);
    // box4 = new Box(920,240,70,70);
    pig8 = new Pig(935, 310);
    pig9 = new Pig(985, 310);
    pig10 = new Pig(855, 260);
    pig11 = new Pig(905, 260);
    pig12 = new Pig(945, 260);
    pig13 = new Pig(875, 210);
    pig14 = new Pig(925, 210);
    pig15 = new Pig(900, 160);
    
    // log3 =  new Log(810,180,300, PI/2);

    // box5 = new Box(810,160,70,70);
    // log4 = new Log(760,120,150, PI/7);
    // log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);
    

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background("black");
    Engine.update(engine);
    //strokeWeight(4);
    text("SCORE:"+score,750,80);
    ground.display();
    pig1.display();
    pig2.display();
    pig3.display();
    pig4.display();
    pig5.display();
    pig6.display();
    pig7.display();
    pig8.display();
    pig9.display();
    pig10.display();
    pig11.display();
    pig12.display();
    pig13.display();
    pig14.display();
    pig15.display();
    pig1.score();
    pig2.score();
    pig3.score();
    pig4.score();
    pig5.score();
    pig6.score();
    pig7.score();
    pig8.score();
    pig9.score();
    pig10.score();
    pig11.score();
    pig12.score();
    pig13.score();
    pig14.score();
    pig15.score();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}


function keyPressed (){
if(keyCode === 32) {
slingshot.attach(bird.body);

}
}
