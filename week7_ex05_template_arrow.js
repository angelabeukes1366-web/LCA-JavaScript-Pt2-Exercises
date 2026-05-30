const introduction = `
Welcome to JavaScript Pt2 
Template literals allow multiline strings.
They make code cleaner and easier to read.
`;

console.log(introduction);

function generateHTML(name, age) {
  return `
    <div class="profile">
        <h2>${name}</h2>
        <p>Age: ${age}</p>
    </div>
    `;
}

console.log(generateHTML("Angela", 18));

const multiply = (a, b) => a * b;

console.log("Product:", multiply(5, 4));

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((number) => number * number);

console.log("Original Numbers:", numbers);
console.log("Squared Numbers:", squaredNumbers);
