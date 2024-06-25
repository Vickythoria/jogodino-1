const dino = document.querySelector('.dino');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.cloud');
const cloud2 = document.querySelector('.cloud2');
const questionBox = document.getElementById('questionBox');
const backButton = document.getElementById('backButton');
<<<<<<< HEAD
const timerElement = document.getElementById('timer');
const scoreElement = document.getElementById('score');
questionBox.style.display='none';
=======
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
>>>>>>> ece432adebca1e05962a4236f93749472612bb08

let score = 0;
let gameLoop;
let scoreInterval;
let timerInterval;
let startTime;
let elapsedTime = 0;
<<<<<<< HEAD

const questions = [
    {
        question: "Se um produto custava R$ 120 e aumentou 15%, qual é o novo preço?",
        answers: ["R$130", "R$138", "R$138,50", "R$145"],
        correct: 1
    },
    {
        question: "Qual é 25% de 80?",
        answers: ["10", "15", "20", "25"],
        correct: 2
    },
    {
        question: "Se um desconto de 30% é aplicado a um item que custava R$ 200, qual é o preço final?",
        answers: ["R$120", "R$140", "R$160", "R$180"],
        correct: 0
    },
    {
        question: "O que é 50% de 80?",
        answers: ["40", "50", "20", "60"],
        correct: 0
    }
];

let currentQuestionIndex = -1;
let usedQuestions = [];

function getRandomQuestion() {
    if (usedQuestions.length === questions.length) {
        usedQuestions = [];
    }

    let questionIndex;
    do {
        questionIndex = Math.floor(Math.random() * questions.length);
    } while (usedQuestions.includes(questionIndex));

    usedQuestions.push(questionIndex);
    return questionIndex;
}

function showNextQuestion() {
    currentQuestionIndex = getRandomQuestion();
    const question = questions[currentQuestionIndex];

    document.getElementById('question').textContent = question.question;
    const answerButtons = document.querySelectorAll('.answer-btn');
    answerButtons.forEach((button, index) => {
        button.textContent = question.answers[index];
    });
}

function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    if (selectedIndex === question.correct) {
        pipe.style.left = '150%';
        dino.style.bottom = '1px';
        alert("Resposta correta!");
        pipe.style.left='';        
        questionBox.style.display = 'none';
        backButton.style.display = 'none';
        pipe.style.animation = '';
        dino.style.animation = '';
        showNextQuestion();
        startScore();
        startTimer();
        gameLoop = setInterval(loop, 10);
    } else {
        alert("Resposta errada! Fim do jogo!");
        location.reload();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showNextQuestion();
    startTimer();
});
=======
>>>>>>> ece432adebca1e05962a4236f93749472612bb08

const updateScore = () => {
    score += 1;
    scoreElement.textContent = `Pontuação: ${score}`;
}

const startScore = () => {
    scoreInterval = setInterval(updateScore, 100);
}

const stopScore = () => {
    clearInterval(scoreInterval);
}

<<<<<<< HEAD
const startTimer = () => {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        timerElement.textContent = `Tempo: ${formatTime(elapsedTime)}`;
    }, 1000);
}

const stopTimer = () => {
    clearInterval(timerInterval);
}

const resetTimer = () => {
    elapsedTime = 0;
    timerElement.textContent = `Tempo: 0s`;
}

const formatTime = (time) => {
    const seconds = Math.floor(time / 1000);
    return `${seconds}s`;
}

=======
>>>>>>> ece432adebca1e05962a4236f93749472612bb08
const jump = () => {
    dino.classList.add('jump');
    setTimeout(() => {
        dino.classList.remove('jump');
    }, 500);
}

<<<<<<< HEAD
const loop = () => {
    const pipePosition = pipe.offsetLeft;
    const dinoPosition = +window.getComputedStyle(dino).bottom.replace('px', '');
    
    if (pipePosition <= 80 && dinoPosition <= 55 && pipePosition > 0) {
        pipe.style.animation = 'none';
        dino.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        dino.style.bottom = `${dinoPosition}px`;
        cloud.style.animation = 'cloud 20s infinite linear';
        cloud2.style.animation = 'cloud 30s infinite linear';
        questionBox.style.display = 'flex';
        backButton.style.display = 'block';
        stopScore();
        stopTimer();
        clearInterval(gameLoop);
    }
=======
const startGameLoop = () => {
    gameLoop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const dinoPosition = +window.getComputedStyle(dino).bottom.replace('px', '');

        if (pipePosition <= 80 && dinoPosition <= 55 && pipePosition > 0) {
            // Para as animações
            pipe.style.animation = 'none';
            dino.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
            dino.style.bottom = `${dinoPosition}px`;

            dino.style.width = '100px';
            cloud.style.animation = 'cloud 20s infinite linear';
            cloud2.style.animation = 'cloud 30s infinite linear';

            // Exibe a modal com a pergunta
            questionBox.style.display = 'block';
            stopScore(); // Para a pontuação
            stopTimer(); // Para o timer
            clearInterval(gameLoop); // Pausa o loop do jogo
        }
    }, 10);
}

const startTimer = () => {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        timerElement.textContent = `Tempo: ${formatTime(elapsedTime)}`;
    }, 1000);
}

const stopTimer = () => {
    clearInterval(timerInterval);
}

const resetTimer = () => {
    elapsedTime = 0;
    timerElement.textContent = `Tempo: 0s`;
}

const formatTime = (time) => {
    const seconds = Math.floor(time / 1000);
    return `${seconds}s`;
}

// Função para verificar a resposta escolhida pelo jogador
function checkAnswer(answer) {
    const correctAnswer = '5'; // Defina a resposta correta aqui

    if (answer === correctAnswer) {
        alert('Resposta correta!');
        // Adicione ações adicionais ao acertar a resposta (continuar o jogo, etc.)
    } else {
        alert('Resposta incorreta. Fim do jogo!');
        // Adicione ações adicionais ao errar a resposta (reiniciar o jogo, etc.)
    }

    // Oculta a modal após responder
    questionBox.style.display = 'none';
    backButton.style.display = 'none';
>>>>>>> ece432adebca1e05962a4236f93749472612bb08
}

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);

<<<<<<< HEAD
gameLoop = setInterval(loop, 10);
=======
// Inicializa o jogo
startScore();
startTimer();
startGameLoop();
>>>>>>> ece432adebca1e05962a4236f93749472612bb08
