let btn=document.querySelector('input[type="submit"]');
btn.addEventListener("click",function()
{
    let userName=document.querySelector('input[type="text"]').value;
    let Password=document.querySelector('input[type="password"]').value;
    if(userName&&Password)
    {
        localStorage.setItem("username",userName);
        localStorage.setItem("password",Password);
        window.close();
    }else
    {
        alert("inserisci i dati");
    }
})