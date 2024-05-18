const pezzi = document.getElementsByClassName("Pezzo");
const Img = document.querySelectorAll("img");
const caselle = document.getElementsByClassName("spazio");
let turnoBianco=true;
Spostamento();
SpostamentoPezzi();
function Spostamento()
{
    for(let i=0;i<caselle.length; i++)
    {
        caselle[i].addEventListener("dragover",allowDrop);
        caselle[i].addEventListener("drop",drop);
        let riga=8-Math.floor(i/8);
        let colonna=String.fromCharCode(97+(i%8));
        let casella=caselle[i];
        casella.id=colonna+riga;
    }
}
function SpostamentoPezzi()
{
    for(let i=0;i<pezzi.length;i++)
    {
        pezzi[i].addEventListener("dragstart",drag);
        pezzi[i].setAttribute("draggable",true);
        pezzi[i].id=pezzi[i].className.split(" ")[1]+pezzi[i].parentElement.id;
    }
    for(let i=0;i<Img.length;i++)
    {
        Img[i].setAttribute("draggable",false);
    }
    
}
function ControlloTurno(ev)
{
    let spostamento=true;
    if(turnoBianco){
        if(ev.classList.contains("Bianco")){
            spostamento=true;
            turnoBianco=false;
        }else
        {
            spostamento=false;
        }
    }else
    {
        if(ev.classList.contains("Nero")){
            spostamento=true;
            turnoBianco=true;
        }else
        {
            spostamento=false;
        }
    }
    return spostamento;
}
function allowDrop(ev)
{
    ev.preventDefault();
}
function drag(ev)
{
  const pezzo=ev.target;
  if(ControlloTurno(pezzo))
    {
        ev.dataTransfer.setData("text",pezzo.id); 
    }
}
function drop(ev)
{
    ev.preventDefault();
    let data=ev.dataTransfer.getData("text");
    const pezzo=document.getElementById(data)
    const destinazione=ev.currentTarget;
    let destinazioneId=destinazione.id;
    destinazione.appendChild(pezzo);
}
/*
gli otto pedoni si muovono solo in avanti e mangiano in obliquo;
le torri vanno in orizzontale o in verticale;
gli alfieri vanno in obliquo;
i cavalli possono saltare, fanno una forma a “L”;
la regina, che è la più forte, si muove in orizzontale, in verticale e in obliquo;
il re si muove solo di una casella, ma in qualsiasi direzione.gli otto pedoni si muovono solo in avanti e mangiano in obliquo;
le torri vanno in orizzontale o in verticale;
gli alfieri vanno in obliquo;
i cavalli possono saltare, fanno una forma a “L”;
la regina, che è la più forte, si muove in orizzontale, in verticale e in obliquo;
il re si muove solo di una casella, ma in qualsiasi direzione.
*/