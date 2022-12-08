const checkIfVisible = (trees, allTrees, i) => trees.every(tree => tree < allTrees[i]);

const isVisible = (trees, treeNumber) => {
  if (checkIfVisible(trees.slice(0, treeNumber), trees, treeNumber)) return true;
  if (checkIfVisible(trees.slice(treeNumber+1), trees, treeNumber)) return true;

  return false;
};

const calcIfVisible = (horizontalTrees, input, treeNumber, rowNumber) => {
  if (isVisible(horizontalTrees, treeNumber)) return 1;

  const verticalTrees = input.map(inp => inp[treeNumber]);

  return isVisible(verticalTrees, rowNumber) ? 1 : 0;
};

const calcVisibleTrees = (input, rowNumber) => {
  const horizontalTrees = [...input[rowNumber]];
  let visibleTrees = 0;

  for (let i = 1; i < horizontalTrees.length-1; i++) {
    visibleTrees += calcIfVisible(horizontalTrees, input, i, rowNumber);
  };

  return visibleTrees;
}

const compareNumbersHighToLow = (a, b) => {
  return b - a;
};

const getDistance = (trees, treeHeight) => {
  if (trees.length === 0) return 0;

  let distanceIdx = trees.findIndex(tree => tree >= treeHeight);

  if (distanceIdx === -1) {
    distanceIdx = trees.length-1;
  }

  return distanceIdx+1;
};

const calcScenicScore = (horizontalTrees, input, treeNumber, rowNumber) => {
  const leftScore = getDistance(horizontalTrees.slice(0, treeNumber).reverse(), parseInt(horizontalTrees[treeNumber]));
  const rightScore = getDistance(horizontalTrees.slice(treeNumber+1), parseInt(horizontalTrees[treeNumber]));

  const verticalTrees = input.map(inp => inp[treeNumber]);
  const upScore = getDistance(verticalTrees.slice(0, rowNumber).reverse(), parseInt(verticalTrees[rowNumber]));
  const downScore = getDistance(verticalTrees.slice(rowNumber+1), parseInt(verticalTrees[rowNumber]));

  return leftScore * rightScore * upScore * downScore;
};

const calcScenicScores = (input, rowNumber) => {
  const horizontalTrees = [...input[rowNumber]];
  let scenicScores = [];

  for (let i = 0; i < horizontalTrees.length; i++) {
    scenicScores.push(calcScenicScore(horizontalTrees, input, i, rowNumber));
  };

  return scenicScores.sort(compareNumbersHighToLow)[0];
};

const task1 = (input) => {
  let numOfTreesVisible = (input[0].length + input.length) * 2 - 4;

  console.log(numOfTreesVisible);

  for (let i = 1; i < input.length-1; i++) {
    numOfTreesVisible += calcVisibleTrees(input, i);
  }

  return numOfTreesVisible;
};

const task2 = (input) => {
  let scenicScore = 0;

  for (let i = 0; i < input.length; i++) {
    const maxScenicTreeScore = calcScenicScores(input, i);
    scenicScore = maxScenicTreeScore > scenicScore ? maxScenicTreeScore : scenicScore;
  }

  return scenicScore;
};

module.exports = {
  task1,
  task2
};