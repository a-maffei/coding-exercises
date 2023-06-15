/* 1. Split string into two strings (“\n”) [“1,2”, “10,20”]
2. Initialise matrix []
3. Outer for loop 
    1. Initialise row []
    2. Split array[I] and initialise [“1”, “2”]
    3. Inner loop
        1. row.push(parseInt(sub[j])) 
    4. Matrix.push(row)
4. Return matrix  */

/* function matrix(start) {
  const newStart = start.split("\n");
  const matrix = [];

  for (let i = 0; i < newStart.length; i++) {
    const row = [];
    const subNewStart = newStart[i].split(" ");

    for (let j = 0; j < subNewStart.length; j++) {
      row.push(parseInt(subNewStart[j]));
    }

    matrix.push(row);
  }

  return matrix;
} */

/* function matrix(start){
    return start.split("\n").map((row) => row.split(" ").map(Number))
}

function matrixColumn(matrix) {
    return matrix[0].map((_, i) => matrix.map((row) => row[i]))
}

function findRow(matrix, rowNum) {
return matrix[rowNum]
}

function findColumn(matrix, columnNum) {
return matrix.reduce((acc, curr) => [...acc, curr[columnNum]],[])
} */

/* '1 2 3\n4 5 6\n7 8 9\n8 7 6' */

function flat(array, depth = 1) {
  return array.reduce((current, accumulator) => {
    if (Array.isArray(array) && depth > 0) {
      return accumulator.concat(flat(current));
    }

    accumulator.push(current);
    return accumulator;
  }, []);
}
