const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split('\n');

let calorieCount = 0;

let calories = [];

function compareNumbers(a, b) {
  return b - a;
}

input.forEach(inp => {
  if (inp === '') {
    calories.push(calorieCount);
    calorieCount = 0;
  } else {
    calorieCount += parseInt(inp);
  }
});

calories.sort(compareNumbers);
console.log(calories);
const top3 = calories[0] + calories[1] + calories[2];
console.log("****", top3);

