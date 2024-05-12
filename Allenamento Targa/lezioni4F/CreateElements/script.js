let p = document.createElement("p");
p.textContent= "Informatica";
p.classList= "borderP";
//document.body.appendChild(p); lo script deve essere l'ultimo elemento
/*let div = document.body.querySelector("div");
div.appendChild(p);*/
document.body.insertBefore(p, document.body.querySelector("script"));