
let trail = [];

module.exports = {
  init: () => {
    trail = [];
    trail.push('0 0');
  },

  save: (tail) => {
    const key = `${tail.x} ${tail.y}`;

    if (!trail.includes(key)) trail.push(key);
  },

  getTotal: () => trail.length
}