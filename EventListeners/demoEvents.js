var clickButton=document.querySelector("button");
var isCLicked=false;
clickButton.addEventListener("click",function (){
document.body.classList.toggle("buttonClick");
});