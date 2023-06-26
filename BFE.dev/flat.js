/* There is already Array.prototype.flat() in JavaScript (ES2019), which reduces the nesting of Array.

Could you manage to implement your own one?

Here is an example to illustrate

const arr = [1, [2], [3, [4]]];

flat(arr)
// [1, 2, 3, [4]]

flat(arr, 1)
// [1, 2, 3, [4]]

flat(arr, 2)
// [1, 2, 3, 4]
follow up

Are you able to solve it both recursively and iteratively? */

function flat(array, depth = 1) {
  return array.reduce((accumulator, current) => {
    if (Array.isArray(current) && depth > 0) {
      return accumulator.concat(flat(current, depth - 1));
    }

    accumulator.push(current);
    return accumulator;
  }, []);
}
