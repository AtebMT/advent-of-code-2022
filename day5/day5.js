const extractInitialCrateConfig = (input) => {
  const indexEndOfConfig = input.findIndex(inp => inp.trim() === '');
  const stackedCrates = [];

  for (let i = indexEndOfConfig-2; i >= 0; i--) {
    const crates = (input[i]+' ').match(/.{4}/g); // Hack to add space, otherwise the last entry isn't returned.

    crates.forEach((crate, index) => {
      if (!stackedCrates[index]) {
        stackedCrates[index] = [];
      }

      if (crate.trim() !== '') {
          stackedCrates[index].push(crate.substring(1, 2)); // Strip away brackets. E.g.: Push C, rather than [C]
      }
    });
  };

  return stackedCrates;
};

const moveCrates = (input, stackedCrates) => {
  const regex = /[-]{0,1}[\d]*[.]{0,1}[\d]+/g;

  const startOfInstructions = input.findIndex(inp => inp.trim() === '')+1;

  for (let i = startOfInstructions; i < input.length; i++) {
    let [numToMove, from, to] = input[i].match(regex);

    while (numToMove--) {
      stackedCrates[to-1].push(stackedCrates[from-1].pop());
    }
  }

  return stackedCrates;
};

const moveCrates2 = (input, stackedCrates) => {
  const regex = /[-]{0,1}[\d]*[.]{0,1}[\d]+/g;

  const startOfInstructions = input.findIndex(inp => inp.trim() === '')+1;

  for (let i = startOfInstructions; i < input.length; i++) {
    const [numToMove, from, to] = input[i].match(regex);
    const cratesToMove = stackedCrates[from-1].slice(stackedCrates[from-1].length - numToMove);

    cratesToMove.forEach(crate => {
      stackedCrates[to-1].push(crate);
      stackedCrates[from-1].pop()
    });
  }

  return stackedCrates;
};

const getTopCrates = stackedCrates => {
  return stackedCrates.reduce((acc, crates) => acc + crates.pop()[0], '');
}

const task1 = (input) => {
  return getTopCrates(moveCrates(input, extractInitialCrateConfig(input)));
};

const task2 = (input) => {
  return getTopCrates(moveCrates2(input, extractInitialCrateConfig(input)));
};

module.exports = {
  task1,
  task2
};