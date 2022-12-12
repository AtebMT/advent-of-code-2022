const task = require('./day11');
const fs = require('fs');

const input = fs.readFileSync(`${__dirname}/input.txt`).toString().split('\n');

console.log('Task 1', task(input, false, 20));
console.log('Task 2', task(input, true, 10000));