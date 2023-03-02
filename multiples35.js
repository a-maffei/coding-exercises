function solution(number) {
  return number < 1
    ? 0
    : [...Array(number).keys()].reduce((acc, curr) => {
        if (curr % 3 === 0 || curr % 5 === 0) acc += curr;
        return acc;
      }, 0);
}
