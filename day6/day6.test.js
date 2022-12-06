const { test } = require("@jest/globals");
const { task1, task2 } = require('./day6.js');

test('task 1', () => {
  expect(task1('mjqjpqmgbljsphdztnvjfqwrcgsmlb')).toBe(7);
  expect(task1('nppdvjthqldpwncqszvftbrmjlhg')).toBe(6);
  expect(task1('bvwbjplbgvbhsrlpgdmjqwftvncz')).toBe(5);
  expect(task1('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg')).toBe(10);
  expect(task1('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw')).toBe(11);
});

test('task 2', () => {
  expect(task2('mjqjpqmgbljsphdztnvjfqwrcgsmlb')).toBe(19);
  expect(task2('nppdvjthqldpwncqszvftbrmjlhg')).toBe(23);
  expect(task2('bvwbjplbgvbhsrlpgdmjqwftvncz')).toBe(23);
  expect(task2('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg')).toBe(29);
  expect(task2('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw')).toBe(26);
});