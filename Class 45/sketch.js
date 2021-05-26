//var white;
//var blue;

//var whiteForward,whiteBackward;
//var blueForward,blueBackward;

var car1;

var car2;

var car1Img;
var car2Img;

var canvas;

var backgroungIMG;

var random1;
var random2;
var random3;
var random4;

var random1Img;
var random2Img;
var random3Img;
var random4Img;

var form;
var player;
var game; 

var database;

var playerCount;

var allPlayers;

var gameState = 0;

var players;
var allPlayers;

function preload (){
// whiteForward = loadAnimation("white/forward1.gif","white/forward2.gif"
// ,"white/forward3.gif","white/forward4.gif","white/forward5.gif","white/forward6.gif","white/forward7.gif",
// "white/forward8.gif","white/forward9.gif","white/forward10.gif")

     car1Img = loadImage("Img/orange.png")

     car2Img = loadImage("Img/blue.png")

     backgroungIMG = loadImage("Img/track(1).png")
     
     random1Img = loadImage("Img/black(2).png")

     random2Img = loadImage("Img/truck1.png")

     random3Img = loadImage("Img/truck2.png")

     random4Img = loadImage("Img/car3.png")


// whiteBackward = loadAnimation("white/back1.gif","white/back2.gif","white/back3.gif",
//     "white/back4.gif","white/back5.gif","white/back6.gif","white/back7.gif","white/back8.gif","white/back9.gif",
//     "white/back10.gif","white/back11.gif","white/back12.gif","white/back13.gif","white/back14.gif","white/back15.gif",
//     "white/back16.gif","white/back17.gif","white/back18.gif")
  
}

function setup (){
    canvas = createCanvas(displayWidth - 10 , displayHeight - 10 );

   //  car1 = scale(0.4)
     database = firebase.database();
     game = new Game();
     game.getState();
     game.start();

   //   white = createSprite(displayWidth - 500, displayHeight - 250)

   //   car1 = createSprite(displayWidth - (-1400), displayHeight - (-600))
   //   car1.addImage(car1Img)

   //   car2 = createSprite(displayWidth - 700, displayHeight - (-600))
   //  car2.addImage(car2Img)

   //  random2 = createSprite(displayWidth - 700, displayHeight - (-600))
   //   random2.addImage(random2Img)


   // car1 = scale(0.4)

}

function draw (){
   // background(backgroungIMG)
    car1 = scale(0.4)

 //  random2 = scale(0)
   if(playerCount === 2){
       game.update(1);
     }
      if(gameState === 1){
        clear();
        game.play();
     }
     if(gameState === 2){
        game.end();
     }

 // if(keyDown === UP_ARROW){
 //   car1.velocityY = 100
 // }

 //drawSprites()
}

