const btn = document.body.querySelector("button");
btn.addEventListener("click", function(){
    const width = 800,height = 600;
    const left= (screen.width-width)/2, top = (screen.height-height)/2;
    let newWind = document.open("","","width = " + width + ",height = "+ height + ",left = "+left + ",top = "+top);
    let styleCSS = newWind.document.createElement("link");
    styleCSS.rel= "stylesheet";
    styleCSS.href="style.css";

    newWind.document.head.appendChild(styleCSS);
    let form = newWind.document.createElement("Form");
    form.classList = "container";

    let username = newWind.document.createElement("input");
    username.type = "text";
    username.placeholder ="nome utente";
    username.required=true;

    let pwd = newWind.document.createElement("input");
    pwd.type = "password";
    pwd.placeholder="password"
    pwd.required = true;

    let butt= newWind.document.createElement("input");
    butt.type="submit";
    butt.value= "invia";
    form.appendChild(username);
    form.appendChild(pwd);
    form.appendChild(butt);
    newWind.document.body.appendChild(form);

    let script2= newWind.document.createElement("script");
    script2.src = "script2.js";
    newWind.document.body.appendChild(script2);
});
document.body.querySelector("p").textContent = localStorage.getItem("username") + "------"+ localStorage.getItem("passowrd");
