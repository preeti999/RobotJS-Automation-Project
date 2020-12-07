var robot = require("robotjs")
var id = setInterval(moveMouse,1000);

/*
"show x and y axis of the screen"

var screen = robot.getScreenSize();
console.log(screen);

*/

//Print mouse location in a second.
function moveMouse(){
    var mouse = robot.getMousePos();
    console.log(mouse);

    if(mouse.x==0 && mouse.y==0 ){
        clearInterval(id);
    }

}
