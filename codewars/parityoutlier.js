function findOutlier(integers) {
  return integers.find((el) =>
    integers.filter((item) => item % 2 === 0) ? el % 2 !== 0 : el % 2 === 0
  );
}
