function digitalRoot(n) {
  if (n < 10) {
    return n;
  }
  return digitalRoot(
    n
      .toString()
      .split("")
      .map((s) => parseInt(s))
      .reduce((acc, curr) => acc + curr, 0)
  );
}
