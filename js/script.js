/*REBECA*/
const dino = document.querySelector('.dino');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.cloud');
const cloud2 = document.querySelector('.cloud2');
const gameOver = document.querySelector('.game-over');
const restartButton = document.querySelector('.restart');
const questionBox = document.getElementById('questionBox');
const scoreElement = document.getElementById('score');
const startButton = document.getElementById('startButton');
const correctAnswer = '5';

let score = 0;
let gameLoop;
let scoreInterval;

const questions = [
    {
        text: "Se uma turma tem 20 alunos e 25% deles estão usando camisetas azuis, temos quantos alunos vestidos de azul?",
        options: ["5", "12", "8"],
        answer: 0
    },
    {
        text: "Qual a capital do Brasil?",
        options: ["Brasília", "Rio de Janeiro", "São Paulo"],
        answer: 0
    },
    {
        text: "Quantos estados tem o Brasil?",
        options: ["26", "27", "28"],
        answer: 1
    }
];

let usedQuestions = [];

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

const getNextQuestion = () => {
    if (usedQuestions.length === questions.length) {
        usedQuestions = [];
    }

    let nextQuestionIndex;
    do {
        nextQuestionIndex = Math.floor(Math.random() * questions.length);
    } while (usedQuestions.includes(nextQuestionIndex));

    usedQuestions.push(nextQuestionIndex);
    return questions[nextQuestionIndex];
}

const showNextQuestion = () => {
    const question = getNextQuestion();
    questionText.innerHTML = question.text;
    const buttons = questionBox.querySelectorAll('button');
    buttons.forEach((button, index) => {
        button.textContent = `${['A', 'B', 'C'][index]}- ${question.options[index]}`;
        button.onclick = () => checkAnswer(index, question.answer);
    });
}

const checkAnswer = (selectedAnswer, correctAnswer) => {
    if (selectedAnswer === correctAnswer) {
        alert('Resposta correta!');
        // Adicione ações adicionais ao acertar a resposta (continuar o jogo, etc.)
    } else {
        alert('Resposta incorreta. Fim do jogo!');
        // Adicione ações adicionais ao errar a resposta (reiniciar o jogo, etc.)
    }

    // Oculta a modal após responder
    questionBox.style.display = 'none';
    startGame();
}

function iniciarJogo(){
    document.getElementById('iframeDino').style.display = 'block';
}
function inicioJogo (){
    pipe.classList.add('movimento');
}
const startGame = () => {
    startButton.addEventListener('click', startGame);
    startButton.style.display = 'none'; // Oculta o botão de iniciar
    gameBoard.style.display = 'block'; // Exibe o tabuleiro do jogo
    startScore(); // Inicia a pontuação
    gameLoop = setInterval(loop, 10); // Inicia o loop do jogo
}

/*YARA*/ 

document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio real do formulário

    // Exibe a notificação
    var notification = document.getElementById('notification');
    notification.style.display = 'block';

    // Oculta a notificação após 3 segundos
    setTimeout(function() {
        notification.style.display = 'none';
    }, 3000);

    // Aqui você pode adicionar a lógica de envio do formulário via AJAX ou outra ação necessária
});

