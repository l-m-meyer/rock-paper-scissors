// find and store display elements
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('input');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;
  generateComputerChoice();
  getResult();
}))

// generate random computer choice
function generateComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  
  if (randomNum === 1) {
    computerChoice = 'rock';
  }
  if (randomNum === 2) {
    computerChoice = 'paper';
  }
  if (randomNum === 3) {
    computerChoice = 'scissors';
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

// get winner result 
function getResult() {
  if (computerChoice === userChoice) {
    result = 'It\'s a draw!';
  }
  else {
    switch(computerChoice) {
      case 'rock':
        if (userChoice === 'paper') {
          result = 'You win!';
        } if (userChoice === 'scissors') {
          result = 'You lose!';
        }
        break;
      case 'paper':
        if (userChoice === 'rock') {
          result = 'You lose!';
        } if (userChoice === 'scissors') {
          result = 'You win!';
        }
        break;
      case 'scissors':
        if (userChoice === 'rock') {
          result = 'You win!';
        } if (userChoice === 'paper') {
          result = 'You lose!';
        }
        break;
    }
  }
  resultDisplay.innerHTML = result;
}


