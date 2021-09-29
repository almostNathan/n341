/*
    filename: moreIfs.js
    author: Nathan Allen
    created: 9/29/21
    purpose: take in user input, calculate users "location" and notify them which direction to go
                using if/else statements and switch statements.
    mod history: 

*/

$(document).ready(function(){

    //get the users location
    var strUserCurrentLoc = prompt("Captain what is your current Longitude and Latitude! (ex. -120,120)")
    //get users destination
    var strUserTargetLoc = prompt("Ok, what Long/Lat do you want to go to.")
    //split the responses into individual values
    var arrCurrentLoc = strUserCurrentLoc.split(",")
    var arrTargetLoc = strUserTargetLoc.split(",")

    //get each value into int form
    //current loc
    var intCurrentLong = parseInt(arrCurrentLoc[0])
    var intCurrentLat = parseInt(arrCurrentLoc[1])
    //targetLoc
    var intTargetLong = parseInt(arrTargetLoc[0])
    var intTargetLat = parseInt(arrTargetLoc[1])

    //get elements for echo
    var elCurrentLoc = document.getElementById("currentLoc")
    var elTargetLoc = document.getElementById("targetLoc")

    //echo user responses
    elCurrentLoc.textContent = `You are at ${intCurrentLong}, ${intCurrentLat}.`
    elTargetLoc.textContent = `You are trying to get to ${intTargetLong}, ${intTargetLat}.`

    //get elements for output
    var elIfElseDiv = document.getElementById("ifElse")
    var elCaseSwitchDiv = document.getElementById("caseSwitch")

    //check location via if/else block
    elIfElseDiv.textContent = ifElse(intCurrentLong, intCurrentLat, intTargetLong, intTargetLat)

    
    //check location via case block
    elCaseSwitchDiv.textContent = caseSwitch(intCurrentLong, intCurrentLat, intTargetLong, intTargetLat)

})

/*
    purpose: use if/else statements to determine the users heading
    parameters:
        intCurrentLong: users current longitude
        intCurrentLat: users current latitude
        intTargetLong: destination longitude
        intTargetLong: destination latitude

    return: String  that states what direction to go
*/

function ifElse(intCurrentLong, intCurrentLat, intTargetLong, intTargetLat){
    //calculate Lat and long distance
    //+ latDist means target is south of user
    //- latDist means target is north of user
    //+ longDist means target is west of user
    //- longDist means target is east of user
    var intLatDistance = intCurrentLat - intTargetLat
    var intLongDistance = intCurrentLong - intTargetLong

    //if user is at same location as target
    if (intCurrentLong == intTargetLong && intCurrentLat == intTargetLat){
        //they have arrived
        return "Land Ho!"
    }
    
    //check for due NSEW
    //if due N/S
    if (intLatDistance == 0){
        //if + dist go west
        if (intLongDistance > 0){
            return "Go due West"
        }
        //else go east
        else{
            return "Go due East"
        }
    }

    //if due E/W
    if (intLongDistance == 0){
        //if + dist go south
        if (intLatDistance > 0){
            return "Go due South"
        }
        //else go north
        else{
            return "Go due North"
        }
    }


    //check for non-cardinal traveling
    //if target is north of them
    if(intCurrentLat <= intTargetLat){
        //and west of them
        if (intCurrentLong >= intTargetLong)
            //say northwest
            return "Go North West"
        //and east of them
        if (intCurrentLong <= intTargetLong){
            //say northeast
            return "Go North East"
        }

    }
    //if target is south of them
    if (intCurrentLat >= intTargetLat){
        //and west of them
        if(intCurrentLong >= intCurrentLong){
            //say southwest
            return "Go South West"
        }
        //and east of them
        if(intCurrentLong <= intCurrentLong){
            //say southeast
            return "Go South East"
        }

    }

}

/*
    purpose: use a switch to determine the users heading
    parameters:
        intCurrentLong: users current longitude
        intCurrentLat: users current latitude
        intTargetLong: destination longitude
        intTargetLong: destination latitude

    return: String  that states what direction to go
*/

function caseSwitch(intCurrentLong, intCurrentLat, intTargetLong, intTargetLat){
    //calculate Lat and long distance
    //+ latDist means target is south of user
    //- latDist means target is north of user
    //+ longDist means target is west of user
    //- longDist means target is east of user
    var intLatDistance = intCurrentLat - intTargetLat
    var intLongDistance = intCurrentLong - intTargetLong
    switch(true){
        case intLatDistance == 0 && intLongDistance == 0:
            return "Land Ho!"
            break

        //if due north
        case intLatDistance < 0 && intLongDistance == 0:
            return "Go due North"
            break

        //if due south
        case intLatDistance > 0 && intLongDistance ==0:
            return "Go due South"
            break

        //if due East
        case intLatDistance == 0 && intLongDistance < 0:
            return "Go due East"
            break

        //if due West
        case intLatDistance == 0 && intLongDistance > 0:
            return "Go due West"
            break

        //if north and west
        case intLatDistance <= 0 && intLongDistance >= 0:
            return "Go North West"
            break
        //if north and east
        case intLatDistance <= 0 && intLongDistance <= 0:
            return "Go North East"
            break
        //if south and west
        case intLatDistance >= 0 && intLongDistance >= 0:
            return "Go South West"
            break
        //if south and east
        case intLatDistance >= 0 && intLongDistance <= 0:
            return "Go South East"
            break
        
    }
}