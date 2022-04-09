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
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      return "Tie! Both players chose " + playerSelection;
    } else if (computerSelection === "paper") {
      return "You Lose! " + capitalize(computerSelection) + " beats " + playerSelection;
    } else if (computerSelection === "scissors") {
      return "You Win! " + capitalize(playerSelection) + " crushes " + computerSelection;
    } else {
      return "Error! Instructions unclear";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return "You Win! " + capitalize(playerSelection) + " covers " + computerSelection;
    } else if (computerSelection === "paper") {
      return "Tie! Both players chose " + playerSelection;
    } else if (computerSelection === "scissors") {
      return "You Lose! " + capitalize(computerSelection) + " beats " + playerSelection;
    } else {
      return "Error! Instructions unclear";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "You Lose! " + capitalize(computerSelection) + " beats " + playerSelection;
    } else if (computerSelection === "paper") {
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

function game() {
  let brk = false;

  do {
    let userInput1 = prompt("Please make your choice. Paper, rock or scissors?");

    console.log(playGame(userInput1, computerPlay()));

    let userInput2 = confirm("Would you like to play again?");

    if (userInput2) {
      brk = false;
    } else {
      brk = true;
    }
  } while (brk === false);
}

game();