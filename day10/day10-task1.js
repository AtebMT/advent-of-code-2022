let registerX = [];

const noop = (_value, prevRegisterX) => {
  registerX.push(prevRegisterX);

  return prevRegisterX;
};

const addx = (value, prevRegisterX) => {
  registerX.push(prevRegisterX);
  registerX.push(prevRegisterX);

  return prevRegisterX + parseInt(value);
};

const instructions = {
  noop,
  addx
};

const task1 = (input) => {
  let prevRegisterX = 1;

  input.forEach(inp => {
    const [instruction, value] = inp.split(' ');
    prevRegisterX = instructions[instruction](value, prevRegisterX);
  });

  let result = 0;

  for (let i = 20; i < registerX.length; i += 40) {
    result += (i * registerX[i-1]);
  }
  return result;
};

module.exports = {
  task1
};


