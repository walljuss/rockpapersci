const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  let loc = Math.floor(Math.random()*3);
  return choices[loc];
}

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "It's a tie!"
  } else if (playerSelection === 'rock') {
    if (computerSelection === 'paper'){
      return 'You lost!';
    } else {
      return 'You won!';
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'paper') {
      return 'You won!';
    } else {
      return 'You lost!';
    }
  } else {
    if (computerSelection === 'rock') {
      return 'You won!';
    } else {
      return 'You lost!';
    }
  }
}

const game = () => {
  let computerscore = 0;
  let playerscore = 0;
  console.log("Let the game begin! You'll be playing 5 rounds of rock, paper, scissors\
  with computer!");
  for (let i = 0; i<5; i++){
  
    let playerPick = prompt("Pick one!");
    playerPick = playerPick.toLowerCase();
    if ( (playerPick !== 'rock') && (playerPick !== 'paper') && 
    (playerPick !== 'scissors') ) {
      console.log('Please follow the game rules pick: \
       paper, rock or scissors! You lost this round');
       computerscore++;
       console.log(`Round ${i+1} \n Computer: ${computerscore} - Player: ${playerscore}`);
       continue;
    }
    let result = playRound(playerPick, getComputerChoice());
    if (result === 'You won!') {
      playerscore++;
    } else if (result === 'You lost!') {
      computerscore++;
    } 
    console.log(result);
    console.log(`Round ${i+1} \n Computer: ${computerscore} - Player: ${playerscore}`);
  }
  if (computerscore > playerscore) {
    console.log('Unfortunately, computer won the game!')
  } else if (playerscore > computerscore ){
    console.log('Congratulations, you won the game!')
  } else {
    console.log('The game is a tie!')
  }
 }