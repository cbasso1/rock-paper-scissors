const getComputerChoice = () => {
  const arrOfChoices = ['rock', 'paper', 'scissors']
  const randomNum = Math.floor(Math.random() * 3);
  return arrOfChoices[randomNum];
}
  getComputerChoice();

  const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === 'rock' && computerSelection === 'rock'){
      return 'Tie! You both picked rock';
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
      return 'Tie! You both picked scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'paper'){
      return 'Tie! You both picked paper';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
      return 'Win! Rock beats scissors';
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
      return 'Lose! Paper beats rock';
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
      return 'Win! Paper beats rock';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
      return 'Lose! Scissors beats paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
      return 'Lose! Rock beats scissors';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
      return 'Win! Scissors beats paper';
    }
  }
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
    