document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".scroll-section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("scroll-visible");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));
});

const question = [
    { num1: 12, num2: 12, num3: 3, answer1: "+", answer2: "-", result: 21 },
    { num1: 31, num2: 2, num3: 45, answer1: "*", answer2: "-", result: 17 },
    { num1: 54, num2: 3, num3: 13, answer1: "/", answer2: "+", result: 31 },
    { num1: 16, num2: 31, num3: 4, answer1: "+", answer2: "-", result: 43 },
    { num1: 27, num2: 3, num3: 4, answer1: "/", answer2: "*", result: 36 },
];

let currentQue = 0;
let previousScore = parseInt(sessionStorage.getItem("round_2_score") || 0);
let userscore = previousScore;  // Carry forward the score

function loadQuestion() {
    let q = question[currentQue];
    document.getElementById("question").innerHTML = `
        ${q.num1} <input type="text" id="Q1B1" maxlength="1">
        ${q.num2} <input type="text" id="Q1B2" maxlength="1">
        ${q.num3} = ${q.result}
    `;
}

document.getElementById("next_1").onclick = function () {
    let userInput1 = document.getElementById("Q1B1").value;
    let userInput2 = document.getElementById("Q1B2").value;

    let correctAnswer1 = question[currentQue].answer1;
    let correctAnswer2 = question[currentQue].answer2;

    if (userInput1 === correctAnswer1 && userInput2 === correctAnswer2) {
        alert("✅ Correct! +10 Points");
        userscore += 10;
    } else {
        alert("❌ Incorrect! -5 Points");
        userscore -= 5;
    }

    document.getElementById("scoreBox").textContent = `Score: ${userscore}`; // Update Score UI
    sessionStorage.setItem("round_3_score", userscore);
    currentQue++;

    if (currentQue < question.length) {
        document.querySelector(".question_Numb").textContent = `Question ${currentQue + 1}`;
        loadQuestion();
    } else {
        alert("🎉 Quiz Completed! Final Score: " + userscore);
        document.getElementById("question").innerHTML = "You've completed all questions!";
        document.getElementById("next_1").disabled = true;
    }
};

loadQuestion();

// function endscore(score){
//     let scoreBox = document.getElementById("End_score_box"); 
//     scoreBox.innerHTML = 'YOUR FINAL SCORE IS $("round_3_score")'; 
// }
//  document.getElementById("End_score_box").textContent = `Score: ${round_3_score}`



//info box

let infoBox = document.getElementById("infoBox");
let popupBox = document.getElementById("popupBox");
let closeBtn = document.getElementById("closeBtn");

// Expand Box on Click
infoBox.onclick = function () {
    popupBox.style.display = "flex";
};

//  Close the Box
closeBtn.onclick = function () {
    popupBox.style.display = "none";
};

// Toggle Calculator Visibility
document.getElementById("calcBtn").onclick = function () {
    let calcPanel = document.getElementById("calcPanel");
    calcPanel.style.display =
        calcPanel.style.display === "block" ? "none" : "block";
};

// Calculator Logic
function calcInput(value) {
    document.getElementById("calcScreen").value += value;
}

function calcClear() {
    document.getElementById("calcScreen").value = "";
}

function calcCalculate() {
    try {
        document.getElementById("calcScreen").value = eval(
            document.getElementById("calcScreen").value
        );
    } catch {
        document.getElementById("calcScreen").value = "Error";
    }
}
