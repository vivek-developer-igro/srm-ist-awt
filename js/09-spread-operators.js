// Copying Array
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray]; // Creates a shallow copy
console.log(copiedArray); // Output: [1, 2, 3]

// Merging Array
const array1 = [1, 2];
const array2 = [3, 4];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // Output: [1, 2, 3, 4]

// Copying Objects
const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject }; // Creates a shallow copy
console.log(copiedObject); // Output: { a: 1, b: 2 }

// Merging Object
const object1 = { a: 1, b: 2 };
const object2 = { c: 3, d: 4 };
const mergedObject = { ...object1, ...object2 };
console.log(mergedObject); // Output: { a: 1, b: 2, c: 3, d: 4 }