let stateStack = [];

const cd = (argument, state) => {
  if (argument == '..') {
    return stateStack.pop();
  };

  stateStack.push(state);

  return state[argument];
};

const calcDirectorySize = (folder) => {
  let directorySize = 0;

  for (const prop in folder) {
    if (typeof folder[prop] === 'object') {
      directorySize += calcDirectorySize(folder[prop]);
    } else {
      directorySize += folder[prop];
    }
  }

  folder["size"] = directorySize;

  return directorySize;
};

const filterSize = (size) => size <= 100000 ? size : 0;

const calcTotal = (folder) => {
  total = filterSize(folder.size);
  for (const prop in folder) {
    if (typeof folder[prop] === 'object') {
      total += calcTotal(folder[prop]);
    }
  }

  return total;
};

const parseLine = (line, state) => {
  const [a, b, c] = line.split(' ');

  if (a === '$' && b === 'cd') return cd(c, state);

  if (a === '$' && b === 'ls') return state;

  state[b] = a === 'dir' ? {} : parseInt(a);

  return state;
};

const parseInputAndCalcDirectorySizes2 = (input, state) => {
  input.forEach(line => {
    state = parseLine(line, state);
  });

  state = stateStack[0];
  calcDirectorySize(state);

  return state;
};

const filterDirectorySize = (directoryCandidates, folder) => {
  for (const prop in folder) {
    if (typeof folder[prop] === 'object') {
      filterDirectorySize(directoryCandidates, folder[prop]);
    } else {
      directoryCandidates.push(folder.size);
    }
  }

  return directoryCandidates;
}

function compareNumbers(a, b) {
  return a - b;
}

const task1 = (input) => {
  stateStack = [];
  state = parseInputAndCalcDirectorySizes2(input,  { '/': {} });

  let result = calcTotal(state);

  return result;
};

const task2 = (input) => {
  stateStack = [];
  state = parseInputAndCalcDirectorySizes2(input,  { '/': {} });

  const spaceToFind = 30000000 - (70000000 - state.size);

  const result = filterDirectorySize([], state)
    .filter(element => element >= spaceToFind)
    .sort(compareNumbers)
    [0];

  return result;
};

module.exports = {
  task1,
  task2
};

