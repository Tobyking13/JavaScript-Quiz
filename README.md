# Toby King - Javascript Quiz

## Description

I have created a Javascript quiz. The idea of this is that anyone can add questions to the questions.js file and the code in the logic.js file will take care of implementing that into the game. Once the user clicks the start button the timer and the questions functions are initiated. The timer function sets a countdown from 75 seconds displaying in the DOM every second decreasing till 0 where the gameover function is called and will show the user their result on the highscores screen. 

The questions function is the main part of this game. It works by stating a variable called questionCount which is set to 0. This is responsible for the index of each question/ answers for the game. After this there is a nested function, within that, the question is then set to the DOM and any previous answers are removed. Then there is a for loop that allows 4 buttons to get created, each button's text content is set to each answer within that set of questions/answers. Then there is an if statement that asks if the answer is = to true then update the userscore, play the correct SFX & show the 'Correct!' feedback. Then there is another if statement that says if the questionCount is less than the length of the question array to increment the questionCount by 1 and initiate the same function with the parameter set to the question count. The rest of the code does the same thing but when the user hits the wrong answer. The only difference is that the timer has 15 seconds knocked off. Once the questions are over the page will change to the highscores.html page.

This page shows the user's result(which is saved in local storage) & asks the user to input their name (which will save to local storage). Then, the scoreboard will show up with the user name and score. There is a button to go back to the start of the game & a button to clear the highscores. This will remove all data saved to local storage.

This has been a tough challenge. I was playing around with forEach() methods within for loops and had great difficulty getting this to work. So it has been very informative. There are a few things I want to improve, this as adding multiple entries to local storage. Also, when the user hits the View Highscores button on the start page, I would like the scoreboard to show, not the highscores.html page. Overall I am very happy with the outcome of this program.



## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)

## Installation

https://tobyking13.github.io/Toby-King-JavaScript-Quiz/index.html

## Usage

![Toby King Javascript Quiz](./assets/images/Screenshot.png "Toby King Javascript Quiz" )
Screenshot of the webpage live on Github pages.

## Credits

N/A

## License

N/A

## Badges

N/A

## Features

* Multiple choice game about Javascript.
* Once the game starts, it initiates a 75 second countdown. Getting a wrong answer will make you loose an additional 15 seconds.
* If the user gets a correct score it will add 5 point to the user score. This will then get stored in local storage.
* At the end of the game you can add your name to the scoreboard.

## How to Contribute

N/A

## Tests

N/A