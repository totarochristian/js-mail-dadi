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

/**
 * FUnction that show a passed message as body text of a modal
 * @param {string} message Message to show inside the modal
 */
function ShowModalMessage(message){
    document.getElementById("modal-body-text").innerHTML = message;
    $('#exampleModal').modal('show');
}