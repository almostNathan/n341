/*
    filename: triggered.js
    author: Nathan Allen
    created: 11/10/21
    purpose: demonstrate the use of triggers
    mod history:

*/

$(document).ready(function(){
    //get body element
    var elBody = $("body")
    //add some divs
    for (var i = 0; i<5;i++){
        var elNewDiv = document.createElement("div")
        elNewDiv.tabIndex = "0"

        //add keypress trigger to divs
        //if hovering change to green, if not change to blue when keypress
        $(elNewDiv).keypress(function(){ 
            console.log("keypress")
            //if the color is red currently (being hovered)
            if ($(this).css("background-color") == "rgb(255, 0, 0)"){
                //change to green
                $(this).css("background-color", "green")
            //if background is black (not hovered)
            }else if ($(this).css("background-color") == "rgb(0, 0, 0)"){
                //change to blue
                $(this).css("background-color", "blue")
            }
        });
        //add the div to body
        elBody.append(elNewDiv)
    }
    

    //add hover function to divs
    //needs 2 anonymous functions -> mouse over, mouse out
    $("div").hover(
        //mouse over
        function(){
            //change div color to red
            $(this).css("background-color", "red")
            $(this).focus()
        },
        //mouse out
        function(){
            //change div color back to black
            if ($(this).css("background-color") == "rgb(255, 0, 0)"){
                $(this).css("background-color", "black")
            }
        }
    );


    //add a paragraph element 
    elBody.append("<p id ='screenSize'></p>")
    //set the text to start
    $("#screenSize").text(`The window is currently ${$(window).height()}, ${$(window).width()} (h,w).`)

    //when the window is resized
    $(window).resize(function(){
        //change the screenSize <p> to the current h/w of screen
        $("#screenSize").text(`The window is currently ${$(window).height()}, ${$(window).width()} (h,w).`)
    })


})