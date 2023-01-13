var startButton = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var countdown = document.getElementById("time");
var secondsLeft = 75;

startButton.addEventListener("click", function (e) {
  startScreen.textContent = "";
  setTime();
  questions()
});



function setTime() {
    var timerInterval = setInterval(function () {
      secondsLeft--;
      countdown.textContent = secondsLeft;
    }, 1000);
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    };
  };

function questions() {
    var question = document.createElement('h2');
    var answerList = document.createElement('ul');

    question.textContent = myQuestions.question;
    startScreen.appendChild(question);
    startScreen.appendChild(answerList)

    // myQuestions.answers.content.forEach(function(answer, index) {
    //     var answers = document.createElement('li');
    //     var button = document.createElement('button');
    //     answers.setAttribute("class", "answer" + (index + 1))

    //     answers.textContent = answer;
    //     //button.textContent = 'submit';

    //     answerList.appendChild(answers);
    //     //answerList.appendChild(button)

    //     console.log(button)

// console.log(Object.values(myQuestions.answers[0]));

Object.values(myQuestions.answers).forEach(function(answer) {
    console.log(answer.content)
    var answers = document.createElement('li');
    answers.textContent = answer.content
    answerList.appendChild(answers);

    answers.addEventListener('click', function(e) {

        if(answer.answer !== true) {
            return;
        };

        console.log('right');
    });
});

        // answers.addEventListener('click', function(e) {
        //     console.log(e)

        //     if() {

        //     }
        // })



    };


console.log(myQuestions)
