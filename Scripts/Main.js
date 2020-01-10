

//Variable Setup
var BackgroundObjects = [];
jQuery("body").css({"background-color" : "black", "text-align" : "center"});
jQuery("canvas").css({"border" : "1px solid white", "background-color" : "black"});
jQuery(document).keydown(keyPressed);
jQuery(document).keyup(keyReleased);
player = new Player();
bo = new BackgroundObject();
bo.initByImage(50, 60, "Images/GrassTexture.png");
BackgroundObjects.push(bo);



setInterval(draw, 100);

function draw(){
    //Clear Screen
    ClearScreen();

    //Calculate Velocity
    player.calculateVelocity();
    //Draw all GroundObjects
    
    

    //Draw all BackgroundObjects
    for (var i = BackgroundObjects.length - 1; i >= 0; i--) {
        if(BackgroundObjects[i].xWorldPosition <= player.xWorldPosition){
            BackgroundObjects[i].xPosition = player.xWorldPosition - BackgroundObjects[i].xWorldPosition;
        }
        if(BackgroundObjects[i].xWorldPosition >= player.xWorldPosition){
            BackgroundObjects[i].xPosition = -player.xWorldPosition + BackgroundObjects[i].xWorldPosition;
        }
        if(BackgroundObjects[i].yWorldPosition <= player.yWorldPosition){
            BackgroundObjects[i].yPosition = player.yWorldPosition - BackgroundObjects[i].yWorldPosition;
        }
        if(BackgroundObjects[i].yWorldPosition >= player.yWorldPosition){
            BackgroundObjects[i].yPosition = -player.yWorldPosition + BackgroundObjects[i].yWorldPosition;
        }
        BackgroundObjects[i].draw();
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
