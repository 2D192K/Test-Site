var xSpeed = 7;
var ySpeed = 4;
var xpos = 0;
var ypos = 0;
var swidth = 50;
var sheight = 50;
function setup() 
{
	createCanvas(600,600);
	background(0);
	fill(0);
	stroke(128,128,128);
	frameRate(60);
}

function draw() 
{
	//background(0);
	rect(xpos,ypos,swidth,sheight);
	xpos+=xSpeed;
	ypos+=ySpeed;
	if ( xpos > width-swidth || xpos < 0)
	{
		xSpeed=-xSpeed;
	}
	if ( ypos > height-sheight || ypos < 0)
	{
		ySpeed=-ySpeed;
	}
}
