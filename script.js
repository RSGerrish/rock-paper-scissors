let playCount = 0;
let scoreComputer = 0;
let scorePlayer = 0;

function computerPlay() {
  let i = Math.floor(Math.random() * 3);

  if (i === 0) {
    return "Rock";
  } else if (i === 1) {
    return "Paper";
  } else if (i === 2) {
    return "Scissors";
  } else {
    return "Error!";
  }
};

function capitalize(str) {
  let firstLetter = str[0];
  let restWord = str.slice(1);

  return firstLetter.toUpperCase() + restWord.toLowerCase();
}

function playGame(playerSelection, computerSelection) {
  if (playerSelection === null || computerSelection === null) {
    return "Error null parameter identified";
  } else {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    playCount += 1;

    const computerScore = document.querySelector('#computer-score');
    const playerScore = document.querySelector('#player-score');
    
    if (playerSelection === "rock") {
      if (computerSelection === "rock") {
        return "Tie! Both players chose " + playerSelection;
      } else if (computerSelection === "paper") {
        scoreComputer += 1;
        computerScore.textContent = "Computer Score: \n" + scoreComputer;
        return "You Lose! " + capitalize(computerSelection) + " beats " + playerSelection;
      } else if (computerSelection === "scissors") {
        scorePlayer += 1;
        playerScore.textContent = "Player Score: \n" + scorePlayer;
        return "You Win! " + capitalize(playerSelection) + " crushes " + computerSelection;
      } else {
        return "Error! Instructions unclear";
      }
    } else if (playerSelection === "paper") {
      if (computerSelection === "rock") {
        scorePlayer += 1;
        playerScore.textContent = "Player Score: \n" + scorePlayer;
        return "You Win! " + capitalize(playerSelection) + " covers " + computerSelection;
      } else if (computerSelection === "paper") {
        return "Tie! Both players chose " + playerSelection;
      } else if (computerSelection === "scissors") {
        scoreComputer += 1;
        computerScore.textContent = "Computer Score: \n" + scoreComputer;
        return "You Lose! " + capitalize(computerSelection) + " beats " + playerSelection;
      } else {
        return "Error! Instructions unclear";
      }
    } else if (playerSelection === "scissors") {
      if (computerSelection === "rock") {
        scoreComputer += 1;
        computerScore.textContent = "Computer Score: \n" + scoreComputer;
        return "You Lose! " + capitalize(computerSelection) + " beats " + playerSelection;
      } else if (computerSelection === "paper") {
        scorePlayer += 1;
        playerScore.textContent = "Player Score: \n" + scorePlayer;
        return "You Win! " + capitalize(playerSelection) + " shreds " + computerSelection;
      } else if (computerSelection === "scissors") {
        return "Tie! Both players chose " + playerSelection;
      } else {
        return "Error! Instructions unclear";
      }
    } else {
      return "Error! Error!";
    }
  }
}

function drawBoard() {
  const instructDiv = document.createElement('div');
  const btnContainer = document.createElement('div');
  const scorePlayerDiv = document.createElement('div');
  const scoreComputerDiv = document.createElement('div');
  const btnRock = document.createElement('div');
  const btnPaper = document.createElement('div');
  const btnScissors = document.createElement('div');
  const resultsDiv = document.createElement('div');
  const winnerDiv = document.createElement('div');
  const container = document.querySelector('body');

  instructDiv.textContent = "Please make your choice...";

  btnContainer.classList.add('btnContainer');

  scorePlayerDiv.textContent = "Player Score: \n0";
  scorePlayerDiv.classList.add('score-card');
  scorePlayerDiv.setAttribute('id', 'player-score');

  scoreComputerDiv.textContent = "Computer Score: \n0";
  scoreComputerDiv.classList.add('score-card');
  scoreComputerDiv.setAttribute('id', 'computer-score');

  btnRock.textContent = "Rock";
  btnRock.classList.add('btn');

  btnPaper.textContent = "Paper";
  btnPaper.classList.add('btn');

  btnScissors.textContent = "Scissors";
  btnScissors.classList.add('btn');

  instructDiv.classList.add('instructions');
  resultsDiv.classList.add('results');
  winnerDiv.classList.add('winner');

  container.appendChild(instructDiv);
  container.appendChild(btnContainer);
  btnContainer.appendChild(scorePlayerDiv);
  btnContainer.appendChild(btnRock);
  btnContainer.appendChild(btnPaper);
  btnContainer.appendChild(btnScissors);
  btnContainer.appendChild(scoreComputerDiv);
  container.appendChild(resultsDiv);
  container.appendChild(winnerDiv);

  btnRock.addEventListener('click', function () {
    resultsDiv.textContent = playGame('rock', computerPlay());

    if (playCount >= 5) {
      if(scorePlayer > scoreComputer) {winnerDiv.textContent = `You Won It All! ${scorePlayer} to ${scoreComputer}`}
      else if (scorePlayer < scoreComputer) {winnerDiv.textContent = `You Were Beat By a Dumb Computer LUL ${scorePlayer} to ${scoreComputer}`}
      else if (scorePlayer === scoreComputer) {winnerDiv.textContent = `Its an Overall Tie! Womp Womp ${scorePlayer} to ${scoreComputer}`}
      else {winnerDiv.textContent = "ERROR ERROR ERROR"}
    }
  });

  btnPaper.addEventListener('click', function () {
    
    resultsDiv.textContent = playGame('paper', computerPlay());

    if (playCount >= 5) {
      if(scorePlayer > scoreComputer) {winnerDiv.textContent = `You Won It All! ${scorePlayer} to ${scoreComputer}`}
      else if (scorePlayer < scoreComputer) {winnerDiv.textContent = `You Were Beat By a Dumb Computer LUL ${scorePlayer} to ${scoreComputer}`}
      else if (scorePlayer === scoreComputer) {winnerDiv.textContent = `Its an Overall Tie! Womp Womp ${scorePlayer} to ${scoreComputer}`}
      else {winnerDiv.textContent = "ERROR ERROR ERROR"}
    }
  });

  btnScissors.addEventListener('click', function () {
    resultsDiv.textContent = playGame('scissors', computerPlay());

    if (playCount >= 5) {
      if(scorePlayer > scoreComputer) {winnerDiv.textContent = `You Won It All! ${scorePlayer} to ${scoreComputer}`}
      else if (scorePlayer < scoreComputer) {winnerDiv.textContent = `You Were Beat By a Dumb Computer LUL ${scorePlayer} to ${scoreComputer}`}
      else if (scorePlayer === scoreComputer) {winnerDiv.textContent = `Its an Overall Tie! Womp Womp ${scorePlayer} to ${scoreComputer}`}
      else {winnerDiv.textContent = "ERROR ERROR ERROR"}
    }
  });
}

drawBoard();