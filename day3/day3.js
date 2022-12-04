const findDuplicate = (str) => {
  const midPoint = str.length / 2;
  const firstItem = str.substring(0, midPoint);
  const secondItem = str.substring(midPoint);

  return firstItem.split('').find(c => secondItem.indexOf(c) != -1);
};

const findDuplicateInGroups = ([a,b,c]) => {
  return a.split('').find(c => b.indexOf(c) != -1 && c.indexOf(c) != -1);
};

const calcPriorityScore = (c) => {
  if (c === null) return 0;

  const charCode = c.charCodeAt(0);
  return charCode - (charCode < 97 ? 38 : 96);
};

const task1 = (input) => input.reduce((acc, curr) => acc + calcPriorityScore(findDuplicate(curr)),0);

const task2 = (input) => {
  let priorityScore = 0;

  for (let i = 0; i < input.length; i += 3)
  {
    priorityScore += calcPriorityScore(findDuplicateInGroups(input.slice(i, i+3)));
  }
  return priorityScore;
};

module.exports = {
  task1,
  task2
};