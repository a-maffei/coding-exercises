// 1

function solution(N) {
  let binary = N.toString(2);
  let resultsArray = [];

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "1") {
      let result = 0;
      for (let j = i + 1; j < binary.length; j++) {
        if (binary[j] === "0") {
          result++;
        } else {
          resultsArray.push(result);
          break;
        }
      }
    }
  }

  if (resultsArray.length === 0) {
    return resultsArray.length;
  }

  return Math.max(...resultsArray);
}
