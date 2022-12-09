
const directions = {
  U: (head) => ++head.y,
  D: (head) => --head.y,
  L: (head) => --head.x,
  R: (head) => ++head.x
}
const moveHead = (direction, head) => directions[direction](head);

const follow = (head, tail) => {
  const diffX = Math.abs(head.x - tail.x);
  const diffY = Math.abs(head.y - tail.y);

  // if in the same row and not already next head
  if (diffY === 0 && Math.abs(head.x - tail.x) > 1) {
    tail.x += head.x < tail.x ? -1 : 1;
  }

  // if in the same column and already next to head
  if (diffX === 0 && Math.abs(head.y - tail.y) > 1) {
    tail.y += head.y < tail.y ? -1 : 1;
  }

  // If not in the same row/column, move diagonally
  if (diffX !==0 && diffY !=0 ) {
    if (diffX !== 1 || diffY !== 1) {
      tail.x += head.x < tail.x ? -1 : 1;
      tail.y += head.y < tail.y ? -1 : 1;
    }
  }
};





module.exports = {
  moveHead,
  follow
}