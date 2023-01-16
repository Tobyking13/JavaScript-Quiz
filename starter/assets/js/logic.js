var startButton = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var questionScreen = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choices = document.getElementById("choices");
var countdown = document.getElementById("time");
var feedback = document.getElementById("feedback");
var secondsLeft = 75;
var userScore = 0;
//import scoreScreen from './scores'

function startGame() {
  startButton.addEventListener("click", function () {
    startScreen.setAttribute("class", "hide");
    questionScreen.setAttribute("class", "");
    setTime();
    questions();
  });
};

function setTime() {
    setInterval(function () {
    secondsLeft--;
    countdown.textContent = secondsLeft;
    if (secondsLeft === 0) {
      gameOver();
    };
  }, 1000);
};

function questions() {
  var questionCount = 0;

  questionTitle.textContent = myQuestions[questionCount].question;

  questionScreen.appendChild(questionTitle);
  questionScreen.appendChild(choices);

  Object.values(myQuestions[questionCount].answers).forEach(function (answer, index) {
    var answers = document.createElement("button");
    index += 1;
    answers.textContent = (index + ". " + answer.content);
    choices.appendChild(answers);

    answers.addEventListener("click", function () {
      if (answer.answer !== true) {
        secondsLeft -= 15;
        questionCount += 1;
        feedback.setAttribute("class", "feedback");
        feedback.textContent = "Wrong!";
      } else {
        questionCount += 1;
        userScore += 5;
        localStorage.setItem("user-score",JSON.stringify(userScore))
        feedback.setAttribute("class", "feedback");
        feedback.textContent = "Correct!";
        gameOver();
      };
    });
  });
};

function gameOver() {
  window.location.replace("highscores.html");
};

function viewScores() {
  document.getElementById("view-scores").addEventListener("click", function(e) {
    e.preventDefault();
    //scoreScreen();
    window.location.replace("highscores.html");
  });
};


startGame();
viewScores();
