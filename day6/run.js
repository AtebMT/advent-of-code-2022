const { task1, task2 } = require('./day6');
const fs = require('fs');

const input = fs.readFileSync(`${__dirname}/input.txt`).toString();

console.log('Task 1', task1(input));
console.log('Task 2', task2(input));