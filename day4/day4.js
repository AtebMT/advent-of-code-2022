
const getAssignmentRange = (pair) => {
  const assignment = pair.split('-');
  const start = parseInt(assignment[0]);
  const finish = parseInt(assignment[1]);

  return [...Array(finish-start+1).keys()].map(i => i + start);
};

const subset = ([assign1, assign2]) => {
  const result1 = assign1.every(val => assign2.includes(val));
  const result2 = assign2.every(val => assign1.includes(val));

  return (result1 || result2) ? 1 : 0;
}

const overlap = ([assign1, assign2]) => {
  const result1 = assign1.find(val => assign2.includes(val));

  return result1 ? 1 : 0;
};


const task1 = (input) => {
  return input.reduce((acc, inp) => {
    acc += subset(inp.split(',').map(getAssignmentRange));

    return acc;
  }, 0);
};

const task2= (input) => {
  return input.reduce((acc, inp) => {
    acc += overlap(inp.split(',').map(getAssignmentRange));

    return acc;
  }, 0);
};

module.exports = {
  task1,
  task2
};