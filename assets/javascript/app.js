const objsOfartist = {
    artistsArry: [
    {
        name: "drake",
        imageLink: "https://peopledotcom.files.wordpress.com/2018/10/drake.jpg"
    },

    {
        name: "kanye",
        imageLink: "https://ksassets.timeincuk.net/wp/uploads/sites/55/2018/12/kanye-west-GettyImages-1076421056-920x584.jpg"
    },
     {
         name: "kendrick",
         imageLink: "https://pmcvariety.files.wordpress.com/2017/11/kendrick-lamar-variety-hitmakers.jpg?w=1000&h=562&crop=1"
     },

     {
         name: "kyle",
         imageLink: "https://www.billboard.com/files/media/03-Kyle-bb13-2018-beat-billboard-oijejoiea-1548.jpg"
     },

     {
         name: "migos",
         imageLink: "https://images-na.ssl-images-amazon.com/images/I/A1upUhCRisL._CR0,0,3840,2880_._SL1000_.jpg"
     },

     {
         name: "logic",
         imageLink: "https://images-na.ssl-images-amazon.com/images/I/B1VfPlcXC2S._CR0,0,3840,2880_._SL1000_.jpg"
     },

     {
         name: "trae",
         imageLink: "http://townsquare.media/site/812/files/2017/08/Trae-Tha-Truth-Hurricane-Harvey.jpg"
     }

]};

let userKeyPressed;
let guessedLettersBox = document.getElementById("alreadyGuessedKey");
let guessedArray = [];
let displayWordTag = document.getElementById("currentWordBox");

// Now lets get a random name/obj form the array of artist objects

var currentArtistObj = objsOfartist.artistsArry[Math.floor(Math.random() * Math.floor(7))];

// now lets take the random word and display that amount of _ _ _
function displayUnderscores() {
    for (let i = 0; i < currentArtistObj.name.length; i++) {
        displayWordTag.innerHTML = "";
        guessedArray.push("_");
    }
    // update an array with underscores and then display that array
}

displayUnderscores();

// Capture the key the user presses on
document.onkeypress = function(event) {
    
    userKeyPressed = event.key.toLowerCase();
    guessedLettersBox.innerHTML += userKeyPressed + " ";
    console.log(userKeyPressed);

    for (let i = 0; i < currentArtistObj.name.length; i++) {
        if (event.key === currentArtistObj.name[i]) {
            guessedArray.splice(i,1, userKeyPressed);
        }
        console.log(guessedArray);
        
        
    }
    displayWordTag.innerHTML = guessedArray;
    
};

// Now I want to update the _ _ _ if the users keyPress is equal to any letter within the random word.

// document.getElementById("currentWordBox").innerHTML = currentWord.name;
document.getElementById("rapperImage").src = currentArtistObj.imageLink; 
