let buttons=document.body.querySelectorAll("button");
const countLabel=document.getElementById("CountLabel");
const hpColumn=document.getElementById("HP");
const atkColumn=document.getElementById("ATK"); 
const defColumn=document.getElementById("DEF"); 
const CDMGColumn=document.getElementById("Crit-Dmg"); 
const cDMGValue=9.6;
let counter=1;
function ControlloLivello()
{
    if(counter>=1&&counter<20)
    {
        hpColumn.textContent=1020.05;
        atkColumn.textContent=26.63;
        defColumn.textContent=59.53;
    }
    else if(counter===20)
    {
        hpColumn.textContent=2646.02;
        atkColumn.textContent=69.07;
        defColumn.textContent=154.42;
    }else if(counter>20&&counter<40)
    {
        hpColumn.textContent=3520.62;
        atkColumn.textContent=91.90;
        defColumn.textContent=205.47;
    }else if(counter===40)
    {
        hpColumn.textContent=5267.97;
        atkColumn.textContent=137.51;
        defColumn.textContent=307.44;
        CDMGColumn.textContent=cDMGValue;
    }else if(counter>40&&counter<50)
    {
        hpColumn.textContent=5889.40;
        atkColumn.textContent=153.73;
        defColumn.textContent=343.71;
    }else if(counter===50)
    {
        hpColumn.textContent=6775.82;
        atkColumn.textContent=176.87;
        defColumn.textContent=395.44;
    }else if(counter>50&&counter<60)
    {
        hpColumn.textContent=7604.39;
        atkColumn.textContent=198.49;
        defColumn.textContent=443.80;
        CDMGColumn.textContent=cDMGValue*2;
    }else if(counter===60)
    {
        hpColumn.textContent=8500.00;
        atkColumn.textContent=221.87;
        defColumn.textContent=496.07;
    }else if(counter>60&&counter<70)
    {
        hpColumn.textContent=9121.43;
        atkColumn.textContent=238.09;
        defColumn.textContent=532.34;
    }else if(counter===70)
    {
        hpColumn.textContent=10025.19;
        atkColumn.textContent=261.68;
        defColumn.textContent=585.08;        
    }else if(counter>70&&counter<80)
    {
        hpColumn.textContent=10646.62;
        atkColumn.textContent=277.90;
        defColumn.textContent=621.35;
        CDMGColumn.textContent = (cDMGValue * 3).toFixed(1);
    }else if(counter===80)
    {
        hpColumn.textContent=11560.59;
        atkColumn.textContent=301.76;
        defColumn.textContent=674.69; 
    }else if(counter>80&&counter<90)
    {
        hpColumn.textContent=12182.02;
        atkColumn.textContent=317.98;
        defColumn.textContent=710.96; 
        CDMGColumn.textContent=cDMGValue*4;
    }else
    {
        hpColumn.textContent=13103.12;
        atkColumn.textContent=342.03;
        defColumn.textContent=764.71;
    }
}
buttons[0].addEventListener("click",function(){
    if(counter<90)
    {
        counter++;
    }
    ControlloLivello();
    countLabel.textContent=counter;
});
buttons[1].addEventListener("click",function(){
    counter=1;
    ControlloLivello();
    countLabel.textContent=counter;
});
buttons[2].addEventListener("click",function(){
    if(counter>1)
    {
        counter--;
    }
    ControlloLivello();
    countLabel.textContent=counter;
});
