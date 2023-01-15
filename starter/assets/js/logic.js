var startButton = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var questionScreen = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choices = document.getElementById("choices");
var countdown = document.getElementById("time");
var feedback = document.getElementById("feedback");
//var timeReset = 75;
var secondsLeft = 75;
var userScore = 0;

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

    answers.addEventListener("click", function (e) {
      if (answer.answer !== true) {
        secondsLeft -= 15;
        questionCount += 1;
        feedback.setAttribute("class", "feedback");
        feedback.textContent = "Wrong!";
      } else {
        //secondsLeft = timeReset;
        questionCount += 1;
        userScore += 5;
        feedback.setAttribute("class", "feedback");
        feedback.textContent = "Correct!";
        gameOver();

      };
     // questionTitle.textContent = myQuestions[questionCount].question;


    
    });
  });
  //var answers = document.querySelectorAll('li')
  //answers.textContent = myQuestions[questionCount].answers[questionCount].content
};


function gameOver() {
  window.location.replace("highscores.html");
};

function viewScores() {
  var viewScore = document.getElementById("view-scores");
  viewScore.addEventListener("click", function(e) {
    e.preventDefault()
    window.location.replace("highscores.html")
    scoreScreen();

    console.log(e)
  })

}
// add score 

// when clock is 0 finish game
// finish screen showing user score
// ask user to enter initials to save high score to local storage
startGame()
viewScores()
console.log(userScore)