function countWords(inputWords) {
  const countedWords = inputWords.reduce(function (Words, word) {
    if (word in Words) {
      Words[word]++;
    }
    else {
      Words[word] = 1;
    }
    return Words;
  }, {});
  return countedWords
}
 


module.exports = countWords