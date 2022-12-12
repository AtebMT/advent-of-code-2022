let monkeys = [];
let testLimit;

const findNumberInString = (str) => {
  const regex = /\b([0-9]|[1-9][0-9])\b/g;
  const matches = regex.exec(str);

  return parseInt(matches[1]);
};

const directiveMonkey = () => {
  monkeys.push({inspected: 0});

  return monkeys.at(-1);
};

const directiveItems = (line, monkey) => {
  const items = line.split(',');

  monkey.items = items.map(item => parseInt(item));

  return monkey;
};

const directiveOperation = (line, monkey) => {
  const regex = /([\+\*]) \b([0-9]|[1-9][0-9]|old)\b/g;
  const matches = regex.exec(line);

  monkey.operation  = {};
  monkey.operation.operator = matches[1];
  monkey.operation.value = matches[2];

  return monkey;
};

const directiveTest = (line, monkey) => {
  monkey.divisbleBy = findNumberInString(line);

  return monkey;
};

const directiveTrue = (line, monkey) => {
  monkey.trueMonkeyNum = findNumberInString(line);

  return monkey;
};

const directiveFalse = (line, monkey) => {
  monkey.falseMonkeyNum = findNumberInString(line);

  return monkey;
};

const directives = {
  monkey: directiveMonkey,
  startingitems: directiveItems,
  operation: directiveOperation,
  test: directiveTest,
  iftrue: directiveTrue,
  iffalse: directiveFalse
};

const parse = (line, monkey) => {
  const colon = line.indexOf(':');

  if (colon === -1) return;

  const operation = line.substring(0, colon).replace(/\s/g,'').replace(/[0-9]/g, '').toLowerCase();

  return directives[operation](line.substring(colon+1), monkey);
};

const applyOperation = ({operator, value}, old) => {
  const iOld = parseInt(old);

  if (operator === '*') {
    return value === 'old' ? iOld * iOld : iOld * parseInt(value);
  }

  return value === 'old' ? iOld + iOld : iOld + parseInt(value);
};

const takeTurn = (monkey, worryHack) => {
  monkey.items.forEach(item => {
    const newWorryLevel = worryHack
      ? Math.floor(applyOperation(monkey.operation, item) % testLimit)
      : Math.floor(applyOperation(monkey.operation, item) / 3);

    if ((newWorryLevel % monkey.divisbleBy) === 0) {
      monkeys[monkey.trueMonkeyNum].items.push(newWorryLevel);
    } else {
      monkeys[monkey.falseMonkeyNum].items.push(newWorryLevel);
    }

    ++monkey.inspected;
  });

  monkey.items = [];
};

module.exports = (input, worryHack, turns = 20) => {
  monkeys = [];
  let monkey = null;

  input.forEach(inp => {
    monkey = parse(inp, monkey);
  });

  testLimit = monkeys.reduce((acc, m) => acc * m.divisbleBy, 1);

  for (let i = 0; i < turns ; i++) {
    monkeys.forEach(monkey => takeTurn(monkey, worryHack));
  }

  const activeMonkeys = monkeys.map(monkey => monkey.inspected).sort((a, b) => b - a).slice(0, 2);

  return activeMonkeys[0] * activeMonkeys[1];
};
