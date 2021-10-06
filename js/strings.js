/*
    filename: strings.js
    author: Nathan Allen
    created: 10/5/21
    purpose: take user input and manipulate that string

*/

$(document).ready(function(){

    var strUserInput = prompt("What is your S.O.'s name?")
    var arrShipNames = []

    var strShipName = strUserInput
    arrShipNames.push(`The S.S. ${strShipName}`)

    strShipName = strUserInput.toUpperCase()
    arrShipNames.push(`The S.S. ${strShipName}`)

    strShipName = strUserInput.toLowerCase()
    arrShipNames.push(`The S.S. ${strShipName}`)

    strShipName = ""
    for (var i = strUserInput.length - 1; i >= 0; i--){
        strShipName += strUserInput.charAt(i)
    }
    arrShipNames.push(`The S.S. ${strShipName}`)

    strShipName = `${strUserInput.length} Letter Word`
    arrShipNames.push(`The S.S. ${strShipName}`)

    strShipName = strUserInput.substring(1, strUserInput.length-1)
    arrShipNames.push(`The S.S. ${strShipName}`)

    //every other letter capitalized
    for (var i = 0; i < strUserInput.length; i+2){
        
    }
    strShipName = 
    arrShipNames.push(`The S.S. ${strShipName}`)

/*
    //every other letter removed
    strShipName = 
    arrShipNames.push(`The S.S. ${strShipName}`)

    strShipName = 
    arrShipNames.push(`The S.S. ${strShipName}`)

    strShipName = 
    arrShipNames.push(`The S.S. ${strShipName}`)

    strShipName = 
    arrShipNames.push(`The S.S. ${strShipName}`)

    strShipName = 
    arrShipNames.push(`The S.S. ${strShipName}`)

*/

var elShipNameList = document.getElementById("divShipNamesList")
var intCounter = 1
for (shipName of arrShipNames){
    elShipNameList.textContent += `${intCounter}. ${shipName}\r\n`
    console.log(shipName)
    intCounter++

}


})