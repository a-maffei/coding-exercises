function order(words) {
  const wordsArray = words.split(" ");
  const newArray = [];

  for (let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    const number = parseInt(word.split("").find((char) => !isNaN(char)));
    newArray[number - 1] = word;
  }

  return newArray.join(" ");
}
