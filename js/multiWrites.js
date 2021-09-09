/*
    filename: multiWrites.js
    author: Nathan Allen
    created: 9/8/21
    purpose: demonstrate the different ways text can be added to a web page
    mod history: 
*/

//show the first button when page loads
$(document).ready(function(){
    document.getElementById("btnTextContent").style.display ="block"
})

//answers to all the jokes
var strTextContentAnswer = "High C's."
var strInnerHtmlAnswer = "To get a new Ipatch."
var strDocumentWriteAnswer = "An arm and a leg."


function clickTextContent() {
    //get and delete the button
    document.getElementById("btnTextContent").remove()
    //display the button for next joke
    document.getElementById("btnInnerHtml").style.display ="block"
    //get the element to be modified
    var elDivTextContent = document.getElementById("divTextContent")
    elDivTextContent.textContent += strTextContentAnswer

    
}

function clickInnerHtml() {
    //get and delete the button
    document.getElementById("btnInnerHtml").remove()
    //display the button for next joke
    document.getElementById("btnDocumentWrite").style.display ="block"
    //get the element to be modified
    var elDivInnerHtml = document.getElementById("divInnerHtml")
    elDivInnerHtml.innerHTML += strInnerHtmlAnswer
}

function clickDocumentWrite() {
    //get and delete the button
    document.getElementById("btnDocumentWrite").remove()
    //get the element to be modified
    document.write(strDocumentWriteAnswer)
    document.body.style.backgroundColor = "aqua"
    document.body.style.fontSize = "40px"
}