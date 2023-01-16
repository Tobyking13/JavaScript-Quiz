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
}

function setTime() {
  setInterval(function () {
    secondsLeft--;
    countdown.textContent = secondsLeft;
    if (secondsLeft === 0) {
      gameOver();
    }
  }, 1000);
}

function questions() {
  var questionCount = 0;

  function showQuestion(questionNum) {
    questionTitle.textContent = myQuestions[questionNum].question;
    choices.innerHTML = ''; // clear previous choices
    for (let i = 0; i < 4; i++) {
      var answersButton = document.createElement("button");
      answersButton.textContent = myQuestions[questionNum].answers[i].content;
      choices.appendChild(answersButton);
      answersButton.addEventListener("click", function (e) {
        if (myQuestions[questionNum].answers[i].answer === true) {
          userScore += 5;
          localStorage.setItem("user-score", JSON.stringify(userScore));
          feedback.setAttribute("class", "feedback");
          feedback.textContent = "Correct!";
          if (questionCount < myQuestions.length - 1) {
            questionCount++;
            showQuestion(questionCount);
          } else {
            gameOver();
          }
        } else {
          secondsLeft -= 15;
          feedback.setAttribute("class", "feedback");
          feedback.textContent = "Wrong!";
          if (questionCount < myQuestions.length - 1) {
            questionCount++;
            showQuestion(questionCount);
          } else {
            gameOver();
          }
        }
      }.bind(null, i));
    }
  }
  showQuestion(questionCount);
}





function gameOver() {
  window.location.replace("highscores.html");
}

function viewScores() {
  document
    .getElementById("view-scores")
    .addEventListener("click", function (e) {
      e.preventDefault();
      //scoreScreen();
      window.location.replace("highscores.html");
    });
}

startGame();
viewScores();
