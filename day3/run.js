const { task1, task2 } = require('./day3');
const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split('\n');

console.log('Task 1', task1(input));
console.log('Task 2', task2(input));