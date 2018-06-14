var numSquares = 6;
var colors =[];
var pickedColor ;
var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("picked");
var messageDisplay=document.getElementById("message");
var headerL=document.getElementsByTagName("h1")[0];
var resetButton=document.getElementById("reset");
var easyButt=document.getElementById("easy");
var hardButt=document.getElementById("hard");
var levels=document.querySelectorAll(".levels");

init();

function init() {
    setupModes();
    setupSquares();
    reset();
}

function setupModes() {
    for(var i = 0; i < levels.length; i++) {

        levels[i].addEventListener("click", function () {
            levels[0].classList.remove("selected");
            levels[1].classList.remove("selected");

            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();

        });

    }
}

/* easyButt.addEventListener("click",function () {
    easyButt.classList.add("selected");
    hardButt.classList.remove("selected");
    numSquares=3;
    colors = generateRandomColor(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardButt.addEventListener("click", function () {
    easyButt.classList.remove("selected");
    hardButt.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        
            squares[i].style.background = colors[i];
       
            squares[i].style.display = "block";
        
    }
}) */


/* [

    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(0, 255, 255)",
    "rgb(255, 0, 255)"

]; */


function setupSquares() {
    for (var i = 0; i < squares.length; i++) {

        squares[i].style.background = colors[i];

        squares[i].addEventListener("click", function () {
            var colorPicked = this.style.background;

            if (colorPicked === pickedColor) {
                changeColor(colorPicked);
                messageDisplay.textContent = "Correct";
                headerL.style.background = pickedColor;
                resetButton.textContent = "Play Again";
            }
            else {
                this.style.background = "black";
                messageDisplay.textContent = "Try Again";
            }
        })

    }
}


function changeColor(color) {
    for(var i=0;i<squares.length;i++){
        squares[i].style.background=color;
    }
}

function pickColor() {
  var random=  Math.floor(Math.random()*numSquares);
  
  return colors[random];
}

function generateRandomColor(num) {
    var colorsTest=randomColor(num);
    for(var i=0;i<squares.length;i++){
      if(colorsTest[i]){
          
          squares[i].style.display="block";
        squares[i].style.background=colorsTest[i];
      }
      else{
          
          squares[i].style.display="none";
      }
        
    }
    
    return colorsTest;
}

function randomColor(num){


var colArray=[];


    for(var i=0;i<num;i++){

        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);

        colArray.push("rgb("+r+", "+g+", "+b+")");
    }
  
    return colArray;
}


    resetButton.addEventListener("click",function () {
        reset();
       
    })

    function reset() {
        
        colors = generateRandomColor(numSquares);

        pickedColor = pickColor();

        colorDisplay.textContent = pickedColor;
        headerL.style.background = "steelblue";
        messageDisplay.textContent = "";
        resetButton.textContent = "New Colors";
    }


