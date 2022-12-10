const { test } = require("@jest/globals");
const { task1 } = require('./day10-task1.js');
const { task2 } = require('./day10-task2.js');
const fs = require('fs');

const input = fs.readFileSync(`${__dirname}/test-input.txt`).toString().split('\n');

test('task 1', () => {
  expect(task1(input)).toBe(13140);
});

test('task 2', () => {
  const expected = [
    '##  ##  ##  ##  ##  ##  ##  ##  ##  ##  ',
    '###   ###   ###   ###   ###   ###   ### ',
    '####    ####    ####    ####    ####    ',
    '#####     #####     #####     #####     ',
    '######      ######      ######      ### ',
    '#######       #######       #######     '
  ];

  const actual = task2(input);

  expect(actual).toEqual(expected);
});