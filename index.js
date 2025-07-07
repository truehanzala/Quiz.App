
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
const scoreElement = document.getElementById("score");

function showQuestion() {
  const questionElem = document.getElementById("questions");
  const optionsElem = document.getElementById("options");
  questionElem.innerText = questions[currentQuestion].question;
  optionsElem.innerHTML = "";

  questions[currentQuestion].options.forEach(option => {
    optionsElem.innerHTML += `<div class="option" onclick="SaveAnswer(event)">${option}</div>`;
  });
}

function SaveAnswer(event) {
  const options = document.getElementsByClassName("option");
  for (let opt of options) {
    opt.classList.remove("selected");
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
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("questions").textContent = "Quiz Completed!";
    document.getElementById("options").innerHTML = "";
    scoreElement.textContent = "Final Score: " + score;
    return;
  }

  scoreElement.textContent = "Score: " + score;
  showQuestion();
}

showQuestion();
