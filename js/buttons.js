/*
    filename: buttons.js
    author: Nathan Allen
    created: 10/13/21
    purpose to demonstrate the difference between event HANDLERS and LISTENERS
    mod history:

*/

$(document).ready(function(){
/*
    purpose: concatenate the number with 2 strings, then display to div
    parameters: 
        strDivId: id of the div where we display the final string
        intNumOfClicks: number of times the button was clicked
        strFirstString: first part of sencence we create
        strSecondString: ending of sentence
    return:
        none
*/
function sendMessage(strDivId, intNumOfClicks, strFirstString, strSecondString){
    //make the sentence with passed variables
    var strOutput = `${strFirstString} ${intNumOfClicks} ${strSecondString}`
    //put the text in the passed div
    document.getElementById(strDivId).textContent = `${strFirstString} ${intNumOfClicks} ${strSecondString}`
}


//declare varible outside scope of click function so it persists
var sendCounter = 1
/*
    purpose: listen for when div is cliked and run code
    parameters: none
    return: none
*/
function sendPirates(){
    //call method to build message
    sendMessage("battleCryOutput" ,sendCounter ,"Send ", " pirates to ATTACK!!!")
    //increment counter
    sendCounter+=1
}

var defendCounter = 1
function defendShips(){
    //call method to build message
    sendMessage("defendOutput", defendCounter, "Keep ", " pirates behind to defend the ships!")
    defendCounter+=1

}

var btnEvent1 = document.getElementById("event1")
var btnEvent2 = document.getElementById("event2")
var btnListener1 = document.getElementById("listener1")
var btnListener2 = document.getElementById("listener2")
var btnMultiListener = document.getElementById("multiListener")

btnEvent1.onclick = sendPirates
btnEvent2.onclick = defendShips
btnListener1.addEventListener("click", sendPirates, false)
btnListener2.addEventListener("click", defendShips, false)
btnMultiListener.addEventListener("click", function(){
    sendPirates()
    defendShips()
}, false)


})