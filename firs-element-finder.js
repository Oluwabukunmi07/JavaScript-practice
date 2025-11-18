function findElement (arr, testFunc) {
  for (let i = 0; i < arr.length; i++) {
    if (testFunc(arr[i]) === true) {
      return arr[i];
    }
  }
  return undefined;
}

let numbers = [1, 5, 9, 7, 6, 9];

function getEvenNumber (num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let firstEven = findElement(numbers, getEvenNumber);
console.log(firstEven);