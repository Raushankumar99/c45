var score =0;
var backgroundImg , bottle1,bottle2,bottle3,bottle4,bottle5,bottle6,bullet,M1887;

var backgroundImg , bottle1Img , bottle2Img,bottle3Img,bottle4Img,bottle5Img,bottle6Img,bulletImg,
M1887Img;

var bottle1Group, bottle2Group,bottle3Group,bottle4Group,bottle5Group,bottle6Group,bulletGroup,
M1887Group;

var life =3;
var score =0;
var gameState = 1

function preload(){
   M1887Img = loadImage("M1887.png")
   bottle1Img = loadImage("bottle 1.png")
   bottle2Img = loadImage("bottle 2.png")
   bottle3Img = loadImage("bottle 3.png")
   bottle4Img = loadImage("bottle 4.png")
   bottle5Img = loadImage("bottle 5.png")
   bottle6Img = loadImage("bottle 8.png")
   backgroundImg = loadImag('background.jpg')
   bulletImg = loadImage("bullet.png")
}