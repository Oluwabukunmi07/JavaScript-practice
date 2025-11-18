function pyramid (char, height, upsideDown) {
  let rows =[];
  for (let i = 1; i <=height; i++) {
    let numChars = (2 * i) - 1;
    let chars = char.repeat(numChars);
    let numSpaces = height - i;
    let spaces = ' '.repeat(numSpaces);
    let rowString = spaces + chars;
  rows.push(rowString);
  }
   if (upsideDown === true) {
    rows.reverse();
  }
  return "\n" + rows.join("\n") + "\n";
}

let hey = pyramid("o", 4, false);
let hi = pyramid("p", 5, true);
console.log(hey);
console.log(hi);