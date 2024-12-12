//header elements
const header = document.querySelector('header');
const heading = header.querySelector('h1');
const computerScore = header.querySelector('.cScore');
const playerScore = header.querySelector('.pScore');
const resetButton = header.querySelector('button');

//main elements
const main = document.querySelector('main');
const rockButton = main.querySelector('.rock');
const paperButton = main.querySelector('.paper');
const scissorButton = main.querySelector('.Scissor');

// Function to log the user's choice
function playerChoice(choice) {
    console.log(`${choice}`);
}

// Add event listeners to user buttons
rockButton.addEventListener('click', () => playerChoice('Rock'));
paperButton.addEventListener('click', () => playerChoice('Paper'));
scissorButton.addEventListener('click', () => playerChoice('Scissor'));


function RandomChoice() {
    const choices = ['Rock', 'Paper', 'Scissor'];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

console.log(RandomChoice());


if (playerChoice()===RandomChoice()){
    console.log("nice")
}   else{"lol"}



