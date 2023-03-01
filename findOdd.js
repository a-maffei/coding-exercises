const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "a"];

const containsCommonItem = (a1, a2) => {
  return a1.some((el) => a2.includes(el));
};
containsCommonItem(array1, array2);
