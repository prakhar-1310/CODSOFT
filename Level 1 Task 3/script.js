let one= document.querySelector("#one");
let screen=document.querySelector(".screen");
let two=document.querySelector("#two");
let three = document.querySelector("#three");
let four=document.querySelector("#four");
let five=document.querySelector("#five");
let six=document.querySelector("#six");
let seven=document.querySelector("#seven");
let eight=document.querySelector("#eight");
let nine=document.querySelector("#nine");
let zero=document.querySelector("#zero");
let doubleZero=document.querySelector("#doubleZero");
let decimal=document.querySelector("#dot");
let plus=document.querySelector("#plus");
let minus=document.querySelector("#minus");
let multi=document.querySelector("#multi");
let devide=document.querySelector("#devide");
let equal=document.querySelector("#equal");
let clear=document.querySelector("#c");
let ac=document.querySelector("#ac");



one.addEventListener("click", ()=>{
    screen.innerText=screen.innerText+"1";
});
two.addEventListener("click", ()=>{
    screen.innerText=screen.innerText+"2";
});
three.addEventListener("click", ()=>{
    screen.innerText=screen.innerText+"3";
});
four.addEventListener("click", ()=>{
    screen.innerText=screen.innerText+"4";
});
five.addEventListener("click", ()=>{
    screen.innerText=screen.innerText+"5";
});
six.addEventListener("click", ()=>{
    screen.innerText=screen.innerText+"6";
});
seven.addEventListener("click", ()=>{
    screen.innerText=screen.innerText+"7";
});
eight.addEventListener("click", ()=>{
    screen.innerText=screen.innerText+"8";
});
nine.addEventListener("click", ()=>{
    screen.innerText=screen.innerText+"9";
});
zero.addEventListener("click", ()=>{
    screen.innerText=screen.innerText+"0";
});
doubleZero.addEventListener("click", ()=>{
    screen.innerText=screen.innerText+"00";
});
plus.addEventListener("click", ()=>{
    screen.innerText=screen.innerText+"+";
});
minus.addEventListener("click", ()=>{
    screen.innerText=screen.innerText+"-";
});
multi.addEventListener("click", ()=>{
    screen.innerText=screen.innerText+"*";
});
devide.addEventListener("click", ()=>{
    screen.innerText=screen.innerText+"/";
});
dot.addEventListener("click",()=>{
    screen.innerText=screen.innerText+".";
});
clear.addEventListener("click",()=>{
    screen.innerText=screen.innerText.slice(0,-1);
});
ac.addEventListener("click",()=>{
    screen.innerText=" ";
});



equal.addEventListener("click",()=>{
    let a=eval(screen.innerText);
    screen.innerText=Math.round(a*10)/10;
});