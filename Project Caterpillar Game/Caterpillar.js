var canvas=document.getElementById("game");
var c= canvas.getContext('2d');


class CPPart 
{
    constructor(x, y) 
    {
      this.x = x;
      this.y = y;
    }
  }

var x = canvas.width/2;
var y = canvas.height/2;
var x0=canvas.width-20;
var y0=canvas.height-20;
var dx=0;
var dy=0;
var dx1=0.5;
var dy1=0.5;
var x1=Math.floor(Math.random()*(canvas.width-10*2)+10);
var y1=Math.floor(Math.random()*(canvas.height-5*2)+5);

var score=0;

const cpParts = [];

const img = new Image();
img.src = "download.jpg";


function ifcolision()
{
    /*if(x>=x1 && x<=x1+8 && y>=y1 && y<=y1+4 )
    {
        x1=Math.floor(Math.random()*(canvas.width-10*2)+10);
        y1=Math.floor(Math.random()*(canvas.height-5*2)+5);

    }
    if(x+1>=x1 && x+1<=x1+8 && y+1>=y1 && y+1<=y1+4 )
    {
        x1=Math.floor(Math.random()*(canvas.width-10*2)+10);
        y1=Math.floor(Math.random()*(canvas.height-5*2)+5);

    }
    if(x+2>=x1 && x+2<=x1+8 && y+2>=y1 && y+2<=y1+4 )
    {
        x1=Math.floor(Math.random()*(canvas.width-10*2)+10);
        y1=Math.floor(Math.random()*(canvas.height-5*2)+5);

    }
    if(x+3>=x1 && x+3<=x1+8 && y+3>=y1 && y+3<=y1+4 )
    {
        x1=Math.floor(Math.random()*(canvas.width-10*2)+10);
        y1=Math.floor(Math.random()*(canvas.height-5*2)+5);

    }
    if(x+4>=x1 && x+4<=x1+8 && y+4>=y1 && y+4<=y1+4 )
    {
        x1=Math.floor(Math.random()*(canvas.width-10*2)+10);
        y1=Math.floor(Math.random()*(canvas.height-5*2)+5);

    }
    if(x+5>=x1 && x+5<=x1+8 && y+5>=y1 && y+5<=y1+4 )
    {
        x1=Math.floor(Math.random()*(canvas.width-10*2)+10);
        y1=Math.floor(Math.random()*(canvas.height-5*2)+5);

    } */
    if(x<x1+8 && x+10>x1 && y<y1+4 && y+5>y1)
    {
        x1=Math.floor(Math.random()*(canvas.width-10*2)+10);
        y1=Math.floor(Math.random()*(canvas.height-5*2)+5);
        score+=10;
    }
    if(x<x0+15 && x+10>x0 && y<y0+7.5 && y+5>y0)
    {
        
        window.location.href="Gameover.html";
        alert("GAME OVER");
    }
    
    


}

function drawSpider()
{
    c.fillStyle="grey";
    c.fillRect(x0,y0,15,7.5);
    c.drawImage(img, x0, y0,15,7.5);
}

function drawCaterpillar() 
{
    c.fillStyle = "green";
  for (let i = 0; i < cpParts.length; i++) 
  {
    let part = cpParts[i];
    c.fillRect(part.x, part.y, 10, 5);
    console.log(part.y);
    
  }

  cpParts.push(new CPPart(x, y)); //put an item at the end of the list next to the head
  while (cpParts.length > 2) 
  {
    cpParts.shift(); // remove the furthet item from the snake parts if have more than our tail size.
  }
    
    
    c.fillStyle="brown";
    c.fillRect(x,y,10,5);
}


function animate()
{
requestAnimationFrame(animate);

c.clearRect(0,0,canvas.width,canvas.height);

if(x+10>canvas.width || x<0)
    dx=-dx;
if(y+5>canvas.height || y<0)
    dy=-dy;

x+=dx;
y+=dy;

drawCaterpillar();

if(x0+15>canvas.width || x0<0)
    dx1=-dx1;
if(y0+7.5>canvas.height || y0<0)
    dy1=-dy1;

x0+=dx1;
y0+=dy1;

drawSpider();

c.fillStyle="greenyellow";
c.fillRect(x1,y1,8,4);

c.fillStyle="white";
c.font="7px Verdana";
c.fillText("Score "+score,canvas.width-50,10 );
ifcolision();

if(score==100)
{
    window.location.href = "Cocoon.html";
    alert("victory");
    
}

}

document.body.addEventListener("keydown", keyDown);

function keyDown(event) 
{
  //up
  if (event.keyCode == 38) 
  {
    dy = -1;
    dx = 0;
  }

  //down
  if (event.keyCode == 40) 
  {
    dy = 1;
    dx = 0;
  }

  //left
  if (event.keyCode == 37) 
  {
    dy = 0;
    dx = -2;
  }

  //right
  if (event.keyCode == 39) 
  {
    dy = 0;
    dx = 2;
  }
}
animate();

