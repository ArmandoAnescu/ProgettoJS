function generaPass(length,lowerCase,upperCase,numeri,simboli){
    const caratteriMinuscoli = "abcdefghijklmnopqrstuvwxyz";
    const caratteriMaiuscoli = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeriChar = "0123456789";
    const simboliChar = "!@#$%^&*()_+-=";
    let caratteriConsentiti = "";
    let password = "";
    caratteriConsentiti += lowerCase ? caratteriMinuscoli : "";
    caratteriConsentiti += upperCase ? caratteriMaiuscoli : "";
    caratteriConsentiti += numeri ? numeriChar : "";
    caratteriConsentiti += simboliChar ? simboli : "";
    if(length<= 0){
        return '(lunghezza password insufficiente)';
    }
    if(caratteriConsentiti.length === ""){
        return `(almeno uno dei campi deve essere soddisfatto)`;
    }
    for (let i=0; i<length; i++){
        const randomIndex = Math.floor(Math.random() * caratteriConsentiti.length);
        password += caratteriConsentiti[randomIndex];
    }
    return password;
}
const passLength = 10;
const lowerCase = true;
const upperCase = true;
const numeri = true;
const simboli = true;
const password = generaPass(passLength,lowerCase,upperCase,numeri,simboli);
console.log(`Password generata : ${password}`);