const choice = ["rock", "paper", "scissors"];
function computerPlay(){
    let number;
    number = Math.floor(Math.random()*3)
    return choice[number]
}
function playRound(player, computer){
    player.toLowerCase();
    computer.toLowerCase();
    switch(player, computer){
        case (player === "paper" && computer === "paper"):
            return "Draw! You both picked paper";
        break;
        case (player === "paper" && computer === "rock"):
            return "You win! Paper beats rock";
        break;
        case (player === "paper" && computer === "scissors"):
            return "You lose! Scissors beats paper";
        break;
        case (player === "rock" && computer === "paper"):
            return "You lose! Paper beats rock";
        break;
        case (player === "rock" && computer === "rock"):
            return "Draw! You both picked rock";
        break;
        case (player === "rock" && computer === "scissors"):
            return "You win! Rock beats scissors";
        break;
        case (player === "scissors" && computer === "paper"):
            return "You win! Scissors beats paper";
        break;
        case (player === "scissors" && computer === "rock"):
            return "You lose! Rock beats scissors";
        break;
        case (player === "scissors" && computer === "scissors"):
            return "Draw! You both picked scissors";
        break;
    }
}
const player = "rock";
const computer = computerPlay();
console.log(playRound(player,computer))
