let playerScore = 0;
let computerScore = 0;
let totalRounds = 0;

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
let playArea = document.getElementsByClassName("playArea")[0];
playArea.textContent = "Make Your Choice";

function setPlayerArea(playerChoice) {
    let playerCard = document.createElement("div");
    playerCard.classList.add("playerWeapon");
    let playerImage = document.createElement("img");
    playerImage.src = playerChoice.toLowerCase() + ".jpeg";
    playerCard.appendChild(playerImage);
    let playerQuote = document.createElement("div");
    playerQuote.textContent = "Player chose " + playerChoice.toLowerCase();
    playerCard.appendChild(playerQuote);
    let x = document.getElementsByClassName("battleArea")[0];
    x.appendChild(playerCard);
}

function setComputerArea(computerChoice) {
    let computerCard = document.createElement("div");
    computerCard.classList.add("computerWeapon");
    let computerImage = document.createElement("img");
    computerImage.src = computerChoice.toLowerCase() + ".jpeg";
    computerCard.appendChild(computerImage);
    let computerQuote = document.createElement("div");
    computerQuote.textContent = "Computer chose " + computerChoice.toLowerCase();
    computerCard.appendChild(computerQuote);
    let x = document.getElementsByClassName("battleArea")[0];
    x.appendChild(computerCard);
}

function checkWinner(winner) {
    console.log(winner);
    console.log(winner.includes("draw") == true)
    if (winner.includes("draw")) {
        let playerArea = document.getElementsByClassName("playerWeapon")[0];
        playerArea.style.backgroundColor = "grey";
        let computerArea = document.getElementsByClassName("computerWeapon")[0];
        computerArea.style.backgroundColor = "grey";
        totalRounds++;
    } else if (winner.includes("win")) {
        let playerArea = document.getElementsByClassName("playerWeapon")[0];
        playerArea.style.backgroundColor = "green";
        let computerArea = document.getElementsByClassName("computerWeapon")[0];
        computerArea.style.backgroundColor = "red";
        playerScore++;
        totalRounds++;
    } else {
        let playerArea = document.getElementsByClassName("playerWeapon")[0];
        playerArea.style.backgroundColor = "red";
        let computerArea = document.getElementsByClassName("computerWeapon")[0];
        computerArea.style.backgroundColor = "green";
        computerScore++;
        totalRounds++;
    }
}




function setBattleArea(playerChoice, computerChoice, winner) {
    setPlayerArea(playerChoice);
    setComputerArea(computerChoice);
    checkWinner(winner);
}

function setScore() {
    var scoring = document.getElementsByClassName("scoring")[0];
    scoring.textContent = "Number of Rounds: " + totalRounds + "     Player: " + playerScore + " Computer: " + computerScore;
}

function quitGame() {
    alert("Hi");
window.location.href="http://www.google.com";
}
function restart() {
    document.getElementsByClassName("wrapper")[0].textContent="";
    document.getElementsByClassName("playArea")[0].textContent="";
    document.getElementsByClassName("battleArea")[0].textContent="Let's go again!";
    playerScore = 0;
    computerScore = 0;
    totalRounds = 0;
    weapons.forEach(weapon => weapon.addEventListener("click", startRound));
}

function endGame() {
    weapons.forEach(weapon => weapon.removeEventListener("click", startRound));
    document.getElementsByClassName("battleArea")[0].innerHTML = "";
    document.getElementsByClassName("scoring")[0].innerHTML = "";
    document.getElementsByClassName("battleArea")[0].textContent = "Game Ended with Player: " + playerScore + " Computer: " + computerScore + "\n";
    let replay = document.createElement("button");
    replay.textContent = "Replay";
    replay.classList.add("button-3");
    replay.addEventListener("click", restart);
    document.getElementsByClassName("wrapper")[0].appendChild(replay);
    let quit = document.createElement("button");
    quit.textContent = "Quit";
    quit.classList.add("button-3");
    quit.addEventListener("click", quitGame);
    document.getElementsByClassName("wrapper")[0].appendChild(quit);
    
}

function startRound(e) {
    let playerChoice = e.target.textContent.trim();
    let computerChoice = getComputerChoice();
    let x = document.getElementsByClassName("battleArea")[0].innerHTML = "";
    playArea.textContent = (playRound(computerChoice, playerChoice));
    setBattleArea(playerChoice, computerChoice, playArea.textContent);
    setScore();
    if (totalRounds >= 5) {
        endGame();
    }
}
let weapons = document.querySelectorAll('button.weapon');
weapons.forEach(weapon => weapon.addEventListener("click", startRound));