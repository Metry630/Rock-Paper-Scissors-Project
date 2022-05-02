const choice = ["rock", "paper", "scissors"];
function computerPlay(){
    let number;
    number = Math.floor(Math.random()*3)
    return choice[number]
}
function playRound(player, computer){
    player.toLowerCase();
    computer.toLowerCase();
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
    }
}
const player = "rock";
const computer = computerPlay();
console.log(playRound(player,computer))
