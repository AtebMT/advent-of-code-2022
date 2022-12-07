const { test } = require("@jest/globals");
const { task1, task2 } = require('./day7.js');

const input = [
  '$ cd /',
  '$ ls',
  'dir a',
  '14848514 b.txt',
  '8504156 c.dat',
  'dir d',
  '$ cd a',
  '$ ls',
  'dir e',
  '29116 f',
  '2557 g',
  '62596 h.lst',
  '$ cd e',
  '$ ls',
  '584 i',
  '$ cd ..',
  '$ cd ..',
  '$ cd d',
  '$ ls',
  '4060174 j',
  '8033020 d.log',
  '5626152 d.ext',
  '7214296 k'
];

test('task 1', () => {
  expect(task1([...input])).toBe(95437);
});

test('task 2', () => {
  expect(task2([...input])).toBe(24933642);
});