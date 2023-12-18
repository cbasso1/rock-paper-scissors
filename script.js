let playerScore = 0;
let compScore = 0;

const rockbutton = document.querySelector('.rock');
const paperbutton = document.querySelector('.paper');
const scissorsbutton = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcome');


const getComputerChoice = () => {
  const arrOfChoices = ['rock', 'paper', 'scissors']
  const randomNum = Math.floor(Math.random() * 3);
  return arrOfChoices[randomNum];
}
  getComputerChoice();

  const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === 'rock' && computerSelection === 'rock'){
      const p = document.createElement('p');
      p.innerText = 'Tie! You both picked rock';
      outcomeDiv.appendChild(p)
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
      const p = document.createElement('p');
      p.innerText = 'Tie! You both picked scissors';
      outcomeDiv.appendChild(p)
    } else if (playerSelection === 'paper' && computerSelection === 'paper'){
      const p = document.createElement('p');
      p.innerText = 'Tie! You both picked paper';
      outcomeDiv.appendChild(p)
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
      const p = document.createElement('p');
      playerScore++
      p.innerText = 'Win! Rock beats scissors';
      outcomeDiv.appendChild(p)
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
      const p = document.createElement('p');
      compScore++
      p.innerText = 'Lose! Paper beats rock';
      outcomeDiv.appendChild(p)
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
      const p = document.createElement('p');
      playerScore++
      p.innerText = 'Win! Paper beats rock';
      outcomeDiv.appendChild(p)
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
      const p = document.createElement('p');
      compScore++
      p.innerText = 'Lose! Scissors beats paper';
      outcomeDiv.appendChild(p)
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
      const p = document.createElement('p');
      compScore++
      p.innerText = 'Lose! Rock beats scissors';
      outcomeDiv.appendChild(p)
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
      const p = document.createElement('p');
      playerScore++
      p.innerText = 'Win! Scissors beats paper';
      outcomeDiv.appendChild(p)
    }
  }

  const checkForWinner = (playerScore, compScore) => {
    if (playerScore === 5) {
      const h2 = document.createElement('h2');
      h2.classList.add('player-won');
      h2.innerText = `You won ${playerScore} to ${compScore}, great job beating the computer`;
      outcomeDiv.append(h2);
    } else if (compScore === 5){
      const h2 = document.createElement('h2');
      h2.classList.add('computer-won')
      outcomeDiv.append(h2);
    }
  }

  rockbutton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore, compScore);
  });
  
  paperbutton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore, compScore);
  });

  scissorsbutton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore, compScore);
  });


/*const game = () => {


   if (playerScore > compScore){
    return 'You beat the computer! genius!'
   } else if (playerScore < compScore){
    return 'You got beat by the computer! Cry in a corner!'
   } else {
    return 'Giant tie! Not too shabby'
   }
}

console.log(game ()); */
  

    