function sum(a, b) {
  return a + b;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function findLargest(numbers) {
  if (numbers.length === 0) return null;

  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }

  return largest;
}

function isPalindrome(str) {
  const lowerStr = str.toLowerCase();
  const reversed = lowerStr.split('').reverse().join('');
  return lowerStr === reversed;
}

function filterEvenNumbers(numbers) {
  return numbers.filter(num => num % 2 === 0);
}

// Do not edit this
module.exports = {
  sum,
  reverseString,
  findLargest,
  isPalindrome,
  filterEvenNumbers,
};
