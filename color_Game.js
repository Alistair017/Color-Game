// NOTE: spaces in arrays matter, 
// lack of these spaces results in a bug


// non-selectors
var numSquares = 6;
var colorAnswer;
var colors = [];
// colors and squares
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
// #line
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1")
// buttons
var resetButton = document.querySelector(".reset");
var modeButtons = document.querySelectorAll(".mode");


activateButtons();

function activateButtons(){

    setModeButtons();
    setUpSquares(); 
    reset();

}


function setModeButtons(){
    for(var i = 0; i < modeButtons.length; i ++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            // ternary operator
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
            });
        }   
}


function setUpSquares(){
    for (var i = 0; i < squares.length; i++){
        // adding specific colors
        squares[i].style.backgroundColor = colors[i];
        // adding the click event
        squares[i].addEventListener("click", function(){
            // establishing a variable
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === colorAnswer){      
                messageDisplay.textContent = "Well Done!";
                // only runs if the clickedColor is colorAnswer
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play again?"
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "try again";
            }
    
    
        })
    };
}


// super-important
// with this, I won't need to repeat so much

function reset(){
    colors = generateRandomColors(numSquares)
    // pick new answer from array of new colors
    colorAnswer = pickColor();
    // change colorDisplay to match colorAnswer
    colorDisplay.textContent = colorAnswer;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    // change colors of squares
    for (var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";  
            squares[i].style.backgroundColor = colors[i];
        }
        else{
        squares[i].style.display = "none"; 
        }
    };
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
    reset();
})




function changeColors(color){
    // loop through squares
    for(var i = 0; i < squares.length; i++){
        // assign each square to the clicked color
        squares[i].style.backgroundColor = color;
    }
}


function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    // make array
    var arr = [];
    // add random colors to array
    for(var i = 0; i < num; i++){
        // get random colors and push to array
        arr.push(randomColorMake());
    }
    // return array
    return arr; 
}

function randomColorMake(){
    // pick a kind of red from 0 - 255
    var r = Math.floor(Math.random() * 256);
    // pick a kind of green from 0 - 255
    var g = Math.floor(Math.random() * 256);
    // pick a kind of blue from 0 - 255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")"
}
