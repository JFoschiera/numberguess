let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 9)
}

let compareGuesses = (human, compu, secret) => {
  const humanDif = Math.abs(secret - human);
  const compuDif = Math.abs(secret - compu);
  if (humanDif < compuDif) {
    return true;
  } else if (humanDif > compuDif) {
    return false;
  } else {
    return true;
  }
};

let updateScore = (winner) => {
  if (compareGuesses() === true) {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
};

let advanceRound = () => {
  currentRoundNumber +=1;
}
