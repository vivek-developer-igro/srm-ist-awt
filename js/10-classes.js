// 1. Basic Class Definition
class Animal {
  // A simple method
  makeSound() {
    console.log("Generic animal sound.");
  }
}

// Create an instance of Animal
const genericAnimal = new Animal();
genericAnimal.makeSound(); // Output: Generic animal sound.

// 2. Class with Constructor and Methods
class Person {
  // The constructor method runs when a new instance is created
  constructor(name, age) {
    this.name = name; // Instance property
    this.age = age;   // Instance property
  }

  // A method
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }

  // Another method
  celebrateBirthday() {
    this.age++;
    console.log(`${this.name} is now ${this.age} years old!`);
  }
}

// 3. Class Inheritance
class Dog extends Animal { // Dog inherits from Animal
  constructor(name, breed) {
    super(); // Call the parent class's constructor
    this.name = name;
    this.breed = breed;
  }

  // Override the makeSound method
  makeSound() {
    console.log(`${this.name} barks!`);
  }

  // New method specific to Dog
  fetch(item) {
    console.log(`${this.name} is fetching the ${item}.`);
  }
}

// Create an instance of Dog
const myDog = new Dog("Buddy", "Golden Retriever");
myDog.makeSound(); // Output: Buddy barks! (Overridden method)
myDog.fetch("ball"); // Output: Buddy is fetching the ball.