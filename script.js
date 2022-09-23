const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  let loc = Math.floor(Math.random()*3);
  return choices[loc];
}

const game = (computerPick, playerPick, computerscore, playerscore, live) => {
  let i;
  if (computerPick.textContent === playerPick.textContent) {
    live.textContent = "It's a tie!"
  } else if (computerPick.textContent === 'rock') {
    if (playerPick.textContent === 'paper') {
      live.textContent = 'You won!'
      i =  parseInt(playerscore.textContent);
      i++;
      playerscore.textContent = i;
    } else {
      live.textContent = 'You lost!'
      i = parseInt(computerscore.textContent);
      i++;
      computerscore.textContent = i;
    }
  } else if (computerPick.textContent === 'paper') {
    if (playerPick.textContent === 'scissors') {
      live.textContent = 'You won!'
      i = parseInt(playerscore.textContent);
      i++;
      playerscore.textContent = i;
    } else {
      live.textContent = 'You lost!'
      i = parseInt(computerscore.textContent);
      i++;
      computerscore.textContent = i;
    } 
  } else {
    if (playerpick.textContent === 'paper') {
      live.textContent = 'You lost!';
      i = parseInt(computerscore.textContent);
      i++;
      computerscore.textContent = i;
    } else {
      live.textContent = 'You win!';
      i =  parseInt(playerscore.textContent);
      i++;
      playerscore.textContent = i;
    }
  }
}

 /* As player presses each image the variable choice saves the paper, rock, or scissors
 in choice variable */

 const playerpick = document.querySelector('.playerpick');
 const computerpick = document.querySelector('.computerpick');
 const comppoint = document.querySelector('.computerpoint');
 const playpoint = document.querySelector('.playerpoint');
 const livetext = document.querySelector('.live');
 let choice;

 const paper = document.getElementById('paper');
 paper.addEventListener('click', () => {
  choice = 'paper';
  playerpick.textContent = choice;
  computerpick.textContent = getComputerChoice();
  game(computerpick, playerpick, comppoint, playpoint, livetext);
 })

 const scissors = document.getElementById('scissors');
 scissors.addEventListener('click', () =>{
  choice = 'scissors';
  playerpick.textContent = choice;
  computerpick.textContent = getComputerChoice();
  game(computerpick, playerpick, comppoint, playpoint, livetext);

 })

 const rock = document.getElementById('rock');
 rock.addEventListener('click', () => {
  choice = 'rock';
  playerpick.textContent = choice;
  computerpick.textContent = getComputerChoice();
  game(computerpick, playerpick, comppoint, playpoint, livetext);
 })




