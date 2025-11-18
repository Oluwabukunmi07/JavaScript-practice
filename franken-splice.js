function frankenSplice (arr1, arr2, index) {
  let newArray = arr2.slice();
  newArray.splice(index, 0, ...arr1);
  return newArray;
}

let num1 = [1, 2, 3];
let num2 = [7, 4, 5];

let result1 = frankenSplice(num1, num2, 1);
console.log(result1);