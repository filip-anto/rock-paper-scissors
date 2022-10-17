function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return ("Rock");
    }
    else if (computerChoice === 1) {
        return ("Paper");
    }
    else {
        return ("Scissors");
    }
}


function getPlayerChoice() {
    let playerChoice = prompt("Please enter your choice");
    playerChoice=playerChoice.toLowerCase();
    playerChoice=playerChoice.charAt(0).toUpperCase()+playerChoice.slice(1);
    return (playerChoice);
}
getComputerChoice();
getPlayerChoice();