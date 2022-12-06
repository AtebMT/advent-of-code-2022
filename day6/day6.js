const findUnique = (input, len) => {
  const inputArr = [...input];
  let count = 0;

  do {
    markers = new Set(inputArr.slice(count, count+len));
    ++count;
  }
  while (markers.size != len);

  return count + len - 1;
};

const task1 = (input) => {
  return findUnique(input, 4);
};

const task2 = (input) => {
  return findUnique(input, 14);
};

module.exports = {
  task1,
  task2
};