function multiply(num1, num2, num3) {
  // Check if any numbers are the same
  if (num1 === num2 || num1 === num3 || num2 === num3) {
    return "Numbers must not be the same";
  }

  return num1 * num2 * num3;
}

console.log(multiply(2, 3, 4));

const convertToSeconds = function (minutes) {
  return minutes * 60;
};

console.log(convertToSeconds(5));

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

console.log(fahrenheitToCelsius(100));

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("JavaScript"));

function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Javascript"));

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(2));
console.log(isPrime(4));
console.log(isPrime(7));
console.log(isPrime(10));
