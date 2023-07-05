// accumulator

function joinElements(array, start) {
  function prepareResult(index, resultSoFar) {
    resultSoFar += array[index];
    if (index === array.length - 1) {
      return resultSoFar;
    } else {
      return prepareResult(index + 1, start + " " + resultSoFar);
    }
  }

  return prepareResult(0, "");
}

joinElements(["the", "dog"], "elio");

// loop version

function joinElementsLoop(array, start) {
  let resultSoFar = start;

  for (let i = 0; i < array.length; i++) {
    return (resultSoFar += array[i]);
  }

  return resultSoFar;
}

joinElementsLoop(["the", "good", "dog"], "elio");
