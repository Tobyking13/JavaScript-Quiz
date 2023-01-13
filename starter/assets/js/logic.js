var startButton = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var questionScreen = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choices = document.getElementById("choices");
var countdown = document.getElementById("time");
var timeReset = 75;
var secondsLeft = timeReset;

startButton.addEventListener("click", function (e) {
  startScreen.setAttribute("class", "hide");
  questionScreen.setAttribute("class", "");
  setTime();
  questions();
});

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    countdown.textContent = secondsLeft;
  }, 1000);
  if (secondsLeft === 0) {
    clearInterval(timerInterval);
  }
}

function questions() {

  var questionCount = 0;

  
  questionTitle.textContent = myQuestions[questionCount].question;
  
  questionScreen.appendChild(questionTitle);
  questionScreen.appendChild(choices);

    Object.values(myQuestions[questionCount].answers).forEach(function (answer) {
      console.log(answer.content);
      var answers = document.createElement("li");
      answers.textContent = answer.content;
      choices.appendChild(answers);
  
      answers.addEventListener("click", function (e) {
        if (answer.answer !== true) {
          secondsLeft -= 15;
          questionCount += 1;
          questionTitle.textContent = myQuestions[questionCount].question;
        //  answers.textContent = Object.values(myQuestions[questionCount].answers)


//          return;
        } else {
          secondsLeft = timeReset
          console.log("right");
          questionCount += 1;
          questionTitle.textContent = myQuestions[questionCount].question;
       //   answers.textContent = Object.values(myQuestions[questionCount].answers)


        }
        
      });
    });

  

  
};

console.log(myQuestions);
