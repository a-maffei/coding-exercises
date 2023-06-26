/* Suppose we have an array of items - A, and another array of indexes in numbers - B

const A = ['A', 'B', 'C', 'D', 'E', 'F']
const B = [1,   5,   4,   3,   2,   0]
You need to reorder A, so that the A[i] is put at index of B[i], which means B is the new index for each item of A.

For above example A should be modified inline to following

['F', 'A', 'E', 'D', 'C', 'B']
The input are always valid */

function sort(array, newOrder) {
  // You loop through the array
  // If the current index equals the index value at the same position in newOrder, do nothing
  // Otherwise you store the new array in a variable
  // You swap in place the correct items in array and newOrder
  // You return array

  for (let i = 0; i < array.length; i++) {
    if (i !== newOrder[i]) {
      const to = newOrder[i];

      [array[to], array[i]] = [array[i], array[to]];
      [newOrder[to], newOrder[i]] = [newOrder[i], newOrder[to]];
    }

    console.log(array, newOrder);
  }

  return array;
}
