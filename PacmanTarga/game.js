
document.addEventListener('DOMContentLoaded',() =>{
    const scoreDisplay = document.getElementById('score');
    const width = 28;
    let score = 0;
    const griglia = document.querySelector('.griglia');

    // 0 = pac-dots
    // 1 = wall
    // 2 = ghost-lair
    // 3 = power-pellet
    // 4 = vuoto
    const layout = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ]

    const squares = [];

    //creazione asse
    function createBoard(){
        for(let i=0; i<layout.length; i++){
            const square = document.createElement('div');
            square.id = i;
            griglia.appendChild(square);
            squares.push(square);
            //aggiungo layout alla scheda
            if(layout[i]===0){
                squares[i].classList.add('pac-dot'); 
            }
            if(layout[i]===1){
                squares[i].classList.add('wall'); 
            }
            if(layout[i]===2){
                squares[i].classList.add('ghost-lair'); 
            }
            if(layout[i]===3){
                squares[i].classList.add('power-pellet'); 
            }
        }
    }
    createBoard();

    //create pac-man
    let pacmanIndex = 490;
    squares[pacmanIndex].classList.add('pac-man');

    //spostamento del pacman
    function movePacman(e){
        squares[pacmanIndex].classList.remove('pac-man');
        switch(e.key) {
            case 'ArrowLeft':
                if(pacmanIndex%width !==0 && 
                    !squares[pacmanIndex-1].classList.contains('wall') &&
                    !squares[pacmanIndex-1].classList.contains('ghost-lair')){

                        pacmanIndex -=1
                }
                if((pacmanIndex-1) === 363){
                    pacmanIndex= 391;
                }
                break;
            case 'ArrowRight':
                if(pacmanIndex % width < width-1 &&
                    !squares[pacmanIndex+1].classList.contains('wall') &&
                    !squares[pacmanIndex+1].classList.contains('ghost-lair')){

                        pacmanIndex+=1
                }
                if((pacmanIndex+1) === 392){
                    pacmanIndex = 364;
                }
                break;
            case 'ArrowUp':
                if(pacmanIndex - width >=0 &&
                    !squares[pacmanIndex - width].classList.contains('wall')&&
                    !squares[pacmanIndex - width].classList.contains('ghost-lair')){
                    
                        pacmanIndex -= width
                }   
                if((pacmanIndex+1) === 392){
                    pacmanIndex = 364;
                }           
                break;
            case 'ArrowDown':
                if(pacmanIndex + width < width * width &&
                    !squares[pacmanIndex + width].classList.contains('wall')&&
                    !squares[pacmanIndex + width].classList.contains('ghost-lair')){
                        
                        pacmanIndex += width
                    }            
                break;
        }
        squares[pacmanIndex].classList.add('pac-man');
        dotEaten();
        powerPelletEaten();
        checkGameOver();
        checkWin();

    }
    document.addEventListener('keyup',movePacman);

    //dopo aver mangiato un pac-dot
    function dotEaten(){
        if(squares[pacmanIndex].classList.contains('pac-dot')){
            score++;
            scoreDisplay.innerHTML = score;
            squares[pacmanIndex].classList.remove('pac-dot');
        }
    }
    
    //dopo aver mangiato un power-pellet
    function powerPelletEaten(){
        if(squares[pacmanIndex].classList.contains('power-pellet')){
            score +=10;
            scoreDisplay.innerHTML= score;
            ghosts.forEach(ghost =>ghost.scared = true);
            setTimeout(unScareG,10000);
            squares[pacmanIndex].classList.remove('power-pellet');
        }
    }
    
    //far smettere di scattare il ghost
    function unScareG(){
        ghosts.forEach(ghost =>ghost.scared = false);
    }

    //creazione ghosts grazie ad un costruttora
    class Ghost{
        constructor(className, startIndex,speed){
            this.className = className;
            this.startIndex = startIndex;
            this.speed = speed;
            this.currentIndex = startIndex;
            this.scared = false;
            this.timer = NaN;
        }
    }
    
    //ghosts
    ghosts = [
        new Ghost('lampeg',348,250),
        new Ghost('pinky',376,400),
        new Ghost('ink',351,300),
        new Ghost('clyde',379,500),
    ];
    
    //creo i ghost nella mappa
    ghosts.forEach(ghost => {
        squares[ghost.currentIndex].classList.add(ghost.className,'ghost');
    })

    //movimento ghosts randomico
    ghosts.forEach(ghost => moveGhost(ghost));

    function moveGhost(ghost){
        const directions = [-1,1,width,-width];
        let direction = directions[Math.floor(Math.random()*directions.length)];

        ghost.timer = setInterval(function(){
            if(!squares[ghost.currentIndex + direction].classList.contains('ghost')&&
                !squares[ghost.currentIndex + direction].classList.contains('wall')){

                    squares[ghost.currentIndex].classList.remove(ghost.className,'ghost','scaredG');
                    ghost.currentIndex += direction;
                    squares[ghost.currentIndex].classList.add(ghost.className,'ghost');

                    //trova una nuova direzione se è false
                }else direction = directions[Math.floor(Math.random()*directions.length)];

                //se il ghost è spaventato
                if(ghost.scared){
                    squares[ghost.currentIndex].classList.add('scaredG');
                }
                
                //se il ghost è spaventato e il pacman lo prende
                if(ghost.scared && squares[ghost.currentIndex].classList.contains('pac-man')){
                    squares[ghost.currentIndex].classList.remove(ghost.className,'ghost','scaredG');
                    ghost.currentIndex = ghost.startIndex;
                    score+=100;
                    scoreDisplay.innerHTML = score;
                    squares[ghost.currentIndex].classList.add(ghost.className,'ghost');
                }
            checkGameOver();
        },ghost.speed)
    }

    //cotrolla il game over
    function checkGameOver(){
        if(squares[pacmanIndex].classList.contains('ghost')&&
            !squares[pacmanIndex].classList.contains('scaredG')){
                ghosts.forEach(ghost => clearInterval(ghost.timer));
                document.addEventListener('keyup',movePacman)
                setTimeout(function(){
                    alert('GAME OVER, SCARSO!!');
                },500);
            }
    }

    //controlla la vittoria
    function checkWin(){
        if(score>=274){
            ghosts.forEach(ghost => clearInterval(ghost.timer));
            document.removeEventListener('keyup',movePacman);
            setTimeout(function(){
                alert('HAI VINTO, BRAVISSIMO!!')
            },500);
        }
    }












})
