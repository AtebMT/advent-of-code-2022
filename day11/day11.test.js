const { test } = require("@jest/globals");
const task = require('./day11.js');
const fs = require('fs');

const input = fs.readFileSync(`${__dirname}/test-input.txt`).toString().split('\n');

test('task 1', () => {
  expect(task(input, false, 20)).toBe(10605);
});

test('task 2', () => {
  expect(task(input, true, 10000)).toBe(2713310158);
});