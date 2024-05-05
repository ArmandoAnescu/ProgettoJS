//``
//z=Math.round(x);
//z=Math.floor(x);
//z=Math.ceil(x);
//z=Math.trunc(x);
//z=Math.pow(x,y);
//z=Math.sqrt(x);       metodi della classe Math
//z=Math.log(x);
//z=Math.sin(x);
//z=Math.cos(x);
//z=Math.tan(x);
//z=Math.abs(x);
//z=Math.sign(x);
/*let max = Math.max(x,y,z);
let min = Math.min(x,y,z);*/

// Generatore random di numeri
/*const min = 50;
const max = 100;
let randomNum= Math.floor(Math.random() * (max-min)) + min;
console.log(randomNum);
const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;
myButton.onclick=function(){
    randomNum1 = Math.floor(Math.random*max);
    randomNum2= Math.floor(Math.random*max);
    randomNum3 = Math.floor(Math.random*max);
    label1.textContent= randomNum1;
    label2.textContent= randomNum2;
    label3.textContent= randomNum3;
}*/

//if statements
/*let age = 12;
if(age>=18){
    console.log("You are old enough to enter this site");
}
                ESEMPIO NUMERICO
else{
    console.log("You must be 18+ to enter this site");
}*/
/*let time = 17;
if(time<12){
    console.log("Good Morning!!!");
}
else{
    console.log("Good Afternoon!!!");
}*/
/*let isStudent = false;
if(isStudent){
    console.log("Your a student");
}
        ESEMPIO BOOL
else{
    console.log("You are not a student");
}*/
/*const myText = document.getElementById("myText");
const mySubmit = document.getElementById("myButton");
const resultElement = document.getElementById("resultElement");
let age;
mySubmit.onclick = function(){
    age= myText.value;
    age = Number(age);
    if(age>=100){
        resultElement.textContent = `troppo vecchio`;
    }
    else if(age ==0){
        resultElement.textContent= `troppo piccolo`;
    }
    else if(age >= 18){
        resultElement.textContent= `abbastanza vecchio per usare il sito`;
    }
    else if(age <0){
        resultElement.textContent= `non è possibile avere meno di 0 anni`;
    }
    else{
        resultElement.textContent= `devi avere almeno 18 anni`;
    }
}*/

//Checked property
/*const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");
mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `sei iscritto`;
    }else{
        subResult.textContent = `non sei iscritto`;
    }
    if(visaBtn.checked){
        paymentResult.textContent = `stai pagando con visa`;
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = `paghi con mastercard`;
    }
    else if(payPalBtn.checked){
        paymentResult.textContent= `stai pagando con paypal`;
    }
    else{
        paymentResult.textContent= `devi selezionare una opzione di pagamento`;
    }
}*/

//metodi stringhe
/*let stringa = "Appunti";
console.log(stringa.charAt(0));
console.log(stringa.indexOf("u"));
console.log(stringa.length);
console.log(stringa.trim());
console.log(stringa.toUpperCase());
console.log(stringa.repeat(5));
console.log(stringa.startsWith(" "));
console.log(stringa.endsWith(" "));
console.log(stringa.includes(" "));
console.log(stringa.replaceAll("p","g"));
console.log(stringa.padStart(15, "-"));
console.log(stringa.padEnd(15,"-"));*/

//divisione stringhe
/*const email = "emailProva@gmail.com";
let userName = email.slice(0,email.indexOf("@"));
let extension= email.slice(email.indexOf("@"))
console.log(userName);
console.log(extension);*/

//Method chaining
//let username = window.prompt("Inserisci username");
/*username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();          METODI NON cONCATENATI
let extraChars = username.slice(1);
extraChars = extraChars.toLocaleLowerCase();
username = letter + extraChars;
console.log(username);*/
/*username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLocaleLowerCase();
console.log(username);                  METODI CONCATENATI*/

//while loop
/*let loggedIn = true;
let username;
let pass;
while (!loggedIn) {
    username = window.prompt(`Inserisci username`);
    pass = window.prompt(`Inserisci password`);
    if (username == "myUsername" && pass == "myPass") {
        loggedIn = false;
        console.log("NON SEI LOGGATO");
    } else {
        console.log("CREDENZIALI NON VALIDE!!");
    }
}*/