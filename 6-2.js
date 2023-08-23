function findMissingNumber(arr) {
  const nosActual = arr.length + 1;
  const naturalSum = (nosActual * (nosActual + 1)) / 2; // Sum of n natural numbers

  let actualSum = 0;
  for (const num of arr) {
    actualSum += num;
  }

  const missingNumber = naturalSum - actualSum;

  return missingNumber;
}

// Test case with a demo array
const demo_arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 40, 41, 42,
  43, 44, 45,
];

const missingNumber = findMissingNumber(demo_arr);
console.log(`The missing number is: ${missingNumber}`);
