var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var cnt;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 680);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;
    var star_options ={
        restitution: 1.0, 
        isStatic: true
	};
	cnt =1;
	starBody = Bodies.circle(650 , 30 , 5 , star_options);
	World.add(world, starBody);
	
	Engine.run(engine);
   
}


function draw() {
  background(bgImg);
  Engine.update(engine);
  ellipseMode(RADIUS);
  ellipse(starBody.position.x, starBody.position.y, 20, 20);
  star.x = starBody.position.x;
  star.y = starBody.position.y;
 
  if(keyDown("left_arrow")){
	fairy.x = fairy.x - 3;
  }
  
  if(keyDown("right_arrow")){
	fairy.x = fairy.x + 3;
	  }
  if(keyDown("down_arrow")){
	     body.setStatic(starBody, false);
	
  }
  //console.log(star.y);
   if(starBody.position.y > 470 && (fairy.x > 510 && fairy.x <545) )
  {
	body.setStatic(starBody, true);
	if(cnt ===1){
	fairyVoice.play();
	cnt = cnt+1;
	}
  }
   
  drawSprites();

}

function keyPressed() {
	//write code here
}
