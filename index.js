const questions = [
  {
    question: "What is your name?",
    options: ["Hanzala", "Zaman", "Hamza", "Ali"],
    correctAnswer: "Hanzala"
  },
  {
    question: "What is your age?",
    options: [16, 17, 18, 19],
    correctAnswer: 18
  },
  {
    question: "What is your nationality?",
    options: ["Afghanistan", "Pakistan", "China", "America"],
    correctAnswer: "Pakistan"
  },
  {
    question: "What is your qualification?",
    options: ["Middle", "Matric", "Inter", "Graduate"],
    correctAnswer: "Matric"
  },
  {
    question: "Who is the founder of Pakistan?",
    options: ["Allama Iqbal", "Liaquat Ali Khan", "Quaid-e-Azam", "Sir Syed Ahmed Khan"],
    correctAnswer: "Quaid-e-Azam"
  },
  {
    question: "What is the national language of Pakistan?",
    options: ["Urdu", "Punjabi", "Pashto", "English"],
    correctAnswer: "Urdu"
  },
  {
    question: "Which city is the capital of Pakistan?",
    options: ["Karachi", "Lahore", "Islamabad", "Rawalpindi"],
    correctAnswer: "Islamabad"
  },
  {
    question: "In which year did Pakistan become independent?",
    options: ["1945", "1947", "1950", "1930"],
    correctAnswer: "1947"
  },
  {
    question: "What is the currency of Pakistan?",
    options: ["Rupee", "Dollar", "Dirham", "Taka"],
    correctAnswer: "Rupee"
  },
  {
    question: "Which is the largest province of Pakistan by area?",
    options: ["Punjab", "Sindh", "Balochistan", "KPK"],
    correctAnswer: "Balochistan"
  }
];

let currentQuestion = 0;
let score = 0;
let userAnswer = null;

const questionElem = document.getElementById("questions");
const optionsElem = document.getElementById("options");
const scoreElem = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");
const nextBtn = document.getElementById("next-btn");

function showQuestion() {
  questionElem.innerText = questions[currentQuestion].question;
  optionsElem.innerHTML = "";

  questions[currentQuestion].options.forEach(option => {
    optionsElem.innerHTML += `<div onclick="SaveAnswer(event)" class="option">${option}</div>`;
  });
}

function SaveAnswer(event) {
  let options = document.getElementsByClassName("option");
  for (let i = 0; i < options.length; i++) {
    options[i].classList.remove("selected");
  }
  event.target.classList.add("selected");
  userAnswer = event.target.innerHTML;
}

function NextQuestion() {
  if (userAnswer === null) {
    alert("Please select an answer before moving to the next question.");
    return;
  }

  if (userAnswer == questions[currentQuestion].correctAnswer) {
    score += 10;
  }

  currentQuestion++;
  userAnswer = null;

  if (currentQuestion >= questions.length) {
    questionElem.textContent = "🎉 Quiz Completed!";
    optionsElem.innerHTML = "";
    nextBtn.style.display = "none";
    restartBtn.style.display = "inline-block";
    scoreElem.textContent = "Final Score: " + score;
    return;
  }

  scoreElem.textContent = "Score: " + score;
  showQuestion();
}

function RestartQuiz() {
  currentQuestion = 0;
  score = 0;
  userAnswer = null;
  scoreElem.textContent = "";
  nextBtn.style.display = "inline-block";
  restartBtn.style.display = "none";
  showQuestion();
}

showQuestion();
