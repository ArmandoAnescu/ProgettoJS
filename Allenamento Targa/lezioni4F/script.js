const hElements = document.body.querySelectorAll("h1");
let logEvent = function(event){
    this.textContent= event.type + "-" + event.target.id + "-" + event.target.classList;
    this.style.backgroundColor = "blue";
    this.style.transition = "background-color 3s";
    setTimeout(()=>{
        this.style.backgroundColor= "transparent";
    },3000); 
}
hElements[0].addEventListener("click", logEvent);
hElements[1].addEventListener("mousedown", logEvent);
hElements[2].addEventListener("mouseup", logEvent);
hElements[3].addEventListener("mouseenter", logEvent);
hElements[4].addEventListener("mouseleave", logEvent);