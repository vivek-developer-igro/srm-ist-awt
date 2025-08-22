// --- Using 'var' ---
// 'var' is function-scoped (or global-scoped if declared outside a function).
// It can be redeclared and reassigned.

function varExample() {
  var greeting = "Hello";
  console.log("Initial var greeting:", greeting); // Output: Hello

  if (true) {
    var greeting = "Hi there"; // This re-declares and reassigns the *same* 'greeting' variable
    console.log("Inside block (var):", greeting); // Output: Hi there
  }

  console.log("Outside block (var):", greeting); // Output: Hi there (value changed by block)

  var greeting = "Greetings"; // Redeclaration is allowed
  console.log("Redeclared var greeting:", greeting); // Output: Greetings
}
varExample();

// console.log(greeting); // ReferenceError if called outside the function

console.log("\n--- Using 'let' ---");
// --- Using 'let' ---
// 'let' is block-scoped.
// It can be reassigned but not redeclared within the same scope.

function letExample() {
  let message = "Welcome";
  console.log("Initial let message:", message); // Output: Welcome

  if (true) {
    let message = "Hola"; // This creates a *new*, block-scoped 'message' variable
    console.log("Inside block (let):", message); // Output: Hola
  }

  console.log("Outside block (let):", message); // Output: Welcome (outer 'message' is unaffected)

  // let message = "Bonjour"; // SyntaxError: Identifier 'message' has already been declared
  message = "Bonjour"; // Reassignment is allowed
  console.log("Reassigned let message:", message); // Output: Bonjour
}
letExample();

// console.log(message); // ReferenceError if called outside the function

console.log("\n--- Using 'const' ---");
// --- Using 'const' ---
// 'const' is block-scoped.
// It cannot be reassigned or redeclared, and must be initialized upon declaration.

function constExample() {
  const PI = 3.14159;
  console.log("Initial const PI:", PI); // Output: 3.14159

  // PI = 3.14; // TypeError: Assignment to constant variable.

  if (true) {
    const PI_APPROX = 3.14; // This creates a new, block-scoped constant
    console.log("Inside block (const PI_APPROX):", PI_APPROX); // Output: 3.14
  }

  // console.log(PI_APPROX); // ReferenceError: PI_APPROX is not defined (block-scoped)

  const person = { name: "Alice", age: 30 };
  console.log("Initial const object:", person); // Output: { name: 'Alice', age: 30 }

  person.age = 31; // Modifying properties of a 'const' object is allowed
  console.log("Modified const object property:", person); // Output: { name: 'Alice', age: 31 }

  // person = { name: "Bob" }; // TypeError: Assignment to constant variable.
}
constExample();