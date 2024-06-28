// * * Without Arrow Function
// * 1) Write a function named ‘calculateSum’ that takes two arguments and returns their sum.
function calculateSum(num1, num2) {
  return num1 + num2;
}

console.log(calculateSum(2, 5));

// *2) Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.
function isEven(num1) {
  let result;
  if (num1 % 2 === 0) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

console.log(isEven(29));

//* 3) Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.
function findMax(arr) {
  let max = arr[0];

  for (let x of arr) {
    if (max < x) {
      max = x;
    }
  }
  return max;
}

console.log(findMax([1, 4, 99, 55, 66, 79, 12, 19]));

// * 4) Write a function named ‘reverseString’ that takes a string and returns the string reversed.
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));

// *5) Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.

function filterOddNumbers(arr) {
  let filterArr = [];
  for (let x of arr) {
    if (x % 2 !== 0) {
      filterArr.push(x);
    }
  }
  return filterArr;
}

console.log(filterOddNumbers([1, 4, 99, 55, 66, 79, 12, 19]));

// *6) Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.

function sumArray(arr) {
  let sum = 0;
  arr.forEach((x) => {
    sum += x;
  });
  return sum;
}

console.log(sumArray([1, 4, 99, 55, 66, 79, 12, 19]));

// *7) Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.

function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}

console.log(sortArray([1, 4, 99, 55, 66, 79, 12, 19]));

// * 8) Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter capitalized. Ex-  console.log(capitalizeFirstLetter("hello"));  // Output:  "Hello"

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalizeFirstLetter("hello"));
