/*
    filename: ahoyJQuery.js
    author: Nathan Allen
    created: 10/19/21
    purpose: demonstrate the use of JQuery
    mod history:
        10/20/21 - added click functionality for buttons.

*/

$(document).ready(function(){
    //creat buttons
    $('#buttons').append('<br/><button id="firstButton">Append Button</button>')
    $('#buttons').append('<br/><button id="secondButton">Html Button</button>')

    //create bind click functions to buttons
    $("#firstButton").click(useAppend)
    $("#secondButton").click(useHtml)

    function useAppend(){
        $("#output").append("</br>Ahoy, matey.  Good job using .append, ARGH!")
        console.log("append")
    }

    function useHtml(){
        $("#output").html("</br>Ahoy, matey.  ARGH you deleted everything with .html!")
        console.log("html")
    }
    

})