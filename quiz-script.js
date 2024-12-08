/* Quiz */
const submitButton = document.getElementById('submit');
const quizForm = document.getElementById('quiz-form');
const scoreContainer = document.getElementById('score-container');
const scoreDisplay = document.getElementById('score');

// Correct answers for the quiz questions
const correctAnswers = {
    q1: 'Spirit Bomb',
    q2: 'Kurama',
    q3: 'Shangri-La Frontier',
    q4: 'Tensa Zangetsu',
    q5: 'Mythical Zoan-Type'
};

submitButton.addEventListener('click', () => {
    let score = 0;
    let isComplete = true;

    // Check all questions
    for (let i = 1; i <= 5; i++) {
        const selected = quizForm[`q${i}`];
        const selectedAnswer = [...selected].find((option) => option.checked);

        if (selectedAnswer) {
        if (selectedAnswer.value === correctAnswers[`q${i}`]) {
            score++;
        }
        } else {
        isComplete = false;
        alert(`Question ${i} is not answered.`);
        break;
        }
    }

    if (isComplete) {
        // Show the score
        scoreDisplay.textContent = score;
        scoreContainer.style.display = 'block';
    }
});

/* Quiz (Button-Function)*/
// Show
document.getElementById('quiz-show').addEventListener('click', function() {
    const quizApp = document.getElementById('quiz-app');
    quizApp.style.display = 'flex';
});

// Hide
document.getElementById('quiz-close').addEventListener('click', function() {
    const quizButton = document.getElementById('quiz-app');
    quizButton.style.display = 'none';
});