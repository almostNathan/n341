/*
    filename: idAndStyle.js
    author: Nathan Allen
    created: 9/3/21
    Mod History:
    9/4/21 - added functions for clicking divs to replace non-functioning jQuery
*/

$(document).ready(function () {
    alert("Clicking on a block will tell you the name of the color")
});


/* when each div is clicked, tell the user what color the div is. */
function firstDivClick(){
    $("#firstDiv").text("Sea Green")
}

function secondDivClick(){
    $("#secondDiv").text("Aqua")
}

/* 9/4/21 - tried using jQuery to handle the clicks but would not work.
$("#firstDiv").click(function(){
    $("#firstDiv").text = "this is seafoam";
});
$("#secondDiv").click(function () { 
    alert("hello");
    $("#secondDiv").innerHTML = "This is Aqua";
    console.log("clicked");
});
    
*/