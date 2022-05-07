const choice = ["rock", "paper", "scissors"];
const container = document.querySelector('#container');
const scoreboard = document.querySelector('#scoreboard');
scoreboard.textContent = "Your score is 0. The computer's score is 0."
let playerScore = 0;
let computerScore = 0;
function computerPlay(){
    let number;
    number = Math.floor(Math.random()*3)
    return choice[number]
}
function playRound(player, computer){
    switch(true){
        case (player === "paper" && computer === "paper"):
            return "Draw! You both picked paper";
        case (player === "paper" && computer === "rock"):
            return "You win! Paper beats rock";
        case (player === "paper" && computer === "scissors"):
            return "You lose! Scissors beats paper";
        case (player === "rock" && computer === "paper"):
            return "You lose! Paper beats rock";
        case (player === "rock" && computer === "rock"):
            return "Draw! You both picked rock";
        case (player === "rock" && computer === "scissors"):
            return "You win! Rock beats scissors";
        case (player === "scissors" && computer === "paper"):
            return "You win! Scissors beats paper";
        case (player === "scissors" && computer === "rock"):
            return "You lose! Rock beats scissors";
        case (player === "scissors" && computer === "scissors"):
            return "Draw! You both picked scissors";
        case (player !== "rock" && player !== "scissors" && player !== "paper") : 
            return "Please enter a valid answer";
    }
}
function display(x){
const newP = document.createElement('p');
newP.textContent = x;
container.appendChild(newP);
}
function playRoundRock(){
    if(playerScore < 5 && computerScore < 5){
        let computer = computerPlay();
        switch(computer){
            case ("paper"):
                container.textContent = ""
                display("You lose! Paper beats rock");
                computerScore += 1;
            break
            case ("rock"):
                container.textContent = ""
                display("Draw! You both picked rock");
            break
            case ("scissors"):
                container.textContent = ""
                display("You win! Rock beats scissors");
                playerScore += 1;
            break
        }
    }else{
        alert('You must restart the game to play again!')
    }
}
function playRoundPaper(){
    if(playerScore < 5 && computerScore < 5){
        let computer = computerPlay();
        switch(computer){
            case ("paper"):
                container.textContent = ""
                display("Draw! You both picked paper");
                break
            case ("rock"):
                container.textContent = ""
                display("You win! Paper beats rock");
                playerScore += 1;
                break
            case ("scissors"):
                container.textContent = ""
                display("You lose! Scissors beats paper");
                computerScore += 1;
                break
        }
    }else{
        alert('You must restart the game to play again!')
    }
}
function playRoundScissors(){
    if(playerScore < 5 && computerScore < 5){
        let computer = computerPlay();
        switch(computer){
            case ("paper"):
                container.textContent = "";
                display("You win! Scissors beats paper");
                playerScore += 1;
                break
            case ("rock"):
                container.textContent = ""
                display("You lose! Rock beats scissors");
                computerScore += 1;
                break
            case ("scissors"):
                container.textContent = ""
                display("Draw! You both picked scissors");
                break
        }
    }else{
        alert('You must restart the game to play again!')
    }
}
function updateScoreboard(){
    if(playerScore < 5 && computerScore <5){
    scoreboard.textContent = `Your score is ${playerScore}. The computer's score is ${computerScore}.`
    } else if(playerScore === 5){
        scoreboard.textContent = `You won the game ${playerScore}:${computerScore}`
        let restartValue = document.getElementById("restart");
        if(!restartValue){
            const restart = document.createElement('button');
            restart.innerHTML = "Restart game";
            restart.id = "restart"
            restart.onclick = function(){
                playerScore = 0;
                computerScore = 0;
                scoreboard.textContent = "Your score is 0. The computer's score is 0."
                container.textContent = "";
            }
            container.appendChild(restart);
        }
    } else if(computerScore === 5){
        scoreboard.textContent = `You lost the game ${playerScore}:${computerScore}`
        let restartValue = document.getElementById("restart");
        if(!restartValue){
            const restart = document.createElement('button');
            restart.innerHTML = "Restart game";
            restart.id = 'restart'
            restart.onclick = function(){
                playerScore = 0;
                computerScore = 0;
                scoreboard.textContent = "Your score is 0. The computer's score is 0.";
                container.textContent = "";
            }
            container.appendChild(restart);
        }
    }
}
const rock = document.querySelector('#rock');
rock.addEventListener('click', playRoundRock);
const paper = document.querySelector('#paper');
paper.addEventListener('click', playRoundPaper);
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', playRoundScissors);
const allButtons = document.querySelector('#buttonContainer');
allButtons.addEventListener('click',updateScoreboard);


/*function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i<5; i++){
        let playerChoice = prompt ("Please enter your choice");
        let playerLowered = playerChoice.toLowerCase();
        let current = playRound(playerLowered, computerPlay());
        if(current.includes("win")){
            playerScore++;
        } else if (current.includes("lose")){
            computerScore++;
        } 
        console.log(current + ". Player Score is " + playerScore + ", computer score is " + computerScore)
    }
    if(playerScore > computerScore){
        console.log("You won the set" + playerScore + ":" + computerScore);
    } else if (playerScore < computerScore){
        console.log("You lost the set" + playerScore + ":" + computerScore);
    } else{
        console.log("You drew the set")
    }
}
*/

