var canvas;
var music;
var rect1, rect2, rect3, rect4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,600);

    //create 4 different surfaces
    rect1 = createSprite(70,550,140,5);
    rect1.shapeColor = "yellow";

    rect2 = createSprite(220,550,140,5);
    rect2.shapeColor = "blue";

    rect3 = createSprite(380,550,140,5);
    rect3.shapeColor = "brown";

    rect4 = createSprite(530,550,140,5);
    rect4.shapeColor = "orange";


    //create box sprite and give velocity
    ball = createSprite(random(7,7));
    ball.shapeColor = "white";
    ball.velocityY = 0;
    ball.velocityX = 0;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();

    if (keyDown("space")) {
        ball.velocityX = 5;
        ball.velocityY = 5;
      }
    
    if(ball.isTouching(rect1) || ball.isTouching(rect2) || ball.isTouching(rect3) || ball.isTouching(rect4)){
        ball.bounceOff(rect1);
        ball.bounceOff(rect2);
        ball.bounceOff(rect3);
        ball.bounceOff(rect4);
    }
    drawSprites();
    }


                
    //add condition to check if box touching surface and make it box

    

