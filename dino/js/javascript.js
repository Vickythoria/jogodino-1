const dino = document.querySelector('.dino');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.cloud');
const cloud2 = document.querySelector('.cloud2');
const gameOver = document.querySelector('.game-over');
const restartButton = document.querySelector('.restart');
const questionBox = document.getElementById('questionBox');
const correctAnswer = '5';

let score = 0;
let gameLoop;
let scoreInterval;

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

const loop = setInterval (() => {
    const pipePosition = pipe.offsetLeft;
    const dinoPosition = +window.getComputedStyle(dino).bottom.replace('px', '');
    
    if(pipePosition<=80 && dinoPosition<=55  && pipePosition>0){
        pipe.style.animation = 'none';
        dino.style.animation = 'none';
        pipe.style.left=`${pipePosition}px`;
        dino.style.bottom= dinoPosition+'px';
        console.log(pipePosition)
        //dino.src = 'assets/imgs/game-over.png';
        dino.style.width = '100px';
        cloud.style.animation = 'cloud 20s infinite linear';
        cloud2.style.animation = 'cloud 30s infinite linear';
        //showModal(); // Exibe a modal ao colidir com o obstáculo
        questionBox.style.display = 'block'; // Exibe a modal com a pergunta
        stopScore(); // Para a pontuação
        clearInterval(gameLoop); // Pausa o loop do jogo

    }
},10);


// Função para verificar a resposta escolhida pelo jogador
function checkAnswer(answer) {
    const correctAnswer = 'Brasília'; // Defina a resposta correta aqui

    if (answer === correctAnswer) {
        alert('Resposta correta!');
        // Adicione ações adicionais ao acertar a resposta (continuar o jogo, etc.)
    } else {
        alert('Resposta incorreta. Fim do jogo!');
        // Adicione ações adicionais ao errar a resposta (reiniciar o jogo, etc.)
    }

    // Oculta a modal após responder
    questionBox.style.display = 'none';
}

// Event Listeners
document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);

/*restartButton.addEventListener('click', restart);*/

// Inicializa o jogo
//restart();


