class Player{
	constructor(){
		this.xPosition = 400;
		this.yPosition = 300;
		this.xWorldPosition = 0;
		this.yWorldPosition = 0;
		this.xVelocity = 0;
		this.yVelocity = 0;
		this.acceleration = 10;
		this.decceleractionGround = 2;
		this.decceleractionWater = 4;
		this.image = "rock.png";
		this.scale = 5;
		this.maxVelocity = 20;
		this.movingUp = false;
		this.movingDown = false;
		this.movingLeft = false;
		this.movingRight = false;
		this.directions = {
			DOWN : "DOWN",
			UP : "UP",
			RIGHT : "RIGHT",
			LEFT : "LEFT"
		};
		this.direction = this.directions.DOWN;
		this.health = 100;
		this.stamina = 100;


	}
	draw(){
		jQuery('canvas').drawImage({
			source : this.image,
			x : this.xPosition,
			y : this.yPosition,
			scale : this.scale,
			fromCenter : false
		});
	}
	drawFromCenter(){
		jQuery('canvas').drawImage({
			source : this.image,
			x : this.xPosition,
			y : this.yPosition,
			scale : this.scale,
			fromCenter : true
		});
	}
	calculateVelocity(){
		if(this.movingUp == true){
        	this.yVelocity =  -this.maxVelocity;
    	} else {
    		if(this.movingDown == true){
        		this.yVelocity = this.maxVelocity;
    		} else {
    			this.yVelocity = 0;
    		}
    	}
    	
    	if(this.movingRight == true){
        	this.xVelocity = -player.maxVelocity;
    	} else {
    		if(this.movingLeft == true){
    			this.xVelocity = player.maxVelocity;
    		} else {
    			this.xVelocity = 0;
    		}
    	}

    	this.xWorldPosition += this.xVelocity;
		this.yWorldPosition += this.yVelocity;
	}
}