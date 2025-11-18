function getAverage (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  if (arr.length === 0) {
    return 0;
  }

  return sum / arr.length;
}

function getGrade (score) {
  if(score >= 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else if (score <= 59) {
    return "F";
  }
}

function hasPassingGrade (score) {
  let letterGrade = getGrade(score);
  return letterGrade !== "F";
}

function studentMsg (scores, studentScore) {
  let classAverage = getAverage(scores);
  let studentGrade = getGrade(studentScore);
  let passed = hasPassingGrade(studentScore);
  let passFailMessage;
  
  if (passed) {
    passFailMessage = "You have passed the course."
  } else {
    passFailMessage = "You have failed the course."
  }

  return `Class average: ${classAverage}. Your grade: ${studentGrade}. ${passFailMessage}`;
}

let allScore = [55, 76, 78,89, 78, 52, 100];
let yourScore = 89;

console.log(studentMsg(allScore, yourScore))