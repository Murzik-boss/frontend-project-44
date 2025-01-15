import readlineSync from "readline-sync";

function ask() {
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);
  return userName;
}

const userName = ask();

function getRandomNumber() {
  return Math.floor(Math.random() * 1001);
}

function isEven(number) {
  if (number % 2 === 0) {
    return "yes";
  } else {
    return "no";
  }
}

function goGame() {
  console.log("Answer 'yes' if number even otherwise answer 'no'");
  let isCorrectGame = true;
  for (let i = 0; i < 3; i++) {
    let questionNumber = getRandomNumber();
    console.log("Question: " + questionNumber);
    let userAnswer = readlineSync.question("Your answer: ");
    if (userAnswer === isEven(questionNumber)) {
      console.log("Correct!");
    } else {
      console.log(
        '"yes" is wrong answer ;(. Correct answer was "no".\n Let\'s try again ' +
          userName
      );
      isCorrectGame = false;
      break;
    }
  }
  if (isCorrectGame) {
    console.log("Congratulations, " + userName + "!");
  }
}
goGame();
export default goGame;
