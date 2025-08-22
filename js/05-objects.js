// 1. Object Literal Notation
// This is the most common way to create an object.
const person = {
  name: "Alice",
  age: 30,
  isStudent: false,
  hobbies: ["reading", "hiking", "coding"],
  greet: function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
};

console.log("--- Object Literal ---");
console.log(person.name); // Accessing properties using dot notation
console.log(person["age"]); // Accessing properties using bracket notation
console.log(person.greet()); // Calling an object method

// 2. Adding, Updating, and Deleting Properties
person.city = "New York"; // Adding a new property
person.age = 31; // Updating an existing property
delete person.isStudent; // Deleting a property

console.log("\n--- Modified Object ---");
console.log(person);

// 3. Iterating through Object Properties
console.log("\n--- Iterating Object Properties ---");
for (const key in person) {
  if (person.hasOwnProperty(key)) { // Ensures only own properties are iterated
    console.log(`${key}: ${person[key]}`);
  }
}

// 4. Object.keys(), Object.values(), Object.entries()
console.log("\n--- Object.keys(), values(), entries() ---");
console.log("Keys:", Object.keys(person));
console.log("Values:", Object.values(person));
console.log("Entries:", Object.entries(person));