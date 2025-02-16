const questions = [
    {
        question:
            "Which Swiss mathematician introduced the modern notation for the function f(x)?",
        answers: [
            { text: "Euclid", correct: false },
            { text: "Bernhard Riemann", correct: false },
            { text: "Euler", correct: true },
            { text: "Kurt Gödel", correct: false },
        ],
        explanation:
            "Leonhard Euler introduced the modern notation for functions, using f(x) in the 18th century.uler's function notation f(x) allowed for a clear and systematic way to express mathematical relationships, making it easier to define and analyze functions. His work laid the foundation for modern mathematical analysis, and his notations, including Σ (sigma) notation for summation and e for the base of natural logarithms, are still widely used today. Euler's influence on mathematics remains profound, as his innovations continue to shape various branches of science and engineering.",
    },
    {
        question:
            "Who developed the binary number system, which became the foundation of modern computing?",
        answers: [
            { text: "Alan Turing", correct: false },
            { text: "Joost Burgi", correct: false },
            { text: "Archimedes", correct: false },
            { text: "Gottfried Wilhelm Leibniz", correct: true },
        ],
        explanation:
            "Gottfried Wilhelm Leibniz developed the binary number system in the 17th century.Leibniz recognized that a system using only two digits, 0 and 1, could efficiently represent numerical values and logical operations. His work on binary arithmetic was inspired by the I Ching, an ancient Chinese text that used binary-like symbols. Leibniz's binary system later became essential for digital computing, as it aligns perfectly with the on-off states of electronic circuits. His contributions laid the groundwork for modern computer architecture, influencing later developments in logic, computation, and artificial intelligence.",
    },
    {
        question:
            "Who is known for the earliest recorded use of a place-value number system?",
        answers: [
            { text: "Aryabhata", correct: false },
            { text: "Babylonians", correct: true },
            { text: "Ptolemy", correct: false },
            { text: "Aristotle", correct: false },
        ],
        explanation:
            "The Babylonians are known for the earliest recorded use of a place-value number system.The Babylonian numeral system, developed around 1900–1600 BCE, was base-60 (sexagesimal) rather than base-10.They used cuneiform script and a positional system where the value of a digit depended on its position, similar to modern decimal notation.This system influenced later numeral systems, including those used by the Greeks and Indians.",
    },
    {
        question:
            "Which mathematician from ancient Greece is famous for his work in geometry and mechanics?",
        answers: [
            { text: "Euclid", correct: false },
            { text: "Joost Burgi", correct: false },
            { text: "Archimedes", correct: true },
            { text: "Pythagoras", correct: false },
        ],
        explanation:
            "Archimedes, an ancient Greek mathematician, is renowned for his groundbreaking contributions to geometry and mechanics. Born in 287 BCE in Syracuse, he developed numerous mathematical theorems, including formulas for calculating areas, volumes, and surface areas of geometric shapes.",
    },
    {
        question:
            "The term 'algorithm' is derived from the name of which mathematician?",
        answers: [
            // Added missing comma before this line
            { text: "Al-Khwarizmi", correct: true },
            { text: "Joost Burgi", correct: false },
            { text: "Archimedes", correct: false },
            { text: "Fibonacci", correct: false },
        ],
        explanation:
            "he term algorithm is derived from the name of the Persian mathematician Al-Khwarizmi (c. 780–850 CE). His full name was Muhammad ibn Musa al-Khwarizmi, and he is considered one of the greatest mathematicians of the medieval Islamic world.he is best known for his book Al-Kitab al-Mukhtasar fi Hisab al-Jabr wal-Muqabala (The Compendious Book on Calculation by Completion and Balancing), which introduced the fundamental principles of algebra.",
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const explanationBox = document.getElementById("explanation-box"); // Get the explanation box

let currentQuestionIndex = 0;
let score = parseInt(sessionStorage.getItem("clickCount") || 0);  
  //take score from previous round, convert intro integer again 

function startQuiz() {
    currentQuestionIndex = 0;
    score;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestionNo = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestionNo.question;

    currentQuestionNo.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn_1");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    explanationBox.style.display = "none"; // Hide explanation box
    explanationBox.innerHTML = ""; // Clear previous explanation
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score+=10;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    // Show correct answer
    Array.from(answerButton.children).forEach((button) => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    // Display explanation
    explanationBox.innerHTML = `<strong>Explanation:</strong> ${questions[currentQuestionIndex].explanation}`;
    explanationBox.style.display = "block";

    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} `;

    nextButton.innerHTML = "Next Round";
    nextButton.style.display = "block";

    sessionStorage.setItem("round_2_score", score);

    // Change the button behavior to redirect after showing the score
    nextButton.onclick = function () {
        window.location.href = "round_3.html"; // Change this to your actual next round page
    };
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

// Keep this listener for normal quiz flow
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
});

startQuiz();
