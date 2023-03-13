/*
---------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------   Main Goal   ------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
Mail
Ask the user for his email, check that he is in the list of who can access, print an appropriate message about the result 
of the check.

Dice game
Generate a random number from 1 to 6, for both the player and the computer.
Determine the winner, based on who gets the highest score.
---------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------   Tips   --------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
Before we start coding, let's ask ourselves a few questions:
- Is there an array somewhere?
- If we have to compare something what "what" do we need?
Tips of the day:
1. We always write before comments in Italian to understand what we want to do
2. javascript doesn't do anything by itself, we have to tell it what we want to do
3. yes, but what do we want to do?
4. let's go back to writing in Italian
5. let's try to imagine the operations we want our program to carry out as we would do it "by hand".
---------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------   Program steps   ----------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
- Define an array with valid emails
- Define a function to search in the array if the mail is valid or not
- Add code to print if the mail is valid or not
- Define function to get a random integer
- Define function where put the dice game code
---------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
*/

/** Array with valid emails */
const validEmails = ["mail1@gmail.com","mail2@gmail.com","mail3@gmail.com"];
/** Minimum number generable in the random function of the dice game */
const diceGameNumMin = 1;
/** Maximum number generable in the random function of the dice game */
const diceGameNumMax = 6;

/**
 * Function that search the passed string in the validEmails array and if found the same value, returns true, otherwise false
 * @param {string} passedEmail String that rapresent the mail to search
 * @returns True if mail is founded, false otherwise
 */
function CheckIfMailIsValid(passedEmail){
    for(let i=0; i<validEmails.length; i++)
        if(validEmails[i] == passedEmail)
            return true;
    return false;
}

/**
 * Function that will generate a random int
 * @param {bigint} max Max value of the interval
 * @param {bigint} min Min value of the interval
 * @returns {bigint} Generated random int value
 */
function GetRandomInt(max,min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Function that generate 2 random int from diceGameNumMin and diceGameNumMax, one for user and one for computer.
 * If the user num is greater then the computers num but the 2 numbers are different, this method print "User win", otherwise,
 * if the two number are different and the computer num is greater then the user num, the method print "Computer win!", otherwise,
 * the method print "Same result, parity!".
 */
function StartDiceGame(){
    let userNum = GetRandomInt(diceGameNumMax,diceGameNumMin);
    let computerNum = GetRandomInt(diceGameNumMax,diceGameNumMin);
    console.log(userNum>computerNum?"Player win!":(userNum!=computerNum?"Computer win!":"Same result, parity!"));
}

let passedEmail = "mail1@gmail.com";
console.log("Mail: " + passedEmail);
if(CheckIfMailIsValid(passedEmail)){
    console.log("The mail is valid");
    StartDiceGame();
}
else
    console.log("The mail is not valid");