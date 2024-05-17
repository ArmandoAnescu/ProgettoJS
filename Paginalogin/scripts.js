const btn =document.body.querySelector("button");
btn.addEventListener("click",function(){
    const width=600;
    const height=600;
    const top=(screen.height-height) /2;
    const left= (screen.width-width) /2;
    let newWindow=document.open("","","width = "+width +",height ="+height+",left ="+left+",top ="+top);
    let mioStile=newWindow.document.createElement("link");
    mioStile.rel="stylesheet";
    mioStile.href="style.css";
    newWindow.document.head.appendChild(mioStile);

    let form=newWindow.document.createElement("form");
    form.classList="container"
    let userName=newWindow.document.createElement("input");
    userName.type="text";
    userName.placeholder="User Name";
    userName.required=true;
    // newWindow.document.body.appendChild(userName);

    let pwd=newWindow.document.createElement("input");
    pwd.type="password";
    pwd.placeholder="Password";
    pwd.required=true;
    // newWindow.document.body.appendChild(pwd);

    let submit=newWindow.document.createElement("input");
    submit.type="submit";
    submit.value="Invia";
    form.appendChild(userName);
    form.appendChild(pwd);
    form.appendChild(submit);
    newWindow.document.body.appendChild(form);
    let script2=newWindow.document.createElement("script");
    script2.src="script2.js";
    newWindow.document.body.appendChild(script2);
});
document.body.querySelector("p").textContent=localStorage.getItem("username")+" "+localStorage.getItem("password");
