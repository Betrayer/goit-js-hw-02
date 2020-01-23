"use script";

const findLongestWord = function(string) {
  let wordsSplitted = string.split(` `);
  let longestWord = wordsSplitted[0];
  for (let i = 1; i < wordsSplitted.length; i++) {
    if (wordsSplitted[i].length > longestWord.length)
      longestWord = wordsSplitted[i];
  }
  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWord("Google do a roll"));

console.log(findLongestWord("May the force be with you"));
