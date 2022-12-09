const { moveHead, follow } = require('./move');
const trail = require('./trail');

const head = { x: 0, y: 0};
const knots = [];

for (let i = 0; i < 9; i++) {
  knots.push({x:0, y:0});
}

const move = (instruction,) => {
  const [direction, steps] = instruction.split(' ');

  for (let i = 0; i < steps; i++) {
    moveHead(direction, head);

    let leader = head;

    knots.forEach(knot => {
      follow(leader, knot)
      leader = knot;
    });
    trail.save(knots[8]);
  }
};

const task2 = (input) => {
  trail.init();

  input.forEach(inp => move(inp));

  return trail.getTotal();
};

module.exports = {
  task2
};