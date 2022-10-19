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
/*
function capitalize(playerChoice) {
    console.log (playerChoice);
    playerChoice = playerChoice.toLowerCase();
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    return (playerChoice);
}

function getPlayerChoice() {
    let playerChoice="";
    while ((!((playerChoice.localeCompare("Rock"))===0))&& (!((playerChoice.localeCompare("Paper"))===0)) &&(!((playerChoice.localeCompare("Scissors"))===0)) ) {
        playerChoice = prompt("Please enter your choice");
        playerChoice=capitalize(playerChoice);
    }
    return (playerChoice);
}
*/
function playRound(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        return ("It's a draw!");
    }
    else if (computerChoice === "Rock" && playerChoice === "Scissors") {
        return ("You lose! " + computerChoice + " beats " + playerChoice);
    }
    else if (computerChoice === "Rock" && playerChoice === "Paper") {
        return ("You win! " + playerChoice + " beats " + computerChoice);
    }
    else if (computerChoice === "Paper" && playerChoice === "Rock") {
        return ("You lose! " + computerChoice + " beats " + playerChoice);
    }
    else if (computerChoice === "Paper" && playerChoice === "Scissors") {
        return ("You win! " + playerChoice + " beats " + computerChoice);
    }
    else if (computerChoice === "Scissors" && playerChoice === "Paper") {
        return ("You lose! " + computerChoice + " beats " + playerChoice);
    }
    else if (computerChoice === "Scissors" && playerChoice === "Rock") {
        return ("You win! " + playerChoice + " beats " + computerChoice);
    }
}
/*for (let i = 0; i < 5; i++) {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    console.log(playRound(computerChoice, playerChoice));
}*/
/*var weapons=document.querySelectorAll('div.weapon');
console.log(weapons);
weapons.forEach(element => console.log(element));*/
let playArea=document.getElementsByClassName("playArea")[0];
playArea.textContent="Make Your Choice";



function startRound(e){
    let playerChoice=e.target.textContent.trim();
    let computerChoice = getComputerChoice();
    playArea.textContent=(playRound(computerChoice, playerChoice));
}
var weapons=document.querySelectorAll('button.weapon');
 weapons.forEach(weapon=>weapon.addEventListener("click",startRound));
console.log(weapons[0].innerHTML);