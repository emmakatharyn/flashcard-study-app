const flashcard = document.getElementById('flashcard');
const questionDiv = document.querySelector('.question');
const answerDiv = document.querySelector('.answer');
const pinyinDiv = document.querySelector('.pinyin');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const flipBtn = document.getElementById('flip-btn');
const addCardForm = document.getElementById('add-card-form');
const questionInput = document.getElementById('question-input');
const answerInput = document.getElementById('answer-input');
const pinyinInput = document.getElementById('pinyin-input');
const flashcardCount = document.getElementById('flashcard-count');

let flashcards = [];
let currentCard = 0;

function updateCountDisplay() {
    flashcardCount.textContent = `${currentCard + 1}/${flashcards.length}`;
}

// function to update flashcard display
function updateFlashcard() {
    const card = flashcards[currentCard];
    pinyinDiv.textContent = card.pinyin;
    questionDiv.textContent = card.question;
    answerDiv.textContent = card.answer;
    answerDiv.classList.add('hidden');
    pinyinDiv.classList.add('hidden');
    updateCountDisplay();
}

// event listener for flipping the card
flipBtn.addEventListener('click', () => {
    answerDiv.classList.toggle('hidden');
    pinyinDiv.classList.toggle('hidden');
});

// event listeners for navigation buttons
nextBtn.addEventListener('click', () => {
    if (currentCard < flashcards.length - 1) {
        currentCard++;
        updateFlashcard();
        updateCountDisplay();
    }
})

prevBtn.addEventListener('click', () => {
    if (currentCard > 0) {
        currentCard--;
        updateFlashcard();
        updateCountDisplay();
    }
})

// add new flashcard from form
addCardForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const newCard = {
        question: questionInput.value,
        answer: answerInput.value,
        pinyin: pinyinInput.value,
    };
    flashcards.push(newCard);
    updateCountDisplay();
    questionInput.value = '';
    answerInput.value = '';
    pinyinInput.value = '';
    if (flashcards.length === 1) {
        updateFlashcard();

    }
})

questionDiv.textContent = "Add your first flashcard!";