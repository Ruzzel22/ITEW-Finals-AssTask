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

// Function to load selected answers from local storage
function loadSelectedAnswers() {
    for (let i = 1; i <= 5; i++) {
        const savedAnswer = localStorage.getItem(`q${i}`);
        if (savedAnswer) {
            const options = quizForm[`q${i}`];
            [...options].forEach(option => {
                if (option.value === savedAnswer) {
                    option.checked = true;
                }
            });
        }
    }
}

// Save selected answer to local storage when checked
quizForm.addEventListener('change', (event) => {
    const { name, value } = event.target;
    if (event.target.checked) {
        localStorage.setItem(name, value);
    }
});

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
        
        // Scroll to the score container
        scoreContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Clear the saved answers
        for (let i = 1; i <= 5; i++) {
            localStorage.removeItem(`q${i}`);
        }
        
        // Reset the form
        quizForm.reset();
    }
});

/* Quiz (Button-Function)*/
// Show
document.getElementById('quiz-show').addEventListener('click', function() {
    const quizApp = document.getElementById('quiz-app');
    quizApp.style.display = 'flex';
    loadSelectedAnswers(); // Load saved answers when showing the quiz
});

// Hide
document.getElementById('quiz-close').addEventListener('click', function() {
    const quizButton = document.getElementById('quiz-app');
    quizButton.style.display = 'none';
    scoreContainer.style.display = 'none';
});