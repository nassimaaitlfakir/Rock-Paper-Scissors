const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE!"
    }
    else{
        switch(playerChoice){
            case "rock":
               result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
            break;
            case "paper":
               result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
               break;
            case "scissors":
               result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
               break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("winText", "loseText");

    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("winText");
            playerScore++;
            playWinAnimation();
            playerScoreDisplay.textContent = playerScore
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("loseText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore
            break;
    
    }
   
    checkGameEnd();

}
function checkGameEnd() {
    if (playerScore === 10 || computerScore === 10) {
        const winner = playerScore === 10 ? "Player" : "Computer";
        displayWinnerCard(winner);
    }
}

function displayWinnerCard(winner) {
    // Create the winner card dynamically
    const winnerCard = document.createElement("div");
    winnerCard.classList.add("winner-card");
    winnerCard.innerHTML = `
        <h2>${winner} wins the game!</h2>
        <button id="restartButton">Play Again</button>
    `;
    document.body.appendChild(winnerCard);

    // Restart game when button is clicked
    document.getElementById("restartButton").addEventListener("click", () => {
        resetGame();
        document.body.removeChild(winnerCard);
    });
}


function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    resultDisplay.textContent = "";
    playerDisplay.textContent = "Player: ";
    computerDisplay.textContent = "Computer: ";
}

function playWinAnimation() {
    resultDisplay.classList.add("winAnimation");
    setTimeout(() => {
        resultDisplay.classList.remove("winAnimation");
    }, 1000);
}