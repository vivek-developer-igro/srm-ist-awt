const express = require('express'); // Import the Express.js module
const app = express(); // Create an Express application instance
const port = 3000; // Define the port for the server to listen on

// Define a route for the root URL ("/") that responds with "Hello World!"
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server and listen for incoming requests on the specified port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});