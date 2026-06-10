document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const screens = {
        start: document.getElementById('start-screen'),
        quiz: document.getElementById('quiz-screen'),
        results: document.getElementById('results-screen')
    };

    const startBtn = document.getElementById('start-btn');
    const startSavedBtn = document.getElementById('start-saved-btn');
    const saveQBtn = document.getElementById('save-q-btn');
    const nextBtn = document.getElementById('next-btn');
    const restartBtn = document.getElementById('restart-btn');
    
    const optionsContainer = document.getElementById('options-container');
    const questionText = document.getElementById('question-text');
    const currentQNum = document.getElementById('current-q-num');
    const totalQNum = document.getElementById('total-q-num');
    const totalQPreview = document.getElementById('total-q-preview');
    const savedQPreview = document.getElementById('saved-q-preview');
    const progressFill = document.getElementById('progress-fill');
    const feedbackMessage = document.getElementById('feedback-message');
    const explanationBox = document.getElementById('explanation-box');
    const explanationText = document.getElementById('explanation-text');
    
    // State
    let currentQuestionIndex = 0;
    let score = 0;
    let answered = false;
    let currentQuizPool = [];
    
    // Load saved indices from localStorage
    let savedIndices = JSON.parse(localStorage.getItem('savedQuestions') || '[]');

    // Initialize
    const totalQuestions = quizData.length;
    totalQPreview.textContent = totalQuestions;
    updateSavedCount();

    function updateSavedCount() {
        savedQPreview.textContent = savedIndices.length;
        if (savedIndices.length > 0) {
            startSavedBtn.classList.remove('hidden');
        } else {
            startSavedBtn.classList.add('hidden');
        }
    }

    function showScreen(screenName) {
        Object.values(screens).forEach(screen => {
            screen.classList.remove('active');
        });
        screens[screenName].classList.add('active');
    }

    function startQuiz(mode = 'all') {
        score = 0;
        currentQuestionIndex = 0;
        
        if (mode === 'saved' && savedIndices.length > 0) {
            // Filter quizData to only include saved indices
            currentQuizPool = quizData.map((q, idx) => ({...q, originalIndex: idx}))
                                      .filter(q => savedIndices.includes(q.originalIndex));
            // Shuffle the saved questions for variety
            currentQuizPool.sort(() => Math.random() - 0.5);
        } else {
            // Use all questions
            currentQuizPool = quizData.map((q, idx) => ({...q, originalIndex: idx}));
        }
        
        totalQNum.textContent = currentQuizPool.length;
        showScreen('quiz');
        loadQuestion();
    }

    function loadQuestion() {
        answered = false;
        nextBtn.classList.add('hidden');
        explanationBox.classList.add('hidden');
        feedbackMessage.textContent = '';
        feedbackMessage.className = 'feedback-message';

        const currentQ = currentQuizPool[currentQuestionIndex];
        
        // Update progress
        currentQNum.textContent = currentQuestionIndex + 1;
        const progressPercent = ((currentQuestionIndex) / currentQuizPool.length) * 100;
        progressFill.style.width = `${progressPercent}%`;

        // Render text
        questionText.textContent = currentQ.question;
        
        // Render options
        optionsContainer.innerHTML = '';
        currentQ.options.forEach(option => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = option;
            btn.onclick = () => selectOption(btn, option, currentQ.answer);
            optionsContainer.appendChild(btn);
        });

        // Update Save Button state
        if (savedIndices.includes(currentQ.originalIndex)) {
            saveQBtn.classList.add('saved');
            saveQBtn.title = "Remove from saved";
        } else {
            saveQBtn.classList.remove('saved');
            saveQBtn.title = "Save this question";
        }
    }

    function toggleSaveQuestion() {
        const currentQ = currentQuizPool[currentQuestionIndex];
        const idx = currentQ.originalIndex;
        
        const pos = savedIndices.indexOf(idx);
        if (pos > -1) {
            // Remove it
            savedIndices.splice(pos, 1);
            saveQBtn.classList.remove('saved');
            saveQBtn.title = "Save this question";
        } else {
            // Add it
            savedIndices.push(idx);
            saveQBtn.classList.add('saved');
            saveQBtn.title = "Remove from saved";
        }
        
        localStorage.setItem('savedQuestions', JSON.stringify(savedIndices));
        updateSavedCount();
    }

    function selectOption(selectedBtn, selectedText, correctAnswer) {
        if (answered) return;
        answered = true;

        const isCorrect = selectedText === correctAnswer;
        
        // Disable all buttons
        const allBtns = optionsContainer.querySelectorAll('.option-btn');
        allBtns.forEach(btn => {
            btn.disabled = true;
            if (btn.textContent === correctAnswer) {
                btn.classList.add('correct'); // Reveal correct answer
            }
        });

        if (isCorrect) {
            score++;
            feedbackMessage.textContent = 'Correct! 🎉';
            feedbackMessage.classList.add('success');
        } else {
            selectedBtn.classList.add('wrong');
            feedbackMessage.textContent = 'Incorrect! 😢';
            feedbackMessage.classList.add('error');
            
            // Auto-save wrong question
            const currentQ = currentQuizPool[currentQuestionIndex];
            if (!savedIndices.includes(currentQ.originalIndex)) {
                savedIndices.push(currentQ.originalIndex);
                localStorage.setItem('savedQuestions', JSON.stringify(savedIndices));
                updateSavedCount();
                saveQBtn.classList.add('saved');
                saveQBtn.title = "Remove from saved";
            }
        }

        // Show Explanation
        const currentQ = currentQuizPool[currentQuestionIndex];
        explanationText.textContent = currentQ.explanation || "عذراً، لا يوجد شرح إضافي لهذا السؤال.";
        explanationBox.classList.remove('hidden');

        // Show Next button
        if (currentQuestionIndex < currentQuizPool.length - 1) {
            nextBtn.textContent = 'Next ➔';
        } else {
            nextBtn.textContent = 'Finish 🏁';
        }
        nextBtn.classList.remove('hidden');
    }

    function nextQuestion() {
        if (currentQuestionIndex < currentQuizPool.length - 1) {
            currentQuestionIndex++;
            loadQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        showScreen('results');
        
        document.getElementById('final-score').textContent = score;
        document.getElementById('final-total').textContent = currentQuizPool.length;
        
        const percentage = Math.round((score / currentQuizPool.length) * 100) || 0;
        document.getElementById('score-percentage').textContent = `${percentage}%`;
        
        const circlePath = document.getElementById('score-circle-path');
        circlePath.setAttribute('stroke-dasharray', `${percentage}, 100`);
        
        const commentEl = document.getElementById('score-comment');
        circlePath.classList.remove('score-excellent', 'score-good', 'score-needs-work');
        
        if (percentage >= 85) {
            circlePath.classList.add('score-excellent');
            commentEl.textContent = 'Outstanding! 🌟';
            commentEl.style.color = 'var(--success)';
        } else if (percentage >= 60) {
            circlePath.classList.add('score-good');
            commentEl.textContent = 'Good job! 👍';
            commentEl.style.color = '#fbbf24';
        } else {
            circlePath.classList.add('score-needs-work');
            commentEl.textContent = 'Needs practice. 💪';
            commentEl.style.color = 'var(--danger)';
        }
    }

    // Event Listeners
    startBtn.addEventListener('click', () => startQuiz('all'));
    startSavedBtn.addEventListener('click', () => startQuiz('saved'));
    nextBtn.addEventListener('click', nextQuestion);
    restartBtn.addEventListener('click', () => {
        showScreen('start');
        updateSavedCount(); // Refresh stats
    });
    saveQBtn.addEventListener('click', toggleSaveQuestion);
});
