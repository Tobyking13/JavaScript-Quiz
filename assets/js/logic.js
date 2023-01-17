var startButton = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var questionScreen = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choices = document.getElementById("choices");
var countdown = document.getElementById("time");
var feedback = document.getElementById("feedback");
var secondsLeft = 75;
var userScore = 0;

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
    if (secondsLeft <= 0) {
      gameOver();
    }
  }, 1000);
}

function questions() {
  var questionCount = 0;
  function showQuestions(questionNum) {
    questionTitle.textContent = myQuestions[questionNum].question;
    choices.textContent = "";
    for(let i = 0; i < 4; i++) {
      var answerButton = document.createElement('button');
      answerButton.textContent = myQuestions[questionNum].answers[i].content;
      choices.appendChild(answerButton);
      answerButton.addEventListener('click', function() {
        if(myQuestions[questionNum].answers[i].answer === true) {
          userScore+= 5;
          localStorage.setItem('user-score', JSON.stringify(userScore));
          feedback.setAttribute('class', 'feedback')
          feedback.textContent = 'Correct!';
          var CorrectSound = new Audio ('../starter/assets/sfx/correct.wav');
          CorrectSound.play();
          if (questionCount < myQuestions.length - 1) {
            questionCount++;
            showQuestions(questionCount);
          } else {
            gameOver();
          }
        } else {
          secondsLeft -= 15;
          feedback.setAttribute('class', 'feedback');
          feedback.textContent = 'Wrong!';
          var incorrectSound = new Audio ('../starter/assets/sfx/incorrect.wav');
          incorrectSound.play();
          if (questionCount < myQuestions.length - 1) {
            questionCount++;
            showQuestions(questionCount);
          } else {
            gameOver();
          }
        }
      })
    }
  }
  showQuestions(questionCount);
}


function gameOver() {
  window.location.replace("highscores.html");
}

function viewScores() {
  document
    .getElementById("view-scores")
    .addEventListener("click", function (e) {
      e.preventDefault();
      window.location.replace("highscores.html");
    });
}


startGame();
viewScores();

