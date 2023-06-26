function sort(array) {
  //You loop through your array for as many times as the number of its items
  // Each time, you loop through the array again but up until the second to last-item minus the index of the outer loop (because what's after that has already been sorted)
  // If the current item of the inner loop is greater than the one following it, swap them

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return array;
}
