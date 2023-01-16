var myQuestions = [
  {
    question: "What value does a Boolean give?",
    answers: [
      {
        content: "Number",
        answer: false,
      },
      {
        content: "String",
        answer: false,
      },
      {
        content: "True / False",
        answer: true,
      },
      {
        content: "Undefined",
        answer: false,
      },
    ],
  },
  {
    question: "What does JSON stand for?",
    answers: [
      {
        content: "Jittery Stationary Obscure Nanobots",
        answer: false,
      },
      {
        content: "Javascript Object Notation",
        answer: true,
      },
      {
        content: "Jupiter Saturn Orbital Nebula",
        answer: false,
      },
      {
        content: "Javascript Object Numbers",
        answer: false,
      },
    ],
  }, {
    question: "Which of the following keywords is used to define a variable in JS?",
    answers: [
      {
        content: "var",
        answer: true,
      },
      {
        content: "set",
        answer: false,
      },
      {
        content: "define",
        answer: false,
      },
      {
        content: "variable",
        answer: false,
      },
    ],
  }
];


console.log(myQuestions[0].answers[0].answer)