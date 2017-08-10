import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const iterationsCount = 3; // set the number of questions

const isNumber = value => typeof value === 'number';

export const makeGame = (generateGameData) => {
  console.log('Welcome to the Brain Games!');

  const gameRule = car(car(generateGameData()));
  console.log(gameRule);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const iter = (counter) => {
    if (counter === iterationsCount) {
      return console.log(`Congratulations, ${userName}!`);
    }

    const gameData = generateGameData();
    const question = cdr(car(gameData));
    const result = cdr(gameData);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === result) {
      console.log('Correct!');
      return iter(counter + 1);
    }

    return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!\n`);
  };

  return iter(0);
};
