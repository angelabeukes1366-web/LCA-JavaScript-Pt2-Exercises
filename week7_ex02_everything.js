function sum(num) {
  if (typeof num !== "number" || num % 1 !== 0) {
    return "The value passed is not a number";
  }

  let total = 0;

  for (let i = 0; i <= num; i++) {
    total += i;
  }

  return total;
}

console.log(sum(5));
console.log(sum(10));
console.log(sum("hello"));
console.log(sum(4.5));

function factorial(num) {
  let result = 1;
  let display = "";

  for (let i = num; i >= 1; i--) {
    result *= i;

    display += i;

    if (i !== 1) {
      display += "*";
    }
  }

  console.log(display + " = " + result);
}

factorial(4); // 4*3*2*1 = 24
factorial(5); // 5*4*3*2*1 = 120

function funkyMath(a, b, c, d) {
  if (arguments.length === 2) {
    return b - a;
  } else if (arguments.length === 3) {
    return a + b + c;
  } else if (arguments.length === 4) {
    return (a + b) / (c + d);
  } else {
    return "Invalid number of arguments";
  }
}

console.log(funkyMath(5, 10)); // 5
console.log(funkyMath(1, 2, 3)); // 6
console.log(funkyMath(8, 2, 3, 5)); // 1.25

let numbers = [1, 2, 33, 45, 6, 44];

let oddNumbers = [];
let evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    oddNumbers.push(numbers[i]);
  } else {
    evenNumbers.push(numbers[i]);
  }
}

oddNumbers.sort(function (a, b) {
  return a - b;
});

console.log("Even Numbers:", evenNumbers);
console.log("Odd Numbers:", oddNumbers);

let me = {
  firstName: "Angela",
  lastName: "Smith",
  age: 18,
  favouriteColour: "Blue",
  dreamCar: "BMW M4",
};

console.log(me);

me.favouriteFood = "Pizza";

console.log(me);

delete me.age;

console.log(me);
