const username = document.body.querySelector('input[type="text"]');
const password = document.body.querySelector('input[type="password"]');
const btn = document.body.querySelector("button");

btn.addEventListener("click",function(){
    if(username.value === "GruppoProgetto" && password.value === "progettoJS" ){
    alert("CIAO");       
    }
});
