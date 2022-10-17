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

function playRound(computerChoice,playerChoice){
    if (computerChoice===playerChoice){
        return("Draw");
    }
    else if(computerChoice==="Rock" && playerChoice==="Scissors"){
        return("You lose!"+computerChoice+" beats "+playerChoice);
    }
    else if(computerChoice==="Rock" && playerChoice==="Scissors"){
        return("You win!"+playerChoice+" beats "+computerChoice);
    }
    else if(computerChoice==="Paper" && playerChoice==="Rock"){
        return("You lose!"+computerChoice+" beats "+playerChoice);
    }
    else if(computerChoice==="Paper" && playerChoice==="Scissors"){
        return("You win!"+playerChoice+" beats "+computerChoice);
    }
    else if(computerChoice==="Scissors" && playerChoice==="Paper"){
        return("You lose!"+computerChoice+" beats "+playerChoice);
    }
    else if(computerChoice==="Scissors" && playerChoice==="Rock"){
        return("You win!"+playerChoice+" beats "+computerChoice);
    }
}

let computerChoice=getComputerChoice();
let playerChoice=getPlayerChoice();
console.log(playRound(computerChoice,playerChoice));