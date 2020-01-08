var i = 0;

//Variable Setup
var BackgroundObjects = [];

function setup(){
    jQuery("body").css({"background-color" : "black", "text-align" : "center"});
    createCanvas(800, 600);
    jQuery("canvas").css({"border" : "1px solid white"});
    bo = new BackgroundObject();
    BackgroundObjects.push(bo);
}

function draw(){
    //Loop
    
    BackgroundObjects.forEach( obj => {
        obj.setXPosition(Math.round(Math.random() * 800));
        obj.setYPosition(Math.round(Math.random() * 600));
        obj.draw();
    });
    
    
}


function keyPressed(){
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


function keyReleased(){
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