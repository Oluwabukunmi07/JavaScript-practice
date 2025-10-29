function largestOfAll (arr) {
  let largestArray = [];
  
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];

    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
  
  largestArray.push(largestNumber);
  }

  return largestArray;
}

let number = [[1,2,3,4], [56,78,334,56]];
let results = largestOfAll(number);

console.log(results)