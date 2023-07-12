//memoization with Map
const multiplyBy3 = (n) => n * 3;

const memoizeWithMap = (fn) => {
  const cacheMap = new Map();

  return (...args) => {
    if (cacheMap.has(args[0])) {
      console.log("This isn't new to me");
      return cacheMap.get(args[0]);
    } else {
      console.log("This is new to me");
      const result = fn.call(this, ...args);
      cacheMap.set(args[0], result);
      return result;
    }
  };
};

const memoizedMultiplyBy3 = memoizeWithMap(multiplyBy3);
memoizedMultiplyBy3(9);
memoizedMultiplyBy3(9);

//memoization with an object

const multiplyBy10 = (n) => n * 10;

const memoize = (cb) => {
  const cache = {};

  return (...args) => {
    if (!cache[args[0]]) {
      console.log("Needs to be invoked");
      const result = cb.call(this, ...args);
      cache[args[0]] = result;
      return result;
    } else {
      console.log("Is already stored in cache");
      return cache[args[0]];
    }
  };
};

const memoized = memoize(multiplyBy10);

memoized(4);
memoized(4);
