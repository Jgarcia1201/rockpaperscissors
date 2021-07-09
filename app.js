// Variables 
let compChoice; 
let playerChoice; 
let choices = ["Rock", "Paper", "Scissors"];
let result; 
let playerScore = 0;
let compScore = 0; 
let winner;

let btn1 = document.getElementById("rock");
let btn2 = document.getElementById("paper");
let btn3 = document.getElementById("scis");

let resultDisplay = document.querySelector(".results"); 
let scores = document.querySelector(".score"); 

let replay = document.querySelector(".replay"); 
let againBox = document.createElement('button'); 

// Functions: 

// Computer Picking Random Choice:
function computerPlay() {
    let compChoice = choices[Math.floor(Math.random()*choices.length)].toLowerCase(); 
    return compChoice; 
}


// Checking Winner: 
function checkWin(compScore, playerScore) {
    if (compScore == 5) { 
        scores.textContent = "I WIN HAHAHAHAHAHAAHA";
        playAgain(); 
    }
    if (playerScore == 5) { 
        scores.textContent = "YOU WIN.";
        playAgain(); 
    }
}

// Resetting Scores: 
function resetScores() {
    compScore = 0;
    playerScore = 0; 
}

function playAgain() {
    againBox.textContent = "Play Again?"; 
    replay.style.display = "flex"; 
    replay.style.justifyContent = "center"; 
    againBox.style.backgroundColor = "black"; 
    againBox.style.color = "white"; 
    againBox.style.marginTop = "30px"; 
    againBox.style.width = "100px";
    againBox.style.height = "50px"; 
    againBox.style.borderColor = "white";
    againBox.style.borderWidth = "1px"; 
    againBox.style.borderRadius = "8px"; 
    replay.appendChild(againBox); 
}

// Playing a Round:
function playRound(playerChoice, compChoice) {
    while (playerScore !== 5 && compScore !== 5) {
        compChoice = computerPlay();    // Create Computer Choice

        // Winning/Losing: 
        if (playerChoice == "rock" && compChoice == "paper") {
            result = "lose"; 
            resultDisplay.textContent = "PAPER BEATS ROCK. LOSER.";
            compScore++;
            scores.textContent = "You: " + playerScore + " Computer: " + compScore;
            checkWin(compScore, playerScore);  // Checking Win. 
            return result; 
        }
        if (playerChoice == "rock" && compChoice == "scissors") {
            result = "win"; 
            resultDisplay.textContent = "ROCK BEATS SCISSORS. YOU WIN.";
            playerScore++; 
            scores.textContent = "You: " + playerScore + " Computer: " + compScore;
            checkWin(compScore, playerScore);  // Checking Win. 
            return result; 
        }
        if (playerChoice == "paper" && compChoice == "rock") { 
            result = "win";  
            resultDisplay.textContent = "PAPER BEATS ROCK. YOU WIN.";
            playerScore++; 
            scores.textContent = "You: " + playerScore + " Computer: " + compScore; 
            checkWin(compScore, playerScore);  // Checking Win. 
            return result; 
        }
        if (playerChoice == "paper" && compChoice == "scissors") {
            result = "lose";
            resultDisplay.textContent = "SCISSORS BEATS PAPER. LOSER.";
            compScore++;
            scores.textContent = "You: " + playerScore + " Computer: " + compScore; 
            checkWin(compScore, playerScore);  // Checking Win. 
            return result;
        }
        if (playerChoice == "scissors" && compChoice == "paper") {
            result = "win";
            resultDisplay.textContent = "SCISSORS BEATS PAPER. YOU WIN.";
            playerScore++;
            scores.textContent = "You: " + playerScore + " Computer: " + compScore;  
            checkWin(compScore, playerScore);  // Checking Win. 
            return result; 
        }
        if (playerChoice == "scissors" && compChoice == "rock") {
            result = "lose"; 
            resultDisplay.textContent = "ROCK BEATS SCISSORS. LOSER.";
            compScore++; 
            scores.textContent = "You: " + playerScore + " Computer: " + compScore; 
            checkWin(compScore, playerScore);  // Checking Win. 
            return result; 
        }
        if (playerChoice === compChoice) { 
            result = "draw";
            resultDisplay.textContent = "DRAW."
            scores.textContent = "You: " + playerScore + " Computer: " + compScore; 
            checkWin(compScore, playerScore);  // Checking Win. 
            return result; 
        }
    }        
}

// Event Listeners: 
btn1.addEventListener("click", () => {
    playerChoice = "rock";
    playRound(playerChoice, compChoice); 
}); 

btn2.addEventListener("click", () => {
    playerChoice = "paper";
    playRound(playerChoice, compChoice);
});

btn3.addEventListener("click", () => {
    playerChoice = "scissors";
    playRound(playerChoice, compChoice);
});

againBox.addEventListener("click", () => {
    resetScores();
    resultDisplay.textContent = "LETS GO AGAIN."; 
    scores.textContent = "You: " + playerScore + " Computer: " + compScore; 
    replay.removeChild(againBox); 
}); 