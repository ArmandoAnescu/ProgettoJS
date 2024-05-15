class Pacman {
    constructor(x,y,width, height, speed){
        this.x= x;
        this.y= y;
        this.width= width;
        this.height= height;
        this.speed = speed;
        this.direction= DIRECTION_RIGHT;
        this.frame = 1;
        this.frameCount = 7;
        setInterval(() =>{
            this.changeDirection();
        },100);
    }

    moveProcess(){
        this.changeDirection();
        this.moveForward();
        if(this.checkCollison()){
            this.moveBackwards();
        }
    }
    eat(){

    }
    moveBackwards() {
        switch(this.direction){
            case DIRECTION_RIGHT:
                this.x -= this.speed;
                break;
            case DIRECTION_TOP: 
                this.y += this.speed;
                break;
            case DIRECTION_LEFT:
                this.x += this.speed;
                break;
            case DIRECTION_BOTTOM:
                this.y -= this.speed;
                break;
        }
    }
    moveForward(){
        switch(this.direction){
            case DIRECTION_RIGHT:
                this.x += this.speed;
                break;
            case DIRECTION_TOP: 
                this.y -= this.speed;
                break;
            case DIRECTION_LEFT:
                this.x -= this.speed;
                break;
            case DIRECTION_BOTTOM:
                this.y += this.speed;
                break;
        }
    }
    checkCollison(){
        let collision = false;
        if(map[this.getMapY()][this.getMapX]== 1 
        || map[this.getMapYRightSide()][this.getMapX]==1
        || map[this.getMapY()][this.getMapXRightSide()]==1
        || map[this.getMapYRightSide()][this.getMapXRightSide()]==1){
            return true;
        }
        return false;
    }
    checkGhostCOllision(){

    }
    changeDirection(){

    }
    animationPac(){
        this.frame = this.frame == this.frameCount ? 1: this.frame + 1;
    }
    draw(){}

    getMapX(){
        return parseInt(this.x / blockSize);
    }
    getMapY(){
        return parseInt(this.y / blockSize);
    }
    getMapXRightSide(){
        return parseInt(this.x + 1 * blockSize) / blockSize;
    }   
    getMapYRightSide(){
        return parseInt(this.y + 1 * blockSize) / blockSize;
    }   
}
