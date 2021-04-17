var bgImg,catImg1,catImg2,mouseImg1,mouseImg2,mouseImg3,mouseImg4,catImg4;
var cat;
var mouse;

function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png");
    catImg1=loadAnimation("images/cat1.png");
    mouseImg1=loadAnimation("images/mouse1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    catImg4=loadAnimation("images/cat4.png");
   
mouseImg4=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(800,600)
    cat.addAnimation("catRunning",catImg1)
    cat.scale=0.25
    mouse=createSprite(100,600)
    mouse.addAnimation("mouseTeasing",mouseImg1)
    mouse.scale=0.25
    

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX=0
        cat.addAnimation("catSitting",catImg4)
        cat.changeAnimation("catSitting")
        mouse.addAnimation("mouseWatching",mouseImg4)
        mouse.changeAnimation("mouseWatching")
    }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
      cat.addAnimation("catRunning",catImg2)
      cat.changeAnimation("catRunning")
      cat.velocityX=-4
      mouse.addAnimation("mouseTeasing",mouseImg2)
      mouse.changeAnimation("mouseTeasing")
      mouse.frameDelay=25
      
  }


}
