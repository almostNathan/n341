/**************************************
    filename: testfile.js
    author: Nathan Allen
    created: 8/27/21
    last modified:
    8/27/21: changed output message

***************************************/

// The $ is the jQuery object
// "document" is the document object
// ready is a method of the jQuery object
// function creates an anonymous function to contain the code that should run
// In English, when the DOM has finished loading, execute the code in the function.
// See pages 312-313 of the text for details.
$(document).ready(function(){
			
	// Pop up a window that says "Here's a javascript test file!"
	alert("Lets start the semester right!");
				
}); // end of $(document).ready()