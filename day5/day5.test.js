const { test } = require("@jest/globals");
const { task1, task2 } = require('./day5.js');
const input =  [
  '    [D]    ',
  '[N] [C]    ',
  '[Z] [M] [P]',
  ' 1   2   3' ,
  '',
  'move 1 from 2 to 1',
  'move 3 from 1 to 3',
  'move 2 from 2 to 1',
  'move 1 from 1 to 2;'
];

test("task 1", () => {
  expect(task1(input)).toBe('CMZ');
});

test("task 2", () => {
  expect(task2(input)).toBe('MCD');
});