
function preload() { bg = loadImage("images/garden.png");
 tom1= loadAnimation("images/cat1.png"); 
 tom2=loadAnimation("images/cat2.png","images/cat3.png");
 tom3= loadAnimation("images/cat4.png");
 jerry1=loadAnimation("images/mouse1.png");
 jerry2= loadAnimation("images/mouse2.png","images/mouse3.png");
 jerry3=loadAnimation("images/mouse4.png"); }

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    tom=createSprite(870,600)
    tom.addAnimation("tom1",tom1)
    tom.scale=0.2

    jerry=createSprite(200,600)
    jerry.addAnimation("jerry1",jerry1)
    jerry.scale=0.2
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2) { tom.velocityX=0;
         tom.addAnimation("tomLastImage", tom3);
          tom.x =300; tom.scale=0.2; tom.changeAnimation("tomLastImage");
           jerry.addAnimation("jerryLastImage", jerry3);
            jerry.scale=0.15; jerry.changeAnimation("jerryLastImage"); }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
   tom.velocityX =-5 
   tom.addAnimation("tom2",tom2)
   tom.changeAnimation("tom3",tom3)

   jerry.addAnimation("jerry2",jerry2)
   jerry.frameDelay=25;
   jerry.changeAnimation("jerry3",jerry3)
}

}
