var userScoreBoard = document.getElementById("user-scores");
var userInitials = [];

console.log(userScore)

function getValue() {
    var inputForm = document.getElementById("user-initial-form");
    var inputBtn = document.getElementById("initial-submit-btn");

    inputForm.addEventListener("input", function(e) {
        userInitials.push(e.data);
    });

    inputBtn.addEventListener("click", function(e) {
        e.preventDefault();
        userInitials = userInitials.join('');
        userInitials = userInitials.toUpperCase();
        console.log(userInitials);
        scoreScreen();
        resultToLocalStorage();
        scoreBoard();

    });
};


function scoreScreen() {
    var resultScreen = document.getElementById("result-screen");
    resultScreen.setAttribute("class", "hide");
    
    var scoreScreen = document.getElementById("score-screen");
    scoreScreen.setAttribute("class", "");
};

function scoreBoard() {
    var userInitialLocalStorage = localStorage.getItem("initial");
    var userScoreLocalStorage = localStorage.getItem("score");
    var userResult = document.createElement("li");
    userResult.textContent = (`${userInitials} - ${userScore}`);
    userScoreBoard.appendChild(userResult);


}

function resultToLocalStorage() {
    localStorage.setItem("initial", userInitials);
    localStorage.setItem("score", userScore);


}

getValue();

