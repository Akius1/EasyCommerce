export const ExtraFirstLetter = (word: string) => {
  let splitWord = word.split(" ");

  for (let i = 0; i < splitWord.length; i++) {
    splitWord[i] = splitWord[i][0].toUpperCase() 
  }

  return splitWord;
};
