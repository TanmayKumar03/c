var arrowimg,strikerimg,striker,boardimg,red,yellow;
var queen,token1,token2,token3,token4;


function preload(){
boardimg = loadImage("board.png");
arrowimg = loadAnimation("arrow1.png","arrow2.png","arrow3.png");

red = loadImage("red.png");
strikerimg = loadImage("striker.png");
yellow = loadImage("yellow.png");

}
function setup(){
createCanvas(550,550);

queen = createSprite(275,275)
queen.addImage("Queen",red);
queen.scale = 0.1;

token1 = createSprite(250,275)
token1.addImage("token",yellow);
token1.scale = 0.1;

token2 = createSprite(300,275)
token2.addImage("token1",yellow);
token2.scale = 0.1;

token3 = createSprite(275,303)
token3.addImage("token2",yellow);
token3.scale = 0.1

token4 = createSprite(275,250)
token4.addImage("token3",yellow);
token4.scale = 0.1

striker = createSprite(280,430);
striker.addImage("striker",strikerimg);
striker.scale = 0.15;



}
function draw(){
background(boardimg);
fill("black")
text(mouseX +"," +mouseY,mouseX,mouseY);





drawSprites();
}
