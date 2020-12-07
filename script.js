var robort = require("robotjs");
var childProcess = require('child_process'); 
setTimeout(openNotepad,2000);


function openNotepad(){
    robort.moveMouseSmooth(108, 747);
    robort.mouseClick();
    robort.typeString("Notepad");
    robort.keyTap("enter");
    setTimeout(writeMsg, 2000);
}
function writeMsg(){
    robort.moveMouseSmooth(511,176);
    robort.typeString("WELCOME");
    setTimeout(startChrome,2000);
}


function startChrome(){
    robort.moveMouseSmooth(108, 747);
    robort.mouseClick();
    robort.typeString("Google chrome");
    robort.keyTap("enter");
    setTimeout(searchAmazone, 2000);
    childProcess.exec('start chrome --kiosk localhost:4000');
}
function searchAmazone(){
    robort.moveMouseSmooth(170, 63);
    robort.mouseClick();
    robort.typeString("amazon.in")
    robort.keyTap("enter");

    setTimeout(function(){
    robort.moveMouseSmooth(360, 132);
    robort.mouseClick();
    robort.typeString("Latest phone");
    robort.keyTap("enter");
    setTimeout(clickOnProduct, 2000);
    },2000)
}
function clickOnProduct(){
    robort.moveMouseSmooth(364,363);
    robort.mouseClick();
    setTimeout(newTab,2000);   
}
function newTab(){
    robort.moveMouseSmooth(513,24);
    robort.mouseClick();
    robort.moveMouseSmooth(204,51);
    robort.typeString("youtube.com");
    robort.keyTap("enter");
    setTimeout(openVScode,2000);
}
function openVScode(){
    robort.moveMouseSmooth(108, 747);
    robort.mouseClick();
    robort.typeString("Visual studio code");
    robort.keyTap("enter");
    setTimeout(openNotepad2,2000);
}
function openNotepad2(){
    robort.moveMouseSmooth(108, 747);
    robort.mouseClick();
    robort.typeString("Notepad");
    robort.keyTap("enter");
    setTimeout(writeMsg2, 2000);
}
function writeMsg2(){
    robort.moveMouseSmooth(511,176);
    robort.typeString("THANK YOU");
}

