/*
    filename: strings.js
    author: Nathan Allen
    created: 10/5/21
    purpose: take user input and manipulate that string
    mod history:


*/

$(document).ready(function(){

    var strUserInput = prompt("What is your S.O.'s name?")
    var arrShipNames = []

    //regular input
    var strShipName = strUserInput
    arrShipNames.push(`The S.S. ${strShipName}`)

    //as upper case
    strShipName = strUserInput.toUpperCase()
    arrShipNames.push(`The S.S. ${strShipName}`)

    //as lower case
    strShipName = strUserInput.toLowerCase()
    arrShipNames.push(`The S.S. ${strShipName}`)

    //reverse the order
    strShipName = ""
    for (var i = strUserInput.length - 1; i >= 0; i--){
        strShipName += strUserInput.charAt(i)
    }
    arrShipNames.push(`The S.S. ${strShipName}`)

    //name is length of input "bad word" style
    strShipName = `${strUserInput.length} Letter Word`
    arrShipNames.push(`The S.S. ${strShipName}`)

    //first and last letter only
    strShipName = strUserInput.charAt(0).toUpperCase()
    strShipName +=  strUserInput.charAt(strUserInput.length-1).toUpperCase()
    arrShipNames.push(`The S.S. ${strShipName}`)

    //all but first and last letter
    strShipName = strUserInput.substring(1, strUserInput.length-1)
    arrShipNames.push(`The S.S. ${strShipName}`)

    //every other letter capitalized
    strShipName = ""
    for (var i = 0; i < strUserInput.length; i++){
        if (i%2 == 0){
            strShipName += strUserInput.charAt(i).toUpperCase()
        }
        else{
            strShipName += strUserInput.charAt(i).toLowerCase()
        }
    }
    arrShipNames.push(`The S.S. ${strShipName}`)

    //every other letter removed
    strShipName = ""
    for (var i = 0; i < strUserInput.length; i+=2){
        strShipName += strUserInput.charAt(i)
    }
    arrShipNames.push(`The S.S. ${strShipName}`)

    //ship with no whitespace
    strShipName = strUserInput.trim()
    arrShipNames.push(`The S.S. ${strShipName} with no whitespace`)

    //swap first half and second half of name
    strShipName = ""
    strShipName += strUserInput.substring(Math.floor(strUserInput.length/2), strUserInput.length)
    strShipName += strUserInput.substring(0, Math.floor(strUserInput.length/2))
    arrShipNames.push(`The S.S. ${strShipName}`)

    //remove vowels
    strShipName = strUserInput.replace(/[aeiou]/ig, "")
    arrShipNames.push(`The S.S. ${strShipName}`)


var elShipNameList = document.getElementById("divShipNamesList")
var intCounter = 1
for (shipName of arrShipNames){
    elShipNameList.textContent += `${intCounter}. ${shipName}\r\n`
    console.log(shipName)
    intCounter++

}


})