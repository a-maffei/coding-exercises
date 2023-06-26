/* Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta" */

const removeConsecutiveDuplicates = (s) => {
  const a = s.split(" ");
  return a.filter((el, index) => el !== a[index + 1]).join(" ");
};
