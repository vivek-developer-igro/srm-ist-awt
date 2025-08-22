// 1. Arithmetic Operators
let a = 10;
let b = 5;

console.log("Arithmetic Operators:");
console.log("Addition (a + b):", a + b);       // Output: 15
console.log("Subtraction (a - b):", a - b);    // Output: 5
console.log("Multiplication (a * b):", a * b); // Output: 50
console.log("Division (a / b):", a / b);       // Output: 2
console.log("Modulus (a % b):", a % b);       // Output: 0 (remainder of 10 / 5)
console.log("Exponentiation (a ** 2):", a ** 2); // Output: 100 (10 to the power of 2)

// 2. Assignment Operators
let x = 10;
console.log("\nAssignment Operators:");
console.log("Initial x:", x);
x += 5; // x = x + 5
console.log("x += 5:", x); // Output: 15
x -= 3; // x = x - 3
console.log("x -= 3:", x); // Output: 12
x *= 2; // x = x * 2
console.log("x *= 2:", x); // Output: 24
x /= 4; // x = x / 4
console.log("x /= 4:", x); // Output: 6
x %= 5; // x = x % 5
console.log("x %= 5:", x); // Output: 1

// 3. Comparison Operators
let p = 10;
let q = "10";
let r = 5;

console.log("\nComparison Operators:");
console.log("Equality (p == q):", p == q);     // Output: true (checks value only)
console.log("Strict Equality (p === q):", p === q); // Output: false (checks value and type)
console.log("Inequality (p != r):", p != r);   // Output: true
console.log("Strict Inequality (p !== q):", p !== q); // Output: true
console.log("Greater Than (p > r):", p > r);     // Output: true
console.log("Less Than (p < r):", p < r);       // Output: false
console.log("Greater Than or Equal (p >= 10):", p >= 10); // Output: true
console.log("Less Than or Equal (r <= 5):", r <= 5);   // Output: true

// 4. Logical Operators
let isTrue = true;
let isFalse = false;

console.log("\nLogical Operators:");
console.log("Logical AND (isTrue && isFalse):", isTrue && isFalse); // Output: false
console.log("Logical OR (isTrue || isFalse):", isTrue || isFalse);   // Output: true
console.log("Logical NOT (!isTrue):", !isTrue);                   // Output: false

// 5. Unary Operators (Increment/Decrement)
let counter = 0;
console.log("\nUnary Operators:");
console.log("Initial counter:", counter);
counter++; // Post-increment
console.log("counter++ (post-increment):", counter); // Output: 1
++counter; // Pre-increment
console.log("++counter (pre-increment):", counter); // Output: 2
counter--; // Post-decrement
console.log("counter-- (post-decrement):", counter); // Output: 1
--counter; // Pre-decrement
console.log("--counter (pre-decrement):", counter); // Output: 0

// 6. Ternary (Conditional) Operator
let age = 18;
let status = (age >= 18) ? "Adult" : "Minor";
console.log("\nTernary Operator:");
console.log("Status:", status); // Output: Adult