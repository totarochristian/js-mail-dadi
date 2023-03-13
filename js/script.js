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

let passedEmail = "mail@gmail.com";
console.log("Mail: " + passedEmail);
if(CheckIfMailIsValid(passedEmail)){
    console.log("The mail is valid.");
    StartDiceGame();
}
else
    ShowModalMessage("The mail is not valid!");
