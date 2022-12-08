const { test } = require("@jest/globals");
const { task1, task2 } = require('./day8.js');

const input = [
  '30373',
  '25512',
  '65332',
  '33549',
  '35390'
];

test('task 1', () => {
  expect(task1(input)).toBe(21);
});

test('task 2', () => {
  expect(task2(input)).toBe(8);
});