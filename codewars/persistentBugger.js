function persistence(num, count = 0) {
  if (num.toString().length === 1) {
    return count;
  } else {
    const currentNum = num
      .toString()
      .split("")
      .map((el) => parseInt(el))
      .reduce((acc, curr) => acc * curr);
    return persistence(currentNum, (count += 1));
  }
}
