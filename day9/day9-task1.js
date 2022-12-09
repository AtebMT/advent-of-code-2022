const { moveHead, follow } = require('./move');
const trail = require('./trail');

const head = { x: 0, y: 0};
const tail = { x: 0, y: 0};

const move = (instruction,) => {
  const [direction, steps] = instruction.split(' ');

  for (let i = 0; i < steps; i++) {
    moveHead(direction, head);
    follow(head, tail);
    trail.save(tail);
  }
};

const task1 = (input) => {
  trail.init();

  input.forEach(inp => move(inp));

  return trail.getTotal();
};

module.exports = {
  task1
};