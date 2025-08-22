// 1. Array Declaration and Initialization
const fruits = ["Apple", "Banana", "Cherry"];
console.log("Initial array:", fruits);

// 2. Accessing Elements
console.log("First fruit:", fruits[0]); // Output: Apple
console.log("Third fruit:", fruits[2]); // Output: Cherry

// 3. Modifying Elements
fruits[1] = "Blueberry";
console.log("Modified array:", fruits); // Output: ["Apple", "Blueberry", "Cherry"]

// 4. Adding Elements
fruits.push("Date"); // Adds to the end
console.log("After push:", fruits); // Output: ["Apple", "Blueberry", "Cherry", "Date"]

fruits.unshift("Apricot"); // Adds to the beginning
console.log("After unshift:", fruits); // Output: ["Apricot", "Apple", "Blueberry", "Cherry", "Date"]

// 5. Removing Elements
const removedLast = fruits.pop(); // Removes from the end
console.log("After pop:", fruits); // Output: ["Apricot", "Apple", "Blueberry", "Cherry"]
console.log("Removed element:", removedLast); // Output: Date

const removedFirst = fruits.shift(); // Removes from the beginning
console.log("After shift:", fruits); // Output: ["Apple", "Blueberry", "Cherry"]
console.log("Removed element:", removedFirst); // Output: Apricot

// 6. Array Length
console.log("Array length:", fruits.length); // Output: 3

// 7. Iterating through an Array
console.log("Iterating with forEach:");
fruits.forEach(function(fruit) {
  console.log(fruit);
});

// 8. Finding Elements
const indexOfCherry = fruits.indexOf("Cherry");
console.log("Index of Cherry:", indexOfCherry); // Output: 2

const includesApple = fruits.includes("Apple");
console.log("Includes Apple:", includesApple); // Output: true