import readlineSync from 'readline-sync';

export const welcome = () => console.log('Welcome to the Brain Games!');

export const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

export const generateNumber = (min, max) => Math.floor(min + (Math.random() * ((max + 1) - min)));

export const isEven = num => num % 2 === 0;
