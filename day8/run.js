const { task1, task2 } = require('./day8');
const fs = require('fs');

const input = fs.readFileSync(`${__dirname}/input.txt`).toString().split('\n');

console.log('Task 1', task1(input));
console.log('Task 2', task2(input));