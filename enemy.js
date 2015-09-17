var direction = 1; //Left = 0 and Right = 1

var ANIM_LEFT = 0;
var ANIM_RIGHT = 1;
var ANIM_MAXANIM = 2;

var Enemy = function(x, y)
{
	this.sprite = new Sprite("EnemyStand.png");
	this.sprite.buildAnimation(4, 1, 34, 43, 0.5, [0, 1]); //ANIM_LEFT
	this.sprite.buildAnimation(4, 1, 34, 43, 0.5, [2, 3]); //ANIM_RIGHT
	for(var i=0; i<ANIM_MAXANIM; i++)
	{
		this.sprite.setAnimationOffset(i, 0, -6);
	}  
	this.position = new Vector2();
	this.position.set(x, y);
	
	this.velocity = new Vector2();
	this.velocity.set(0,0);
	
	this.moveRight = true;
	this.pause = 0;
};
Enemy.prototype.update = function(deltaTime)
{
	this.sprite.update(deltaTime);
	
	if(this.pause > 0)
	{
		this.pause -= deltaTime;
	}
	else
	{
		var ddx = 0;
		
		var tx = pixelToTile(this.position.x);
		var ty = pixelToTile(this.position.y);
		var nx = (this.position.x)%TILE;
		var ny = (this.position.y)%TILE;
		var cell = cellAtTileCoord(LAYER_PLATFORMS, tx, ty);
		var cellright = cellAtTileCoord(LAYER_PLATFORMS, tx + 1, ty);
		var celldown = cellAtTileCoord(LAYER_PLATFORMS, tx, ty + 1);
		var celldiag = cellAtTileCoord(LAYER_PLATFORMS, tx + 1, ty + 1);
		
		if(this.moveRight)
		{
			if(celldiag && !cellright)
			{
				ddx = ddx + ENEMY_ACCEL;
				this.direction = 1;
				if(this.sprite.currentAnimation != ANIM_RIGHT)
					this.sprite.setAnimation(ANIM_RIGHT);
			}
			else
			{
				this.velocity.x = 0;
				this.moveRight = false;
				this.pause = 0.5;
			}
		}
		
		if(!this.moveRight)
		{
			if(celldown && !cell)
			{
				ddx = ddx - ENEMY_ACCEL;
				this.direction = 0;
				if(this.sprite.currentAnimation != ANIM_LEFT)
					this.sprite.setAnimation(ANIM_LEFT);
			}
			else
			{
				this.velocity.x = 0;
				this.moveRight = true;
				this.pause = 0.5;
			}
		}
		
		this.position.x = Math.floor(this.position.x + (deltaTime * this.velocity.x));
		this.velocity.x = bound(this.velocity.x + (deltaTime * ddx), -ENEMY_MAXDX, ENEMY_MAXDX);
	}
}
Enemy.prototype.draw = function()
{
	this.sprite.draw(context, this.position.x - worldOffsetX, this.position.y);
}