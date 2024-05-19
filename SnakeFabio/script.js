const areaGioco = document.querySelector(".areaGioco");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");
const controlli = document.querySelectorAll(".controlli");

let gameOver = false, paused = false;;
let foodX, foodY;
let snakeX = 5, snakeY = 5;
let velocitaX = 0, velocitaY = 0;
let corpoSnake = [];
let setIntervalId;
let score = 0;
let ostacoli = [], ostacoloX, ostacoloY, nOstacoli = 0;
let ostacoliAttivi = false;
let html;

// L'High-Score viene caricato dal local storage
let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerText = `High Score: ${highScore}`;

const aggiornaPosizioneCibo = () => {
    // Genera la posizione del cibo da 1 a 30
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

const generaOstacoli = () => {
    ostacoli = [];
    for (let i = 0; i < nOstacoli; i++) { // Aggiungi gli ostacoli
        ostacoloX = Math.floor(Math.random() * 30) + 1;
        ostacoloY = Math.floor(Math.random() * 30) + 1;
        ostacoli.push([ostacoloX, ostacoloY]);
    }
}

const GameOver = () => {
    // Game Over = ricarica della pagina, cancellazione del punteggio
    clearInterval(setIntervalId);
    alert("Game Over!");
    location.reload();
}

const cambiaDirezione = e => {
    if (e.key === "Escape") {
        togglePause();  // Chiama la funzione di pausa/ripresa
        return;
    }

    if (paused) 
    {
        return;  // Ignora gli input quando il gioco è in pausa
    }

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

const togglePause = () => {
    paused = !paused;// true = !true (false) - false = !false(true)

    if (paused) {
        clearInterval(setIntervalId);
        alert("Hai messo il gioco in pausa (Premi Esc di nuovo per continuare il gioco)");
    } else {
        setIntervalId = setInterval(iniziaPartita, 80);
    }
}

controlli.forEach(button => button.addEventListener("click", () => cambiaDirezione({ key: button.dataset.key })));

const iniziaPartita = () => {

    if(gameOver) 
    {
        return GameOver();
    }

    html = `<div class="head" style="grid-area: ${snakeY} / ${snakeX}"></div>`;
    html = `<div class="food" style="grid-area: ${foodY} / ${foodX}"><img src="Image/apple.png" width="25"></div>`

    if(snakeX === foodX && snakeY === foodY) {
        aggiornaPosizioneCibo();
        corpoSnake.push([foodY, foodX]);
        ostacoli.push([foodY, foodX]);
        nOstacoli++;
        score++;
        if (score > highScore)
        {
            highScore = score;
        }
        localStorage.setItem("high-score", highScore);
        scoreElement.innerText = `Score: ${score}`;
        highScoreElement.innerText = `High Score: ${highScore}`;
    }

    snakeX += velocitaX;
    snakeY += velocitaY;

    for (let i = corpoSnake.length - 1; i > 0; i--) {
        corpoSnake[i] = corpoSnake[i - 1];
    }
    corpoSnake[0] = [snakeX, snakeY];

    if(snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
        return gameOver = true;
    }

    for (let i = 0; i < corpoSnake.length; i++) {
        html += `<div class="head" style="grid-area: ${corpoSnake[i][1]} / ${corpoSnake[i][0]}"></div>`;
        if (i !== 0 && corpoSnake[0][1] === corpoSnake[i][1] && corpoSnake[0][0] === corpoSnake[i][0]) {
            gameOver = true;
        }
    }

    if (ostacoliAttivi) {
        ostacoli.forEach(ostacolo => {
            html += `<div class="ostacoli" style="grid-area: ${ostacolo[1]} / ${ostacolo[0]}"><img src="Image/ostacolo.png" width="25"></div>`;
            if (snakeX === ostacolo[0] && snakeY === ostacolo[1]) {
                gameOver = true;
            }
        });
    }

    areaGioco.innerHTML = html;
}

const attivaOstacoli = () => {
    ostacoliAttivi = !ostacoliAttivi;

    if (ostacoliAttivi) {
        alert("Hai attivato gli ostacoli");
        generaOstacoli();
    }
    else
    {
        alert("Gli ostacoli sono stati disattivati");
    }

}

aggiornaPosizioneCibo();
setIntervalId = setInterval(iniziaPartita, 80);
document.addEventListener("keyup", cambiaDirezione);
