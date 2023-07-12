// Binary search
function binary(a, item) {
  a.sort((a, b) => a - b);

  let min = 0;
  let max = a.length - 1;
  let guess;

  while (min <= max) {
    guess = Math.floor((min + max) / 2);

    if (item === a[guess]) {
      return guess;
    } else {
      if (item < a[guess]) {
        max = guess - 1;
      } else {
        min = guess + 1;
      }
    }
  }

  return -1;
}

// Linear search

function linear(array, value) {
  let result = -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      result = i;
      break;
    }
  }

  return result;
}
