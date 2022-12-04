const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split('\n');

const abcMap = {
  A: 'rock',
  B: 'paper',
  C: 'scissors'
};

const xyzMap = {
  X: 'lose',
  Y: 'draw',
  Z: 'win'
};

const scores = {
  rock: 1,
  paper: 2,
  scissors: 3
};

const choice = {
  win: {
    rock: 'paper',
    paper: 'scissors',
    scissors: 'rock'
  },
  lose: {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
  },
  draw: {
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors'
  }
};

const outcomes = {
  rock: {
    rock: 3,
    paper: 6,
    scissors: 0
  },
  paper: {
    rock: 0,
    paper: 3,
    scissors: 6
  },
  scissors: {
    rock: 6,
    paper: 0,
    scissors: 3
  }
};

const calcOutcome = (opponent, decision) => {
  const me = choice[decision][opponent];
  console.log(opponent, decision, me);
  const outcome = outcomes[opponent][me];

  return outcome + scores[me];
};

let totalScore = 0;

// const input = [
//   'A Y',
//   'B X',
//   'C Z'
// ];

input.forEach(inp => {
  const [opponent, me] = inp.split(' ');

  totalScore += calcOutcome(abcMap[opponent], xyzMap[me]);
});

console.log(totalScore);