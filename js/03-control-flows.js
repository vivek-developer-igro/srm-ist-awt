// If-else statement
let age = 18;
if (age >= 18) {
    console.log("Adult");
}
else {
    console.log("Minor");
}
// If - else if - else statement
let temperature = 25;

if (temperature > 30) {
    console.log("It's hot!");
} else if (temperature >= 20) {
    console.log("It's warm.");
} else {
    console.log("It's cold.");
}

// Switch Statement
let dayOfWeek = "Wednesday";

switch (dayOfWeek) {
    case "Monday":
        console.log("Start of the work week.");
        break;
    case "Friday":
        console.log("Almost the weekend!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend!");
        break;
    default:
        console.log("Just another weekday.");
}

// for loop statement
for (let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i);
}

// while loop statement
let count = 0;
while (count < 3) {
    console.log("Count is: " + count);
    count++;
}

// do-while loop statement
let num = 0;
do {
    console.log("Number is: " + num);
    num++;
} while (num < 2);

// Loop Control Statements (break, continue)
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Breaking loop at i = 5");
        break; // Exits the loop
    }
    console.log(i);
}

for (let i = 0; i < 5; i++) {
    if (i === 2) {
        console.log("Skipping iteration for i = 2");
        continue; // Skips the rest of the current iteration and proceeds to the next
    }
    console.log(i);
}