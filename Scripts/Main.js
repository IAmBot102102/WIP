

//Variable Setup
var BackgroundObjects = [];
jQuery("body").css({"background-color" : "black", "text-align" : "center"});
jQuery("canvas").css({"border" : "1px solid white", "background-color" : "black"});
jQuery(document).keydown(keyPressed);
jQuery(document).keyup(keyReleased);
player = new Player();
for( var i = 0; i < 500; i++){
    for(var e = 0; e < 500; e++){
        bo = new BackgroundObject();
        bo.initByImage(i * 64, e * 64, "Images/GrassTexture.png");
        bo.Scale = 4;
        BackgroundObjects.push(bo);
    }
}

player.xWorldPosition = 2000;
player.yWorldPosition = 1000;

setInterval(draw, 10);

function draw(){
    //Clear Screen
    ClearScreen();

    //Calculate Velocity
    player.calculateVelocity();
    //Draw all GroundObjects
    
    

    //Draw all BackgroundObjects
    for (var i = BackgroundObjects.length - 1; i >= 0; i--) {
        BackgroundObjects[i].xPosition = 400 - (player.xWorldPosition - BackgroundObjects[i].xWorldPosition);
        BackgroundObjects[i].yPosition = 300 - (player.yWorldPosition - BackgroundObjects[i].yWorldPosition);
        if(BackgroundObjects[i].xPosition >= -60 && BackgroundObjects[i].xPosition <= 860){
            if(BackgroundObjects[i].yPosition >= -60 && BackgroundObjects[i].yPosition <= 660){
                BackgroundObjects[i].draw();
            }
        }
    }
    
    player.drawFromCenter();
    
    
}


function keyPressed(event){
    // Variable is KeyCode
    // 87 is W
    // 65 is A
    // 68 is D
    // 83 is S
    // 81 is Q



    // Example If Statment
    /*
        if(keyCode == 87){
            console.log("Pressed W");
        }
    */
    if(event.originalEvent.code == "KeyW"){
        player.movingUp = true;
    }
    if(event.originalEvent.code == "KeyA"){
        player.movingLeft = true;
    }
    if(event.originalEvent.code == "KeyS"){
        player.movingDown = true;
    }
    if(event.originalEvent.code == "KeyD"){
        player.movingRight = true;
    }
    if(event.originalEvent.code == "ShiftLeft" || event.originalEvent.code == "ShiftRight"){
        player.sprinting = true;
    }
    

}


function keyReleased(event){
    // Variable is KeyCode
    // 87 is W
    // 65 is A
    // 68 is D
    // 83 is S
    // 81 is Q



    // Example If Statment
    /*
        if(keyCode == 87){
            console.log("Released W");
        }
    */
    if(event.originalEvent.code == "KeyW"){
        player.movingUp = false;
    }
    if(event.originalEvent.code == "KeyA"){
        player.movingLeft = false;
    }
    if(event.originalEvent.code == "KeyS"){
        player.movingDown = false;
    }
    if(event.originalEvent.code == "KeyD"){
        player.movingRight = false;
    }
    if(event.originalEvent.code == "ShiftLeft" || event.originalEvent.code == "ShiftRight"){
        player.sprinting = false;
    }
    
}
function ClearScreen(){
    jQuery('canvas').drawRect({
        fillStyle: 'black',
        x: 0, y: 0,
        width: 800,
        height: 600,
        fromCenter : false
    });
}
