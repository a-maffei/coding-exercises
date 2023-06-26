function duplicateCount(text) {
  const array = text.toLowerCase().split("");
  return array.reduce((acc, curr, index) => {
    if (array.indexOf(curr) !== index) return acc;
    const arrayByChar = array.filter((char) => char === curr);
    return arrayByChar.length > 1 ? acc + 1 : acc;
  }, 0);
}
