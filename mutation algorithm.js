function mutation (arr) {
  const mainString = arr[0].toLowerCase();
  const checkString = arr[1].toLowerCase();

  for (const char of checkString) {
    if (mainString.indexOf(char) === -1) {
      return false;
    } 
  }

  return true;
}

console.log(mutation(["hello", "hi"]));

console.log(mutation(["hello", "hole"]));