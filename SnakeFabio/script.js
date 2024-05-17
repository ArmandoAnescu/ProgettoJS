const areaGioco = document.querySelector(".areaGioco");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");
const controlli = document.querySelectorAll(".controlli");

let gameOver = false;
let foodX, foodY;
let snakeX = 5, snakeY = 5;
let velocitaX = 0, velocitaY = 0;
let corpoSnake = [];
let setIntervalId;
let score = 0;

// L'High-Score viene caricato dal local storage
let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerText = `High Score: ${highScore}`;

const aggiornaPosizioneCibo = () => {
    // Genera la posizione del cibo da 1 a 30
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

const GameOver = () => {
    // Game Over = ricarica della pagina, cancellazione del punteggio
    clearInterval(setIntervalId);
    alert("Game Over! Press OK to replay...");
    location.reload();
}

const cambiaDirezione = e => {
    // Cambia la velocità in base al tasto precedentemente premuto (non è possibile cambiare direzione a 180°, esempio cliccare che vada in basso e successivamente in alto)
    if(e.key === "ArrowUp" && velocitaY != 1) {
        velocitaX = 0;
        velocitaY = -1;//Per salire sull'asse Y il valore deve essere negativo
    } else if(e.key === "ArrowDown" && velocitaY != -1) {
        velocitaX = 0;
        velocitaY = 1;
    } else if(e.key === "ArrowLeft" && velocitaX != 1) {
        velocitaX = -1;//Per salire sull'asse X il valore deve essere negativo
        velocitaY = 0;
    } else if(e.key === "ArrowRight" && velocitaX != -1) {
        velocitaX = 1;
        velocitaY = 0;
    }
}

controlli.forEach(button => button.addEventListener("click", () => cambiaDirezione({ key: button.dataset.key })));

const iniziaPartita = () => {
    if(gameOver) return GameOver();
    let html = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;


    if(snakeX === foodX && snakeY === foodY)// Controlla se lo snake ha interagito col cibo
    {
        aggiornaPosizioneCibo();
        corpoSnake.push([foodY, foodX]);// Il cibo diventa parte dell'array dello snake allungandolo
        score++;
        highScore = score >= highScore ? score : highScore;
        localStorage.setItem("high-score", highScore);
        scoreElement.innerText = `Score: ${score}`;
        highScoreElement.innerText = `High Score: ${highScore}`;
    }
    // Cambia la direzione in base alla velocità ottenuta in cambiaDirezione
    snakeX += velocitaX;
    snakeY += velocitaY;
    
    // Permette ai pezzi dello snake di rimanere attaccati
    for (let i = corpoSnake.length - 1; i > 0; i--) {
        corpoSnake[i] = corpoSnake[i - 1];
    }
    corpoSnake[0] = [snakeX, snakeY];

    // Controlla che lo snake non vada a scontrarsi contro un muro
    if(snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
        return gameOver = true;
    }

    for (let i = 0; i < corpoSnake.length; i++) {
        // Aggiungo un div per ogni parte del copro dello snake per permettere di vederlo
        html += `<div class="head" style="grid-area: ${corpoSnake[i][1]} / ${corpoSnake[i][0]}"></div>`;
        // Controlla che lo snake non si scontri con se stesso
        if (i !== 0 && corpoSnake[0][1] === corpoSnake[i][1] && corpoSnake[0][0] === corpoSnake[i][0]) {
            gameOver = true;
        }
    }
    areaGioco.innerHTML = html;
}

aggiornaPosizioneCibo();
setIntervalId = setInterval(iniziaPartita, 100);
document.addEventListener("keyup", cambiaDirezione);