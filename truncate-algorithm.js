function truncateString (str, num) {
  if (str.length > num) {
    return str.slice (0, num) + "...";
  } else {
    return str
  }
}

console.log(truncateString("My name is oluwabukunmi", 9));
console.log(truncateString("peter is a boy", 5));
console.log(truncateString("hyperbole", 3));