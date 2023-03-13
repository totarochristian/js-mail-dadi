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
 * Function that will toggle the mail and dice d-none property (hide the mail div and show the dice div)
 */
function SetupDiceGame(){
    document.getElementById("mail").classList.toggle("d-none");
    document.getElementById("dice").classList.toggle("d-none");
}

/**
 * Function that show a passed message as body text of a modal
 * @param {string} message Message to show inside the modal
 */
function ShowModalMessage(message){
    document.getElementById("modal-body-text").innerHTML = message;
    $('#exampleModal').modal('show');
}

function PlayDiceGame(){
    let userNum = GetRandomInt(diceGameNumMax,diceGameNumMin);
    let computerNum = GetRandomInt(diceGameNumMax,diceGameNumMin);

    document.getElementById("computer-score").innerHTML = computerNum;
    document.getElementById("player-score").innerHTML = userNum;
    ShowModalMessage(userNum>computerNum?playerWinMessage:(userNum!=computerNum?computerWinMessage:parityMessage));
}