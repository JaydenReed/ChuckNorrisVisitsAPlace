var Vector2 = function() {
	this.x;
	this.y;
}

Vector2.prototype.set = function(x,y)
{
	this.x = x;
	this.y = y;
}

Vector2.prototype.normalize = function()
{
	var length = Math.sqrt(this.x*this.x + this.y*this.y);
	
	var normalX = this.x / length;
	var normalY = this.y / length;
}

Vector2.prototype.add = function(v2)
{
	this.x = this.x + v2;
	this.y = this.y + v2;
}

Vector2.prototype.subtract = function(v2)
{
	this.x = this.x - v2;
	this.y = this.y - v2;
}

Vector2.prototype.multiplyScalar = function(num)
{
	this.x = num * this.x;
	this.y = num * this.y;
}