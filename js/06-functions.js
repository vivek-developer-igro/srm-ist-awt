// Function Declaration
function greet(name) { 
  return "Hello, " + name + "!";
}

let message = greet("Alice");
console.log(message); // Output: Hello, Alice!

// Function Expression
const add = function (a, b) {
  return a + b;
};

let sum = add(5, 3);
console.log(sum); // Output: 8

// Arrow Function 
const multiply = (x, y) => x * y;

let product = multiply(4, 6);
console.log(product); // Output: 24

// For a single parameter, parentheses can be omitted
const square = number => number * number;
let squaredValue = square(7);
console.log(squaredValue); // Output: 49

// Function declaration with parameters 'name' and 'age'
function greetUser(name, age) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

// Function call with arguments "Alice" and 30
greetUser("Alice", 30); // Output: Hello, Alice! You are 30 years old.

// Another function call with different arguments
greetUser("Bob", 25); // Output: Hello, Bob! You are 25 years old.