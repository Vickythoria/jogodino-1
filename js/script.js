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

