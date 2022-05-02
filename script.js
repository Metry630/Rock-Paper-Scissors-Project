const choice = ["rock", "paper", "scissors"];
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
function game(){
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

