let cycleNum = 1;
let rows = '';

const getPixel = (registerX) => {
  const rowIndex = (cycleNum  % 40)-1;

  return rowIndex >= registerX - 1 && rowIndex <= registerX + 1 ? '#' : ' ';
};

const noop = (_value, prevRegisterX) => {
  rows = rows + getPixel(prevRegisterX);

  ++cycleNum;

  return prevRegisterX;
};

const addx = (value, prevRegisterX) => {
  rows = rows + getPixel(prevRegisterX);
  ++cycleNum;
  rows = rows + getPixel(prevRegisterX);
  ++cycleNum;

  return prevRegisterX + parseInt(value);
};

const instructions = {
  noop,
  addx
};

const task2 = (input) => {
  let prevRegisterX = 1;

  input.forEach(inp => {
    const [instruction, value] = inp.split(' ');
    prevRegisterX = instructions[instruction](value, prevRegisterX);
  });

  return rows.match(/.{1,40}/g);
};

module.exports = {
  task2
};

