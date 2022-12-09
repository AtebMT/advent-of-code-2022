const { test } = require("@jest/globals");
const { task1 } = require('./day9-task1.js');
const { task2 } = require('./day9-task2.js');

test('task 1', () => {
  const input = [
    'R 4',
    'U 4',
    'L 3',
    'D 1',
    'R 4',
    'D 1',
    'L 5',
    'R 2'
  ];
  expect(task1(input)).toBe(13);
});

test('task 2', () => {
  const input = [
    'R 5',
    'U 8',
    'L 8',
    'D 3',
    'R 17',
    'D 10',
    'L 25',
    'U 20'
  ];

  expect(task2(input)).toBe(36);
});