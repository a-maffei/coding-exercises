// accumulator

function joinElements(array, start) {
  function prepareResult(index, resultSoFar) {
    resultSoFar += array[index];
    if (index === array.length - 1) {
      return resultSoFar;
    } else {
      return prepareResult(index + 1, start + " " + resultSoFar);
    }
  }

  return prepareResult(0, "");
}

joinElements(["the", "dog"], "elio");

// loop version

function joinElementsLoop(array, start) {
  let resultSoFar = start;

  for (let i = 0; i < array.length; i++) {
    resultSoFar += ` ${array[i]}`;
  }

  return resultSoFar;
}

joinElementsLoop(["the", "good", "dog"], "elio");

// factorial

function factorial(n) {
  if (n === 0) {
    return n;
  }
  return n * factorial(n - 1);
}

function memoizeFactorial() {
  const cache = new Map();

  return function (n) {
    if (cache.has(n)) {
      console.log("another time");

      return cache.get(n);
    } else {
      console.log("first time");
      let result = factorial(n);
      cache.set(n, result);
      return result;
    }
  };
}

const memoizedFactorial = memoizeFactorial();
memoizedFactorial(4);
memoizedFactorial(4);

// factorial memoized with Map

const factorialNew = (n) => {
  if (n === 1 || n === 0) {
    return n;
  }

  return n * factorialNew(n - 1);
};

const memoizeFactorialWithMap = (fn) => {
  const cache = new Map();

  return (n) => {
    console.log("This isn't new to me");
    if (cache.has(n)) {
      return cache.get(n);
    } else {
      console.log("This is new to me");
      const result = fn(n);
      cache.set(n, result);
      return result;
    }
  };
};

const memoizeFactorial = memoizeFactorialWithMap(factorialNew);
memoizeFactorial(4);
memoizeFactorial(4);
