var HEALTH_BAR_8
var HEALTH_BAR_7
var HEALTH_BAR_6
var HEALTH_BAR_5
var HEALTH_BAR_4
var HEALTH_BAR_3
var HEALTH_BAR_2
var HEALTH_BAR_1

var PlayerHealth = function()
{
	this.sprite = new Sprite("HealthBar.png");
	this.sprite.buildAnimation(1, 8, 85, 8, 1, [1]);	// HEALTH_BAR_8
	this.sprite.buildAnimation(1, 8, 85, 8, 1, [2]);	// HEALTH_BAR_7
	this.sprite.buildAnimation(1, 8, 85, 8, 1, [3]);	// HEALTH_BAR_6
	this.sprite.buildAnimation(1, 8, 85, 8, 1, [4]);	// HEALTH_BAR_5
	this.sprite.buildAnimation(1, 8, 85, 8, 1, [5]);	// HEALTH_BAR_4
	this.sprite.buildAnimation(1, 8, 85, 8, 1, [6]);	// HEALTH_BAR_3
	this.sprite.buildAnimation(1, 8, 85, 8, 1, [7]);	// HEALTH_BAR_2
	this.sprite.buildAnimation(1, 8, 85, 8, 1, [8]);	// HEALTH_BAR_1
	
	this.position = new Vector2();
	this.position.set( 9*TILE, 0*TILE );
};
PlayerHealth.prototype.update = function(deltaTime)
{
	this.sprite.update(deltaTime)
	
	if(playerHealth == 8)
	{
		this.sprite.setAnimation(HEALTH_BAR_8);
	}
	if(playerHealth == 7)
	{
		this.sprite.setAnimation(HEALTH_BAR_7);
	}
	if(playerHealth == 6)
	{
		this.sprite.setAnimation(HEALTH_BAR_6);
	}
	if(playerHealth == 5)
	{
		this.sprite.setAnimation(HEALTH_BAR_5);
	}
	if(playerHealth == 4)
	{
		this.sprite.setAnimation(HEALTH_BAR_4);
	}
	if(playerHealth == 3)
	{
		this.sprite.setAnimation(HEALTH_BAR_3);
	}
	if(playerHealth == 2)
	{
		this.sprite.setAnimation(HEALTH_BAR_2);
	}
	if(playerHealth == 1)
	{
		this.sprite.setAnimation(HEALTH_BAR_1);
	}
	if(keyboard.isKeyDown(keyboard.KEY_A) == true)
	{
		playerHealth -= 1;
	}
}
PlayerHealth.prototype.draw = function()
{
	this.sprite.draw(context, this.position.x, this.position.y);
}