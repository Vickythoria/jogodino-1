const dino = document.querySelector('.dino');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.cloud');
const cloud2 = document.querySelector('.cloud2');
const questionBox = document.getElementById('questionBox');
const backButton = document.getElementById('backButton');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

let score = 0;
let gameLoop;
let scoreInterval;
let timerInterval;
let startTime;
let elapsedTime = 0;

const updateScore = () => {
    score += 1;
    scoreElement.textContent = `Pontuação: ${score}`;
}

const startScore = () => {
    scoreInterval = setInterval(updateScore, 100); // Atualiza a pontuação a cada 100ms
}

const stopScore = () => {
    clearInterval(scoreInterval);
}

const jump = () => {
    dino.classList.add('jump');
    setTimeout(() => {
        dino.classList.remove('jump');
    }, 500);
}

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
}

// Event Listeners
document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);

// Inicializa o jogo
startScore();
startTimer();
startGameLoop();