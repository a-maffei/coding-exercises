function bubble(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

bubble([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);

function merge(left, right) {
  const sorted = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    const leftEl = left[indexLeft];
    const rightEl = right[indexRight];

    if (leftEl < rightEl) {
      sorted.push(leftEl);
      indexLeft++;
    } else {
      sorted.push(rightEl);
      indexRight++;
    }
  }
  return sorted.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

function mergeSort(arr) {
  const n = arr.length;

  if (n < 2) {
    return arr;
  }

  const mid = Math.floor(n / 2);
  const leftArray = arr.slice(0, mid);
  const rightArray = arr.slice(mid);

  console.log(leftArray, rightArray);

  const sortedLeft = mergeSort(leftArray);
  const sortedRight = mergeSort(rightArray);

  return merge(sortedLeft, sortedRight);
}

mergeSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]);
mergeSort([9, 2, 5, 4]);
