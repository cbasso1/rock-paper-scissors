let playerScore = 0;
let compScore = 0;

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
      playerScore++
      return 'Win! Rock beats scissors';
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
      compScore++
      return 'Lose! Paper beats rock';
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
      playerScore++
      return 'Win! Paper beats rock';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
      compScore++
      return 'Lose! Scissors beats paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
      compScore++
      return 'Lose! Rock beats scissors';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
      playerScore++
      return 'Win! Scissors beats paper';
    }
  }


  


const game = () => {
  for (let i = 0; i < 5; i++){
    const playerSelection = prompt("Choose what to throw", 'Rock, Paper, Scissors').toLowerCase();
    const computerSelection = getComputerChoice();
    console.log('1 ', playRound(playerSelection, computerSelection));
  }
   if (playerScore > compScore){
    return 'You beat the computer! genius!'
   } else if (playerScore < compScore){
    return 'You got beat by the computer! Cry in a corner!'
   } else {
    return 'Giant tie! Not too shabby'
   }
}

console.log(game ());
  

    