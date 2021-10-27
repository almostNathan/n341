/*
    filename: pickMe.js
    author: Nathan Allen
    created: 10/25/21
    purpose: demonstrate use of jQuery selectors and filters
    mod history:
        10/26/21: added .parent() selection
*/

//set up variable to hold Current JQuery selection
var $currentSelection

$(document).ready(function(){

    //selection by tag
    $("#button1").click(function(){
        $currentSelection = $("li")
        makeChanges($currentSelection)
    })
    
    //selection by assag
    $("#button2").click(function(){
        $currentSelection = $(".officer")
        makeChanges($currentSelection)
    })

    //selection by id
    $("#button3").click(function(){
        $currentSelection = $("#pete")
        makeChanges($currentSelection)
    })
     
    //apply multiple instructions in single line of code
    $("#button4").click(function(){
        $currentSelection = $(".captain, .firstMate")
        $currentSelection.css({
            "backgroun-color": "black",
            "color": "white"})
        
        makeChanges($currentSelection)
    })

    //selection by tag
    $("#button5").click(function(){
        $currentSelection = $("li:contains('M')")
        makeChanges($currentSelection)
    })

    //selection by tag
    $("#button6").click(function(){
        $currentSelection = $(".sailor:last-child")
        makeChanges($currentSelection)
    })

    //selection by tag
    $("#button7").click(function(){
        var intEvenOdd = Math.floor(Math.random()*2)
        console.log(intEvenOdd)
        if (intEvenOdd == 0){
            $currentSelection = $("li:even")
        }else{
            $currentSelection = $("li:odd")
        }
        makeChanges($currentSelection)
    })

    //selecting parent of element
    $("#button8").click(function(){
        makeChanges($("#mckraken").parent())
    })


    //changes to be made to selections
    function makeChanges($currentSelection){
        $("li, ul").css("border", "none").css("font-size", 16).css("backgroun-color", "white").css("color", "black")
        $currentSelection.css("border", "5px solid red").css("font-size", 24)
    }



})