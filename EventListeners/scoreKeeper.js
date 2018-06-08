var player1Button = document.getElementById("firstPlayer");
var player2Button=document.getElementById("secondPlayer");
var player1Score = document.querySelector("#firstScore");
var player2Score = document.querySelector("#secondScore");
var setLimit=document.getElementsByTagName("input")[0];
var limitScore = document.querySelector("#limitScore");
var resetButton = document.getElementById("reset");

var playerOne=0;
var playerTwo=0;
var limitScoreValue=5;
player1Button.addEventListener("click",function () {
    if (playerOne < limitScoreValue){
       player1Score.textContent=++playerOne;
       if (playerOne === limitScoreValue) {
           player1Score.classList.add("green");
       }
   }
   
});
player2Button.addEventListener("click", function () {
    if (playerTwo < limitScoreValue) {
        player2Score.textContent = ++playerTwo;
        if (playerTwo === limitScoreValue) {
            player1Score.classList.add("green");
        }
    }
     
});
setLimit.addEventListener("change",function () {
    limitScore.textContent=this.value;
    limitScoreValue = Number(this.value);
    reset();
})

resetButton.addEventListener("click",function () {
reset();

})

function  reset() {
    playerOne = 0;
    playerTwo = 0;
    player1Score.textContent = 0;
    player2Score.textContent = 0;
    player1Score.classList.remove("green");
    player2Score.classList.remove("green"); 
}
function pricePlan() {
    console.log("hello");
}