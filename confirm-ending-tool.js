function confirmEnding (str1, str2) {
  return str1.slice(-str2.length) === str2;
}

console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("Connor", "n"));
console.log(confirmEnding("He has to give me a new name", "name"));