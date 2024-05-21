const username = document.body.querySelector('input[type="text"]');
const password = document.body.querySelector('input[type="password"]');
const btn = document.body.querySelector("button");
const ref = document.body.querySelector("a");
btn.addEventListener("click",function(){
    if(username.value === "GruppoProgetto" && password.value === "progettoJS" ){
        window.open(ref);
    }
});
