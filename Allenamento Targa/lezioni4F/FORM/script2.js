let button = document.querySelector('input[type = "submit"]');
button.addEventListener("click", function(){
    let user = document.querySelector('input[type="text"]').value;
    let pass = document.querySelector('input[type="password"]').value;
    if(user && pass){
        localStorage.setItem("username",user);
        localStorage.setItem("password",pass);
        window.close();
    }
    else{
        alert("per cortesia inserire dati");
    }
    
})
