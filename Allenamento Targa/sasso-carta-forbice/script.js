let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div= document.body.querySelector(".score-board");
const result_p=document.body.querySelector(".result>p");
const rock_div=document.getElementById("r");
const scissor_div=document.getElementById("s");
const paper_div=document.getElementById("p");

function getCompChoice(){
    const choices = ['r','p','s'];
    const numeroRandom= Math.floor(Math.random()*3);
    return choices[numeroRandom];
}
function convertiParole(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}
function win(userChoice,computerChoice){
    
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord= "user".fontsize(3).sub();
    const smallCompWord= "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    result_p.innerHTML = `${convertiParole(userChoice)}${smallUserWord} batte ${convertiParole(computerChoice)}${smallCompWord}}. HAI VINTO!`;
   userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'),300);
}

function lose(userChoice,computerChoice){
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord= "user".fontsize(3).sub();
    const smallCompWord= "comp".fontsize(3).sub();
    computerScore++;
    result_p.innerHTML = `${convertiParole(userChoice)}${smallUserWord} perde contro ${convertiParole(computerChoice)}${smallCompWord}}. HAI PERSO!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'),300);
}
function draw(userChoice,computerChoice){
    const smallUserWord= "user".fontsize(3).sub();
    const smallCompWord= "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertiParole(userChoice)}${smallUserWord} pareggia con ${convertiParole(computerChoice)}${smallCompWord}.`;
    userChoice_div.classList.add('grey-glow');
    setTimeout(() => userChoice_div.classList.remove('grey-glow'),300);
}
function game(userChoice){
    const computerChoice = getCompChoice();
    switch(userChoice+computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            break;
    }
}

function main(){
rock_div.addEventListener('click',function(){
    game("r");
})
scissor_div.addEventListener('click',function(){
    game("s");
})
paper_div.addEventListener('click',function(){
    game("p");
})
}
main();