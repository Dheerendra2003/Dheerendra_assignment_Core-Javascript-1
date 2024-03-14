let targetNumber = 8;

let sum = 0;
let currentNumber = 1;

do {
  sum += currentNumber;
  currentNumber++;
} while (currentNumber <= targetNumber);

console.log("Sum of numbers from 1 to" + targetNumber + ":" + sum);

//output is:
//Sum of number from 1 to 8 : 36
