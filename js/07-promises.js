const myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation (e.g., fetching data, a timer)
  const success = true; // Change to false to see the reject path

  setTimeout(() => {
    if (success) {
      resolve("Data fetched successfully!"); // Resolve the promise with a value
    } else {
      reject(new Error("Failed to fetch data.")); // Reject the promise with an error
    }
  }, 2000); // Simulate a 2-second delay
});

myPromise
  .then((message) => {
    console.log("Success:", message); // Executed when the promise is resolved
  })
  .catch((error) => {
    console.error("Error:", error.message); // Executed when the promise is rejected
  })
  .finally(() => {
    console.log("Promise settled (either resolved or rejected)."); // Executed regardless of outcome
  });