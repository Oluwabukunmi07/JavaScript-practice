function titleCase (str) {
  let lowerStr = str.toLowerCase();
  let wordsArray = lowerStr.split(" ");
  let titleCasedWords = [];
  for (const word of wordsArray) {
    if (word.length > 0) {
      let firstLetter = word[0].toUpperCase();
      let restOfWord = word.slice(1);
      titleCasedWords.push(firstLetter + restOfWord);
    }
  }
  return titleCasedWords.join(" ");
}

let word = "I like javascript";
let result = titleCase(word);
console.log(result);
