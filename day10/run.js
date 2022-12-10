const { task1 } = require('./day10-task1');
const { task2 } = require('./day10-task2');
const fs = require('fs');

const input = fs.readFileSync(`${__dirname}/input.txt`).toString().split('\n');

console.log('Task 1', task1(input));
console.log('Task 2', task2(input));