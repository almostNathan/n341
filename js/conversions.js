/*
    filename: conversions.html
    author: Nathan Allen
    created: 9/9/21
    purpose: send prompts to the user to get data, then use that data to alert the user
    mod history: 

*/


//set variables to be used to get users name
var srtNameQuestion = "What is your pirate name?"
var strNameDefault = "Captain Hook"
var strUserNameResponse = ""

//prompt user for their name
strUserNameResponse = prompt(srtNameQuestion, strNameDefault)

//set variables to be used to get # of doubloons
var strGoldQuestion = "How many doubloons did you plunder?"
var strGoldDefault = "10"
var strUserGoldResponse = ""

//promp user for # of doubloons
strUserGoldResponse = prompt(strGoldQuestion, strGoldDefault)

//convert input to integer
var intUserGold = parseInt(strUserGoldResponse)

//convert to USD
var intUserDollars = intUserGold * 287

//display all info back to user in alert 
alert(`${strUserNameResponse} plundered ${strUserGoldResponse} doubloons, which is $${intUserDollars} in USD.`)
