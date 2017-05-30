$(document).ready(function() {
    var wins,
    losses,
    targetNumber,
    userTotal,
    grey,
    white,
    yellow,
    purple;

    wins = 0
    losses = 0

    var buttClick = new Audio("assets/sounds/click.mp3")
    var win = new Audio("assets/sounds/win.mp3")
    var lose = new Audio("assets/sounds/lose.mp3")

console.log("Start Game")

function newGame(){
    resetVariables()
    updateGameboard()
}

function resetVariables(){
    targetNumber = Math.floor(Math.random() * 120) + 19;

    grey = Math.floor(Math.random() * 12) + 1;
    purple = Math.floor(Math.random() * 12) + 1;
    white = Math.floor(Math.random() * 12) + 1;
    yellow = Math.floor(Math.random() * 12) + 1;

    userTotal = 0;
}

function updateGameboard(){
    $("#goal").text(targetNumber);
    $("#guess").text(userTotal)
    $("#wins").text(wins)
    $("#losses").text(losses)
}

function userScoreIncrease(amount){
    userTotal += amount;
    $("#guess").text(userTotal)
    console.log("newUserTotal", userTotal)

    if(targetNumber === userTotal){
        wins ++
        
        newGame()
        win.play()
    } 

    else if(targetNumber < userTotal){
        losses ++
        
        newGame()
        lose.play()
    } 

    else{

    }
}

$("#grey").on('click', function(event){
    event.preventDefault()
    userScoreIncrease(grey)
    buttClick.play()
})

$("#purple").on('click', function(event){
    event.preventDefault()
    userScoreIncrease(purple)
    buttClick.play()
})

$("#white").on('click', function(event){
    event.preventDefault()
    userScoreIncrease(white)
    buttClick.play()
})

$("#yellow").on('click', function(event){
    event.preventDefault()
    userScoreIncrease(yellow)
    buttClick.play()
})

newGame()

})