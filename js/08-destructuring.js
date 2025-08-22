// Basic array destructuring
const numbers = [10, 20, 30, 40];
const [first, second, third] = numbers;
console.log(first);  // Output: 10
console.log(second); // Output: 20
console.log(third);  // Output: 30

// Rest parameter
const fruits = ['apple', 'banana', 'orange', 'grape'];
const [f1, ...restFruits] = fruits;
console.log(f1);        // Output: apple
console.log(restFruits); // Output: ['banana', 'orange', 'grape']

// Basic object destructuring
const person = { name: 'Alice', age: 30, city: 'New York' };
const { name, age } = person;
console.log(name); // Output: Alice
console.log(age);  // Output: 30

// Assigning to new variable names
const { name: fullName, city: location } = person;
console.log(fullName); // Output: Alice
console.log(location); // Output: New York