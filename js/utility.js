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

/**
 * Function that will check the game result and return a specific number
 * @param {bigint} user Random integer of the user
 * @param {bigint} computer Random integer of the computer
 * @returns {bigint} Integer that will be 0 if the player win, 1 if the computer win or 2 if is parity
 */
function CheckGameResult(user, computer){
    return user>computer?0:(user!=computer?1:2);
}

/**
 * Function that will return a string message to be used in the modal as text
 * @param {string} result Result obtained by the function CheckGameResult
 * @returns String message that announce the winner of the game
 */
function GetResultString(result){
    switch(result){
        case 0: return playerWinMessage;
        case 1: return computerWinMessage;
        case 2: return parityMessage;
    }
}
/**
 * Function that will set the value and some class attributes to a specific element of the index page with passed id
 * @param {string} id Id of the element score to select
 * @param {bigint} value Value to specify in the span of the element
 * @param {boolean} winner Boolean that will decide if set the class winner or class loser to the element
 */
function ApplyResult(id,value,winner){
    //Remove classes added previously
    document.getElementById(id).classList.remove("winner");
    document.getElementById(id).classList.remove("loser");
    //Set the span value
    document.getElementById(id).querySelector("span").innerHTML = value;
    //Add the class to color the bg
    if(winner)
        document.getElementById(id).classList.add("winner");
    else
        document.getElementById(id).classList.add("loser");
}

/**
 * Function called when the user click the startGame button.
 * It will generate the two numbers and display the result on the related form.
 */
function PlayDiceGame(){
    let userNum = GetRandomInt(diceGameNumMax,diceGameNumMin);
    let computerNum = GetRandomInt(diceGameNumMax,diceGameNumMin);
    let result = CheckGameResult(userNum,computerNum);
    ApplyResult("computer-score",computerNum,result==1);
    ApplyResult("player-score",userNum,result==0);
    ShowModalMessage(GetResultString(result));
    PlayAudio(result==0);
}

/**
 * Function that will play an audio (winner or loser audio).
 * @param {boolean} winner Boolean that define if the music to be played is the winner or loser music.
 */
function PlayAudio(winner){
    let audioToOpen = winner? "../assets/music/winner.flac" : "../assets/music/loser.wav";
    var audio = new Audio(audioToOpen);
    audio.play();
}