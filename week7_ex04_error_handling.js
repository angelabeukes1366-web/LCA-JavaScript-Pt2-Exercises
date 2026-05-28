function validateInput(input) {
  try {
    if (input === "" || input === null || input === undefined) {
      throw "Input cannot be empty";
    }

    if (typeof input !== "number") {
      throw "Input must be a number";
    }

    if (input < 0) {
      throw "Number cannot be negative";
    }

    console.log("Valid input:", input);
  } catch (error) {
    console.log("Error:", error);
  }
}

validateInput(10);
validateInput(-5);
validateInput("Hello");
validateInput("");

function demonstrateErrors(value) {
  try {
    if (value === 1) {
      console.log(notDefinedVariable);
    } else if (value === 2) {
      let num = 10;
      num.toUpperCase();
    } else if (value === 3) {
      throw "Custom error occurred";
    } else {
      console.log("No errors found");
    }
  } catch (error) {
    console.log("Caught Error:", error);
  } finally {
    console.log("Execution completed");
  }
}

demonstrateErrors(1);
demonstrateErrors(2);
demonstrateErrors(3);
demonstrateErrors(4);

function makeUpperCase(str) {
  return str.toUpperCase();
}

function makeLowerCase(str) {
  return str.toLowerCase();
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function countCharacters(str) {
  return str.length;
}

console.log(makeUpperCase("hello"));
console.log(makeLowerCase("WORLD"));
console.log(reverseString("JavaScript"));
console.log(countCharacters("Frontend"));

function getLargestNumber(arr) {
  return Math.max(...arr);
}

function getSmallestNumber(arr) {
  return Math.min(...arr);
}

function getArraySum(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
}

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

let numbers = [1, 2, 3, 4, 5, 5, 2];

console.log(getLargestNumber(numbers));
console.log(getSmallestNumber(numbers));
console.log(getArraySum(numbers));
console.log(removeDuplicates(numbers));
