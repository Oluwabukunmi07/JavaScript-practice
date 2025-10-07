const questions = [];

const question1 = {
  category: "Science",
  question: "What planet is known as the red planet?",
  choices: ["Mars", "Venus", "Earth"],
  answer: "Mars"
}

const question2 = {
  category: "Math",
  question: "What is the sum of two and seven?",
  choices: ["Eight", "Six", "Nine"],
  answer: "Nine"
}

const question3 = {
  category: "Technology",
  question: "What is used CSS stands for?",
  choices: ["Styling", "Interactivy", "Display"],
  answer: "Styling"
}

const question4 = {
  category: "History",
  question: "When did Nigeria get their independence?",
  choices: ["1950", "1960", "1966"],
  answer: "1960"
}

const question5 = {
  category: "Economics",
  question: "What is demand?",
  choices: ["Desire for goods", "Ability to sell", "Government spending"],
  answer: "Desire for goods"
}

questions.push(question1, question2, question3, question4, question5);

function getRandomQuestion (questions) {
  const randomQuestion = Math.floor(Math.random() * questions.length);
  return questions[randomQuestion];
}

function getRandomComputerChoice (choices) {
  const randomQuestion = Math.floor(Math.random() * choices.length)
  return choices[randomQuestion];
}

function getResults (questionObj, computerChoice) {
  if (computerChoice === questionObj.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  }
}

const randomQuestion1 = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(randomQuestion1.choices);
const result = getResults(randomQuestion1, computerChoice);

console.log("Category:", randomQuestion1.category);
console.log("Question:", randomQuestion1.question);
console.log("Choices:", randomQuestion1.choices);
console.log("Computer chose:", computerChoice);
console.log(result);


