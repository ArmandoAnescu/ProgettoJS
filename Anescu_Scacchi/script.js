const pezzi = document.getElementsByClassName("Pezzo");
const Img = document.querySelectorAll("img");
const caselle = document.getElementsByClassName("spazio");
let turnoBianco = true;
whiteCounter = 0;
blackCounter = 0;
let showTurno=document.getElementById("turno")
let punteggio = document.body.querySelectorAll("#Counter");
Spostamento();
SpostamentoPezzi();
AggiornaPunteggio();

function AggiornaPunteggio()
{
    for (let i = 0; i < punteggio.length; i++) {
        if (i == 0) {
            punteggio[i].textContent=whiteCounter;
        }else
        {
            punteggio[i].textContent=blackCounter;
        }
    }
    if(turnoBianco){
        showTurno.textContent="bianco";
    }else{
        showTurno.textContent="nero";
    }
}
function Spostamento() {
    for (let i = 0; i < caselle.length; i++) {
        caselle[i].addEventListener("dragover", allowDrop);
        caselle[i].addEventListener("drop", drop);
        let riga = 8 - Math.floor(i / 8);
        let colonna = String.fromCharCode(97 + (i % 8));
        let casella = caselle[i];
        casella.id = colonna+riga;
        console.log(casella.id);
    }
}
function SpostamentoPezzi() {
    for (let i = 0; i < pezzi.length; i++) {
        pezzi[i].addEventListener("dragstart", drag);
        pezzi[i].setAttribute("draggable", true);
        pezzi[i].id = pezzi[i].className.split(" ")[1] + " " + pezzi[i].parentElement.id;
    }
    for (let i = 0; i < Img.length; i++) {
        Img[i].setAttribute("draggable", false);
    }
}
function ControlloTurno(ev) {
    let spostamento = true;
    if (turnoBianco) {
        if (ev.classList.contains("Bianco")) {
            spostamento = true;
            turnoBianco = false;
        } else {
            spostamento = false;
        }
    } else {
        if (ev.classList.contains("Nero")) {
            spostamento = true;
            turnoBianco = true;
        } else {
            spostamento = false;
        }
    }
    return spostamento;
}
function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    const pezzo = ev.target;
    if (ControlloTurno(pezzo)) {
        ev.dataTransfer.setData("text", pezzo.id);
    }
}
function ControlloCattura(ev, pezzo) {
    let pezzoDaMangiare = ev.querySelector(".Pezzo");
    if (pezzoDaMangiare) {
        if (pezzoDaMangiare.classList.contains("Bianco") && pezzo.classList.contains("Nero")) {
            blackCounter++;
            ev.removeChild(pezzoDaMangiare);
            return true;
        } else if (pezzoDaMangiare.classList.contains("Nero") && pezzo.classList.contains("Bianco")) {
            whiteCounter++;
            ev.removeChild(pezzoDaMangiare);
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
}
function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    const pezzo = document.getElementById(data)
    const destinazione = ev.currentTarget;
    let destinazioneId = destinazione.id;
    if (ControlloCattura(destinazione, pezzo) && MossaLegale(destinazioneId,pezzo)) {
        destinazione.appendChild(pezzo);
    }
    AggiornaPunteggio();
}
function MossaLegale(destinazioneId,pezzo)
{
    let origine=pezzo.parentElement.id;
    let colonna=origine.charAt(0);
    let riga=origine.charAt(1);
    if(pezzo.classList.contains("Pawn")){
        let colonna=origine.charAt(0);
        let riga=origine.charAt(1);
       
        if(pezzo.classList.contains("Bianco")){
            riga++;

        }else
        {
            riga--;
        }
        let posizione=colonna+riga;
        console.log(posizione);
        if(destinazioneId==posizione){
            return true;
        }else
        {
            return false;
        }
    }else if(pezzo.classList.contains("King")){
        possibiliMosse=new Array();
        colonna=colonna;
        riga=Number(riga);
        let nuovaRiga
        possibiliMosse[0]=colonna+(nuovaRiga=riga+1);
        possibiliMosse[1]=colonna+(nuovaRiga=riga-1);
        possibiliMosse[2]=String.fromCharCode((colonna.charCodeAt(0)-1))+riga;
        possibiliMosse[3]=String.fromCharCode((colonna.charCodeAt(0)+1))+riga;
        possibiliMosse[4]=String.fromCharCode((colonna.charCodeAt(0)+1))+(nuovaRiga=riga+1);
        possibiliMosse[5]=String.fromCharCode((colonna.charCodeAt(0)-1))+(nuovaRiga=riga+1);
        possibiliMosse[6]=String.fromCharCode((colonna.charCodeAt(0)-1))+(nuovaRiga=riga-1);
        possibiliMosse[7]=String.fromCharCode((colonna.charCodeAt(0)+1))+(nuovaRiga=riga-1);
        for(let i=0;i<possibiliMosse.length;i++){
            console.log(possibiliMosse);
            if(possibiliMosse[i]==destinazioneId){
                return true;
            }
        }
        return false;
    }else if(pezzo.classList.contains("Knight")){
        possibiliMosse=new Array();
        colonna=origine;
        riga=Number(riga);
        let nuovaRiga=riga+1;
        possibiliMosse[0]=String.fromCharCode((colonna.charCodeAt(0)-2))+nuovaRiga;
        possibiliMosse[2]=String.fromCharCode((colonna.charCodeAt(0)+2))+nuovaRiga;
        nuovaRiga=riga-1;
        possibiliMosse[1]=String.fromCharCode((colonna.charCodeAt(0)-2))+nuovaRiga;
        possibiliMosse[3]=String.fromCharCode((colonna.charCodeAt(0)+2))+nuovaRiga;
        nuovaRiga=riga+2
        possibiliMosse[4]=String.fromCharCode((colonna.charCodeAt(0)-1))+nuovaRiga;
        possibiliMosse[7]=String.fromCharCode((colonna.charCodeAt(0)+1))+nuovaRiga;
        nuovaRiga=riga-2;
        possibiliMosse[5]=String.fromCharCode((colonna.charCodeAt(0)+1))+nuovaRiga;
        possibiliMosse[6]=String.fromCharCode((colonna.charCodeAt(0)-1))+nuovaRiga;
        console.log(possibiliMosse);
        console.log(destinazioneId);
        for(let i=0;i<possibiliMosse.length;i++){
            console.log(i);
            if(possibiliMosse[i]==destinazioneId){
                return true;
            }
        }
        return false;
    }else
    {
        return true;
    }
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