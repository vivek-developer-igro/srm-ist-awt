// 1. Primitive Data Types

// Number
let age = 30;
let price = 19.99;
let largeNumber = 12345678901234567890n; // BigInt
console.log(`Number: ${age}, ${price}, ${largeNumber}`);
console.log(`Type of age: ${typeof age}`);
console.log(`Type of price: ${typeof price}`);
console.log(`Type of largeNumber: ${typeof largeNumber}`);

// String
let firstName = "John";
let lastName = 'Doe';
let greeting = `Hello, ${firstName} ${lastName}!`; // Template literal
console.log(`String: ${firstName}, ${lastName}, ${greeting}`);
console.log(`Type of firstName: ${typeof firstName}`);

// Boolean
let isActive = true;
let hasPermission = false;
console.log(`Boolean: ${isActive}, ${hasPermission}`);
console.log(`Type of isActive: ${typeof isActive}`);

// Undefined
let unassignedVariable;
console.log(`Undefined: ${unassignedVariable}`);
console.log(`Type of unassignedVariable: ${typeof unassignedVariable}`);

// Null
let emptyValue = null;
console.log(`Null: ${emptyValue}`);
console.log(`Type of emptyValue: ${typeof emptyValue}`); // Note: typeof null is 'object'

// 2. Non-Primitive (Object) Data Types

// Object
let person = {
    name: "Alice",
    age: 25,
    city: "New York"
};
console.log(`Object: ${person.name}, ${person.age}`);
console.log(`Type of person: ${typeof person}`);

// Array (which is a type of Object)
let colors = ["red", "green", "blue"];
console.log(`Array: ${colors[0]}, ${colors[1]}`);
console.log(`Type of colors: ${typeof colors}`); // Also 'object'