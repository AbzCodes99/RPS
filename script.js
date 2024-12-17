
const header = document.querySelector('header');
const heading = header.querySelector('h1');
const computerScore = header.querySelector('.cScore');
const playerScore = header.querySelector('.pScore');
const main = document.querySelector('main');
const rockButton = main.querySelector('.rock');
const paperButton = main.querySelector('.paper');
const scissorButton = main.querySelector('.Scissor');
const resetButton = main.querySelector('.reset'); 
const resultDisplay = main.querySelector('h2');

let playerScoreValue = 0;
let computerScoreValue = 0;

// Function to get random choice for the computer
function getRandomChoice() {
    const choices = ['Rock', 'Paper', 'Scissor'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to get the winner
function playRound(playerChoice) {
    const computerChoice = getRandomChoice();
    
    if (playerChoice === computerChoice) {
        resultDisplay.textContent = `It's a draw! Both chose ${playerChoice}.`;
        return;
    }

    if (
        (playerChoice === 'Rock' && computerChoice === 'Scissor') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissor' && computerChoice === 'Paper')
    ) {
        playerScoreValue++;
        playerScore.textContent = playerScoreValue;
        resultDisplay.textContent = `You Win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        computerScoreValue++;
        computerScore.textContent = computerScoreValue;
        resultDisplay.textContent = `You Lose! ${computerChoice} beats ${playerChoice}.`;
    }
}

rockButton.addEventListener('click', () => playRound('Rock'));
paperButton.addEventListener('click', () => playRound('Paper'));
scissorButton.addEventListener('click', () => playRound('Scissor'));


resetButton.addEventListener('click', () => {
    playerScoreValue = 0;
    computerScoreValue = 0;
    playerScore.textContent = playerScoreValue;
    computerScore.textContent = computerScoreValue;
    resultDisplay.textContent = '';
});



