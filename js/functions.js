/*
    filename: functions.js
    author: Nathan Allen
    create date: 9/14/21
    purpose: demonstrate the use of functions
    mod histoy:

*/
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
var counter = 1

/*
    purpose: listen for when div is cliked and run code
    parameters: none
    return: none
*/
function gotClicked(){
    //call method to build message
    sendMessage("divOutput" ,counter ,"You have clicked this ", " times.")
    //increment counter
    counter+=1
}