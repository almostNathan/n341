/*
    filename: iffyProgramming.js
    author: Nathan Allen
    created: 9/28/21
    purpose: demonstrate the use of conditional statements
    mod history:

*/

//when page loads
$(document).ready(function(){
    //ask the user if they will arrive on time
    var strUserInput = prompt('Will you arrive on time?').toUpperCase()
    //get the element used for output
    var divOutput = document.getElementById("divOutput")
    console.log(divOutput)
    //if user said yes
    if (strUserInput == "YES"){
        //respond positively
        divOutput.textContent = "Ye just earned yeself extra doubloons!"
    }
    //if user said anything else
    else{
        //respond negatively
        divOutput.textContent = "Argh, walk the plank!"
    }
})


