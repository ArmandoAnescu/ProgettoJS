const canvas = document.getElementById("canv");
const canvContext = canvas.getContext("2d");
const pacman = document.getElementById("anims");
const ghost = document.getElementById("ghosts");

let createRect = (x,y,width,height,color) =>{
    canvContext.fillStyle = color;
    canvContext.fillRect(x,y,width,height);
};
let fps= 30;
let blockSize = 20;
let wallColor = "#342DCA";
let wallWidth = blockSize / 1.5;
let wallOffset = (blockSize - wallWidth) / 2;
let innerWallColor = "black";
const DIRECTION_RIGHT = 4;
const DIRECTION_LEFT = 3;
const DIRECTION_BOTTOM = 2;
const DIRECTION_TOP = 1;
let map = [
    [1,1,1,1,1 ,1,1,1,1,1 , 1,1,1,1,1, 1,1,1,1,1, 1],
    [1,2,2,2,2 ,2,2,2,2,2 , 1,2,2,2,2, 2,2,2,2,2, 1],
    [1,2,1,1,1 ,2,1,1,1,2 , 1,2,1,1,1, 2,1,1,1,2, 1],
    [1,2,1,1,1 ,2,1,1,1,2 , 1,2,1,1,1, 2,1,1,1,2, 1],
    [1,2,2,2,2 ,2,2,2,2,2 , 2,2,2,2,2, 2,2,2,2,2, 1],
    [1,2,1,1,1 ,2,1,2,1,1 , 1,1,1,2,1, 2,1,1,1,2, 1],
    [1,2,2,2,2 ,2,1,2,2,2 , 1,2,2,2,1, 2,2,2,2,2, 1],
    [1,1,1,1,1 ,2,1,1,1,2 , 1,2,1,1,1, 2,1,1,1,1, 1],
    [0,0,0,0,1 ,2,1,2,2,2 , 2,2,2,2,1, 2,1,0,0,0, 0],
    [1,1,1,1,1 ,2,1,2,1,1 , 2,1,1,2,1, 2,1,1,1,1, 1],
    [2,2,2,2,2 ,2,2,2,1,2 , 2,2,1,2,2, 2,2,2,2,2, 1],
    [1,1,1,1,1 ,2,1,2,1,2 , 2,2,1,2,1, 2,1,1,1,1, 1],
    [0,0,0,0,1 ,2,1,2,1,1 , 1,1,1,2,1, 2,1,0,0,0, 0],
    [0,0,0,0,1 ,2,1,2,2,2 , 2,2,2,2,1, 2,1,0,0,0, 0],
    [1,1,1,1,1 ,2,2,2,2,1 , 1,1,1,2,2, 2,1,1,1,1, 1],
    [1,2,2,2,2 ,2,2,2,2,2 , 1,2,2,2,2, 2,2,2,2,2, 1],
    [1,2,1,1,1 ,2,1,1,1,2 , 1,2,1,1,1, 2,1,1,1,2, 1],
    [1,2,2,2,1 ,2,2,2,2,2 , 2,2,2,2,2, 2,1,2,2,2, 1],
    [1,1,2,2,2 ,2,1,2,1,1 , 1,1,1,2,1, 2,1,2,2,1, 1],
    [1,2,2,2,2 ,2,1,2,2,2 , 1,2,2,2,1, 2,2,2,2,2, 1],
    [1,2,1,1,1 ,1,1,1,1,2 , 1,2,1,1,1, 1,1,1,1,2, 1],
    [1,2,2,2,2 ,2,2,2,2,2 , 2,2,2,2,2, 2,2,2,2,2, 1],
    [1,1,1,1,1 ,1,1,1,1,1 , 1,1,1,1,1, 1,1,1,1,1, 1],
];

let game = () => {
    update();
    draw();
};

let update = () => {
    //todo
    pacman.moveProcess()
};

let draw = () => {
    createRect(0,0,canvas.width,canvas.height,"black");
    drawWall();
    pacman.draw();
};

let gameInterval = setInterval(game, 1000 / fps);

let drawWall = () =>{
    for(let i = 0; i < map.length; i++){
        for(let j = 0; j < map[0].length; j++){
            if(map[i][j] == 1){
                //questo vuol dire che è un muro
                createRect(
                    j*blockSize, 
                    i*blockSize,
                    blockSize,
                    blockSize,
                    wallColor);
                if(j > 0 && map[i][j-1] == 1){
                    createRect(
                        j*blockSize,
                        i*blockSize + wallOffset,
                        wallWidth + wallOffset,
                        wallWidth, 
                        innerWallColor);
                }
                if(j<map[0].length-1 && map[i][j+1] == 1){
                    createRect(
                        j*blockSize + wallOffset,
                        i*blockSize + wallOffset,
                        wallWidth + wallOffset,
                        wallWidth, 
                        innerWallColor);
                }
                if(i > 0 && map[i-1][j] == 1){
                    createRect(
                        j*blockSize + wallOffset, 
                        i*blockSize, 
                        wallWidth,
                        wallWidth+wallOffset, 
                        innerWallColor);
                }
                if(i<map.length-1 && map[i+1][j] == 1){
                    createRect(
                        j*blockSize+wallOffset, 
                        i*blockSize + wallOffset, 
                        wallWidth, 
                        wallWidth+wallOffset, 
                        innerWallColor);
                }
            }
        }
    }
};

let createPacman = () =>{
    pacman = new Pacman(
        blockSize, 
        blockSize,
        blockSize,
        blockSize,
        blockSize / 5
    );
};
createPacman();
game();