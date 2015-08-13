var Bullets = [];
var BULLET_SPEED = 3;

var Bullet = function() {
	this.image = document.createElement("img");
	this.x = Player.x;
	this.y = Player.y;
	this.width = 5;
	this.height = 5;
	
	this.image.src = "bullet.png";
}

Bullet.prototype.playerShoot = function()
{	
	//Start with the Bullets velocity straight up
	var velX = 0;
	var velY = 1;
	
	//Rotates the vector to the ships current rotation
	var s = Math.sin(player.rotation);
	var c = Math.cos(player.rotation);
	
	var xVel = (velX * c) - (velY * s);
	var yVel = (velX * s) + (velY * c);
	
	this.velocityX = xVel * BULLET_SPEED;
	this.velocityY = yVel * BULLET_SPEED;
	
	Bullets.push(this);
}

Bullet.prototype.update = function()
{
		// Update all the Bullets
	for(var i=0; i<Bullets.length; i++)
	{
		Bullets[i].x += Bullets[i].velocityX;
		Bullets[i].y += Bullets[i].velocityY;
	}
	
	for(var i=0; i<Bullets.length; i++)
	{
		// Check if the bullet has gone out of the screen boundaries
		if(Bullets[i].x < -Bullets[i].width || Bullets[i].x > SCREEN_WIDTH || Bullets[i].y < -Bullets[i].height || Bullets[i].y > SCREEN_HEIGHT)
		{
			Bullets.splice(i, 1);
			break;
		}
	}
	
	// draw all the Bullets
	for(var i=0; i<Bullets.length; i++)
	{
		context.drawImage(Bullets[i].image, Bullets[i].x - Bullets[i].width/2, Bullets[i].y - Bullets[i].height/2);
	}
}