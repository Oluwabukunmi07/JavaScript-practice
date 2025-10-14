function fearNotLetter (str) {

  let previousCharCode = str.charCodeAt(0);
  for (let i = 1; i < str.length; i++) {
    let currentCharCode = str.charCodeAt(i);

    if (currentCharCode !== previousCharCode + 1) {

    let missingCharCode = previousCharCocde + 1;
      return String.fromCharCode(missingCharCode);
    }
    previousCharCode = currentCharCode;
  }
  return undefined;
}