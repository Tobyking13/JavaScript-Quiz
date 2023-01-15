var userScoreBoard = document.getElementById("user-scores");
var userInitials = JSON.parse(localStorage.getItem('userInitials')) || [];

var userScore = require('./logic');
console.log(userScore)

function getValue() {
    document.getElementById("user-initial-form").addEventListener("input", function(e) {
        userInitials.push(e.data);
        localStorage.setItem('userInitials', JSON.stringify(userInitials));
    });

    document.getElementById("initial-submit-btn").addEventListener("click", function(e) {
        e.preventDefault();
        userInitials = userInitials.join('').toUpperCase();
        scoreScreen();
        scoreBoard();        
        clearLocalStorage() 
    });
};


function scoreScreen() {
    document.getElementById("result-screen").setAttribute("class", "hide");
    document.getElementById("score-screen").setAttribute("class", "");
};

function scoreBoard() {
    var userResult = document.createElement("li");
    userResult.textContent = `${userInitials} - ${userScore}`;
    userScoreBoard.appendChild(userResult);
};


function clearLocalStorage() {
    clear = document.getElementById("clear");
    clear.addEventListener("click", function(e){
        console.log(e)
        localStorage.clear();
        var userResult = document.querySelector('li');
        userScoreBoard.removeChild(userResult);
        userInitials = [];
        userScore = 0;
    });
};


getValue();



// make userScore work
// get JSON array to work 
// get highscores from index.html to show scoreboard