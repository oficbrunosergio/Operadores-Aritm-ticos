const result = document.querySelector(".result");
const humanScore = document.querySelector("#human-score");
const machineScore = document.querySelector("#machine-score");

let humanScoreNumber = 0;
let machineScoreNumber = 0;

//ENUMS
const GAME_OPTIONS = {
  ROCK: 'rock',
  PAPER: 'paper',
  SCISSORS: 'scissors'
}
/*
Formatos de variaveis:
humanScoreNumber -> Camel Case = São as variaveis com as difisões feita por letras maiusculas.
GAME_OPTIONS     -> Snake Casa = São as variaveis com as divisões feitas por ANDERLAINE _.
*/

const playHuman = (humanChoice) => {
  const machineChoice = playMachine();
  playTheGame(humanChoice, machineChoice.trim()); 
};

const playMachine = () => {
  const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]; 
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

const playTheGame = (human, machine) => {
  console.log("Humano: " + human + " Máquina: " + machine); 

  if (human === machine) {
    result.innerHTML = "Deu empate!";
  } else if (
    (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
    (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
    (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)
  ) {
    humanScoreNumber++;
    humanScore.innerHTML = humanScoreNumber;
    result.innerHTML = "Você ganhou!";
  } else {
    machineScoreNumber++;
    machineScore.innerHTML = machineScoreNumber;
    result.innerHTML = "Você perdeu para a Alexa!";
  }
};