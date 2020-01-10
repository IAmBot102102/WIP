class BackgroundObject {
    
    constructor(){
        this.image = "rock.png";
        this.xPosition = 0;
        this.yPosition = 0;
        this.width = null;
        this.height = null;
        this.Forces = [];
        this.yWorldPosition = 0;
        this.xWorldPosition = 0;
    }

    initByImage(x, y, image){
        this.xWorldPosition = x;
        this.yWorldPosition = y;
        this.image = image;
    }

    initByRect(x, y, width, height){
        this.xPosition = x;
        this.yPosition = y;
        this.width = width;
        this.height = height;
    }
    setXPosition(value){
        this.xPosition = value;
    }
    setYPosition(value){
        this.yPosition = value;
    }
    getXPosition(){
        return this.xPosition;
    }
    getYPosition(){
        return this.yPosition;
    }
    drawFromCenter() {
        jQuery("canvas").drawImage({
            source : this.image,
            x : this.xPosition,
            y : this.yPosition
        });
    }
    draw() {
        jQuery("canvas").drawImage({
            source : this.image,
            x : this.xPosition,
            y : this.yPosition,
            fromCenter : false
        });
    }

}