/*
    filename: randomness.js
    author: Nathan Allen
    created: 9/21/21
    purpose: to demonstrate the use of objects
        make a pirate object, instatiate 4 of them (one captain),
        captain picks a random number, 3 others guess, captain 
        announces winner if any.
    mod history:
        9/22/21 added startGame button functionality

*/

//create global variables
var pirateCaptain
var pirate1
var pirate2
var pirate3

$(document).ready(function(){
/*
    Pirate Object
    parameters: rank, name, favorite number, randomPick, HTML tag
    methods: 
        speak() -> say your favorite number
        pickNumber() -> pick a random number 1-10
        announceStart() -> announce start of game
*/
function Pirate(rank, name, favNumber, htmlTag){
    this.strRank = rank
    this.strName = name
    this.intFavNumber = favNumber
    this.elTextBox = document.getElementById(htmlTag)

    this.randomPick = 0

    this.speak = function(passedPhrase){
        this.elTextBox.textContent = passedPhrase
    }

    this.pickNumber = function(){
        this.randomPick = Math.floor(Math.random()*10 +1)
    }


    this.announceGame = function(){
        this.elTextBox.textContent = "Alright mateys. Guess a number."
    }
} 



//create Captain and 3 pirates
pirateCaptain = new Pirate("Captain", "Jack", 10, "captain")
pirate1 = new Pirate("Sailor", "One Eye", 5, "pirate1")
pirate2 = new Pirate("First Mate", "Bill", 8, "pirate2")
pirate3 = new Pirate("Chef", "Cookie", 2, "pirate3")


pirateCaptain.announceGame()



})//end doc.ready

//starts the game when button is clicked
function startGame(){

    //make array of pirates for ease of use
    var pirates = [pirate1, pirate2, pirate3]

    //captain picks a random number
    pirateCaptain.pickNumber()

    //each pirate picks a random number and say is
    for (crew of pirates) {
        crew.pickNumber()
        crew.speak(`${crew.strRank} ${crew.strName} chooses ${crew.randomPick}. Argh`)
    }

    //determine if someone guessed right
    var boolIsWinner = false
    var pirateWinningPirate = null
    //for each pirate
    for (crew of pirates) {
        //if their pick was the same as the captain
        if (crew.randomPick == pirateCaptain.randomPick){
            //the game has a winner
            boolIsWinner = true
            pirateWinningPirate = crew
        }
    }

    //captain outputs the result.
    //if there is a winner
    if (boolIsWinner){
        pirateCaptain.speak(`${pirateWinningPirate.strRank} ${pirateWinningPirate.strName} wins me booty! (guess:${pirateCaptain.randomPick})`)
    }
    //if no one won
    else{
        pirateCaptain.speak(`Argh, noone wins. The booty is all mine. (guess:${pirateCaptain.randomPick})`)
    }

}//end startGame