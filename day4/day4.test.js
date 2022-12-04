const { test } = require("@jest/globals");
const { task1, task2 } = require('./day4.js');
const input = [
  "2-4,6-8",
  "2-3,4-5",
  "5-7,7-9",
  "2-8,3-7",
  "6-6,4-6",
  "2-6,4-8"
];

test("task 1", () => {
  expect(task1(input)).toBe(2);
});

test("task 2", () => {
  expect(task2(input)).toBe(4);
});