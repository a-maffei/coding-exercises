function moveZeros(arr) {
  const arrWithoutZero = arr.filter((el) => el !== 0);
  const arrOnlyZero = arr.filter((el) => el === 0);

  return arrWithoutZero.concat(arrOnlyZero);
}
