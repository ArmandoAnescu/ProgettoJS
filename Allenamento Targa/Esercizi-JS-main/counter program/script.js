//``
const decreaseBtn= document.getElementById("decreaseBTN");
const resetBtn= document.getElementById("resetBTN");
const increaseBtn= document.getElementById("increaseBTN");
const countLabel= document.getElementById("countLabel");
let count=0;

increaseBtn.onclick= function(){
    count++;
    countLabel.textContent= count;
}
decreaseBtn.onclick= function(){
    count--;
    countLabel.textContent= count;
}
resetBtn.onclick= function(){
    count =0;
    countLabel.textContent= count;
}