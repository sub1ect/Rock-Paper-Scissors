const showPlayerChoice = document.querySelector('.playerChoice');
const showComputerChoice = document.querySelector('.computerChoice');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
const choiceList = document.querySelectorAll('.choiceList li');
const tie = document.querySelector('.tie');

let pScore = 0;
playerScore.innerText = pScore;

let cScore = 0;
computerScore.innerText = cScore;

// computer random pick
const cpuChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const randomPick = Math.floor(Math.random() * (2 - 0 + 1)) + 0;

  return choices[randomPick];
};

const checkGameOver = () => {
  if (pScore >= 5) {
    alert('You have won, congratulations!');
    window.location.reload();
  }
  if (cScore >= 5) {
    alert('Sorry, you have lost, you can try again...');
    window.location.reload();
  }
};

// compare choices function
const compareChoices = (e) => {
  const player = e.target.className;
  showPlayerChoice.innerText = player;

  const computer = cpuChoice();
  showComputerChoice.innerText = computer;

  if (player === computer) {
    tie.style.display = 'block';
    return;
  }
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'scissors' && computer === 'paper') ||
    (player === 'paper' && computer === 'rock')
  ) {
    tie.style.display = 'none';
    pScore++;
    playerScore.innerText = pScore;
    setTimeout(() => {
      checkGameOver();
    }, 1);
  } else {
    tie.style.display = 'none';
    cScore++;
    computerScore.innerText = cScore;
    setTimeout(() => {
      checkGameOver();
    }, 1);
  }
};

// play round function
const playRound = (e) => {
  if (e.target.className.includes('rock')) {
    compareChoices(e);
  } else if (e.target.className.includes('paper')) {
    compareChoices(e);
  } else {
    compareChoices(e);
  }
};

// add play round event to choice buttons
choiceList.forEach((choice) => {
  choice.addEventListener('click', playRound);
});
