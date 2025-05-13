const questions = [
  {
    question: "Which of the following is an example of a non-relational database?",
    answers: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
    correct: "MongoDB"
  },
  {
    question: "Which network topology has the least redundancy?",
    answers: ["Star", "Bus", "Mesh", "Ring"],
    correct: "Bus"
  },
  {
    question: "What is backpropagation in neural networks?",
    answers: [
      "The forward pass of input data",
      "The process of adjusting weights based on error",
      "The use of multiple hidden layers",
      "The process of selecting the best features"
    ],
    correct: "The process of adjusting weights based on error"
  },
  {
    question: "Which of the following is a type of unsupervised learning?",
    answers: ["Regression", "Classification", "K-Means Clustering", "Decision Trees"],
    correct: "K-Means Clustering"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";

  q.answers.forEach(answer => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => checkAnswer(answer);
    li.appendChild(btn);
    answersEl.appendChild(li);
  });

  nextBtn.style.display = "none";
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].correct;
  if (selected === correct) {
    score++;
  }

  nextBtn.style.display = "inline";
  disableButtons();
}

function disableButtons() {
  const buttons = answersEl.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === questions[currentQuestion].correct) {
      btn.style.backgroundColor = "lightgreen";
    } else {
      btn.style.backgroundColor = "salmon";
    }
  });
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  questionEl.textContent = "Quiz Completed!";
  answersEl.innerHTML = "";
  nextBtn.style.display = "none";
  scoreEl.textContent = `Your score: ${score} / ${questions.length}`;
}

document.addEventListener("DOMContentLoaded", showQuestion);
