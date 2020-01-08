var i = 0;

//Variable Setup
var BackgroundObjects = [];
jQuery("body").css({"background-color" : "black", "text-align" : "center"});
jQuery("canvas").css({"border" : "1px solid white", "background-color" : "black"});
bo = new BackgroundObject();
BackgroundObjects.push(bo);


setInterval(draw, 10);

function draw(){
    //Loop
    BackgroundObjects[0].draw();
}


function keyPressed(keyCode){
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
}


function keyReleased(keyCode){
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
}