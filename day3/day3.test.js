const { test } = require("@jest/globals");
const { task1, task2 } = require('./day3.js');
const input = [
  "vJrwpWtwJgWrhcsFMMfFFhFp",
  "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
  "PmmdzqPrVvPwwTWBwg",
  "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
  "ttgJtRGJQctTZtZT",
  "CrZsJsPPZsGzwwsLwLmpwMDw"
];

test("task 1", () => {
  expect(task1(input)).toBe(157);
});

test("task 2", () => {
  expect(task2(input)).toBe(70);
});