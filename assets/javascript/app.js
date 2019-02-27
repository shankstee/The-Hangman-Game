// Lets start of by captureing the users key pressed and store it.

let userKeyPressed;
let guessedLettersBox = document.getElementById("alreadyGuessedKey");
const arrrayOfNames = ["Drake", "Kanye", "Kendrick", "Kyle", "Migos", "logic", "Trae"];

document.onkeypress = function(event) {
    userKeyPressed = event.key;
    console.log(userKeyPressed);
    guessedLettersBox.innerHTML += userKeyPressed + " ";
    
};

// Now lets add the already guessed keys to the DOM

