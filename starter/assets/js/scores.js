var userScoreBoard = document.getElementById("user-scores");
var userScore = JSON.parse(localStorage.getItem('user-score'));
var userInitials = JSON.parse(localStorage.getItem('user-initials'));
userInitials = []; 

function getValue() {
    document.getElementById("final-score").textContent = `Your final score is ${userScore}`;

    var input = document.getElementById("user-initial-form");
    input.addEventListener("submit", function() {
        userInitials.push(input.value);
        scoreScreen();
        scoreBoard();  
    });

    document.getElementById("initial-submit-btn").addEventListener("click", function(e) {
        e.preventDefault();
        userInitials.push(input.value);
        scoreScreen();
        scoreBoard();        
    });
    clearLocalStorage() 
};

function scoreScreen() {
    document.getElementById("result-screen").setAttribute("class", "hide");
    document.getElementById("score-screen").setAttribute("class", "");
};

function scoreBoard() {
    userInitials.forEach(function(initials) {
        var userResult = document.createElement("li");
        console.log(userScore)
        userResult.textContent = `${initials} - ${userScore}`;
        userScoreBoard.appendChild(userResult);
        localStorage.setItem('user-initials', JSON.stringify(userInitials));
    });
};

function clearLocalStorage() {
    clear = document.getElementById("clear");
    clear.addEventListener("click", function(){
        localStorage.clear();
        document.getElementById("final-score").textContent = `Your final score is 0`

        var userResult = document.querySelector('li');
        userScoreBoard.removeChild(userResult);
    });
};

getValue();

// make local storage save multiple entries
// get view highscores to show highscores on highscores.html
