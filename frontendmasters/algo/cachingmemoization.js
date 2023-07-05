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
