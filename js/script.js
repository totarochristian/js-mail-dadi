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
---------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
*/

/** Array with valid emails */
const validEmails = ["mail1@gmail.com","mail2@gmail.com","mail3@gmail.com"];

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

let passedEmail = "mail1@gmail.com";
console.log("Mail: " + passedEmail);
console.log("Is valid? " + CheckIfMailIsValid(passedEmail));
