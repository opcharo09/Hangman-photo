
var startgame = function ("#press any key to get started!");
//array of words
var words = [
    "film",
    "digital",
    "analog",
    "lens",
    "viewfinder",
    "darkroom",
    "chemicals",
    "iso",
    "aperture"
];

console.log("film");

//pick random word
var word = words[Math.floor(math.random()* words.length)];

// letters array
var lettters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
"k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", 
"x", "y", "z"];

// lives
const maxtries = 11;

// array of 
var guessingword = [];
var wordindex ;
var lettersguess = [];
var remainingguesses;
var gamestarted = false;
var finished = false;
var wins = 0;
 


for (var i = 0; i < words.length;i++){
lettersguess[push] = ("_");
}
//when game starts again 
function resetGame(){
    remainingguesses = maxtries
    gamestarted = false;
}

lettersguess = [];
guessingword = [];

var remainingletters = word.length

document.getElementById("presskeytryagain")
document.getElementById("gameover-image")
document.getElementById("youwin-image")
// to show on html
function updatedisplay(){

document.getElementById("wins").innerHTML = wins;
    document.getElementById("currentword").innerText = "";
    for (var i = 0; i < guessingWord.length; i++) {
        document.getElementById("currentword").innerText += guessingWord[i];
    }
    document.getElementById("remainingguesses").innerText = remainingGuesses;
    document.getElementById("letttersguess").innerText = lettersguess;
    if(remainingGuesses <= 0) {
        document.getElementById("gameover-image");
        document.getElementById("presskeytryagain");
        hasFinished = true;
    }
};

var guess = prompt("Guess a letter, or click Cancel to stop playing.");
if (guess === null) {
}
// user press key
document.onkeydown = function(event) {
    if(hasFinished){
        resetGame();
        hasFinished = false;
    } 
    else {if(event.keycode >=65 && event.keycode<=90){
        makeguess(event.key.toLowerCase());
    }
}
};

function guessingWord(letter) {
    var positions = [];
}
    
for (var i = 0; i < Words[WordIndex].length; i++) {
    if(Words[WordIndex][i] === letter) {
        positions.push(i);
        }
    }

if (positions.length <= 0) {
        remainingGuesses--;
    }
for(var i = 0; i < positions.length; i++) {
        guessingWord[positions[i]] = letter;
    }


    function makeGuess(letter) {
        if (remainingGuesses > 0) {
            if (!gameStarted) {
                newFunction();
            }
    
            
            if (guessedLetters.indexOf(letter) === -1) {
                guessedLetters.push(letter);
                guessingWord(letter);
            }
        }
        
        updateDisplay();
        Win();

        function newFunction() {
            gameStarted = true;
        }
    };
  
    function Win() {
        if(guessingWord.indexOf("_") === -1) {
            document.getElementById("youwin-image");
            document.getElementById("pressKeyTryAgain");
            wins++;
            hasFinished = true;
        }
    };
     