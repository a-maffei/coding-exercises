const mergeSortedArrays = (a1, a2) => {
  //check if arrays are empty, if so return the other array
  if (a1.length < 1) {
    return a2;
  }
  if (a2.length < 1) {
    return a1;
  }

  //create array where to merge items and vars in which to store current element being "analized"
  const mergedArray = [];
  let itemA1 = a1[0];
  let itemA2 = a2[0];

  //indexes to use after the first loop
  let i = 1;
  let j = 1;

  while (itemA1 || itemA2) {
    if (itemA2 === undefined || itemA1 < itemA2) {
      mergedArray.push(itemA1);
      itemA1 = a1[i];
      i++;
    } else {
      mergedArray.push(itemA2);
      itemA2 = a2[j];
      j++;
    }
  }

  return mergedArray;
};

mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]);
