const { task1 } = require('./day9-task1.js');
const { task2 } = require('./day9-task2.js');
const fs = require('fs');

const input = fs.readFileSync(`${__dirname}/input.txt`).toString().split('\n');

console.log('Task 1', task1(input));
console.log('Task 2', task2(input));