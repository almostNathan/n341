/*
    filename: loopingThroughArrays.js
    author: Nathan Allen
    created: 10/6/21
    purpose: take user input, convert to binary, display individual binary digits to divs
    mod history:

*/

$(document).ready(function(){

    //get a character from the user
    var chrUserInputChar = prompt("Please enter a single character.")
    //convert character to ascii
    var binUserInput = parseBin(parseAscii(chrUserInputChar))
    //convert ascii to binary string
    //split the binary string into an array
    var arrBinaryArray = binUserInput.split("")

    //for each item in the array
    for (chrBinaryDigit of arrBinaryArray){
        //make a div
        var elDisplayDiv = document.createElement("div")
        //set the value of the div
        elDisplayDiv.textContent = chrBinaryDigit
        
        //for 0's 
        if (chrBinaryDigit == "0"){
            //change div to black
            elDisplayDiv.style.backgroundColor = "black"
            //and font to white
            elDisplayDiv.style.color = "white"
        }

        
        //add div to page
        document.body.appendChild(elDisplayDiv)

    }
    console.log(arrBinaryArray)

	/*****			
	Purpose: take in character and conver to its ascii int and return
	Parameters: single character / letter		
	Return: integer representing an ascii value
	*****/
	function parseAscii(chrCharacter)
	{
		intAscii = chrCharacter.charCodeAt(0);
		return intAscii;
	}
	
	/*****			
	Purpose: take in int and convert it to a binary string
	Parameters: single integer representing an ascii value	
	Return: binary, base 2 representation of the number passed to this function
	*****/
	function parseBin(intAscii)
	{
		strBin = parseInt(intAscii, 10).toString(2);
		if(strBin.length < 8)
		{
			var intPlaceHolders = 8 - strBin.length;
			for(var i = 0; i < intPlaceHolders; i++)
			{
				strBin = "0" + strBin;
			}
			
		}
		
		return strBin;
	}
    
})//end $doc.ready