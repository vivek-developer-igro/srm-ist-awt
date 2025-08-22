const express = require('express');
const bodyParser = require('body-parser'); // For parsing request bodies

const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// In-memory data store (replace with a database in a real application)
let items = [
  { id: 1, name: 'Item A', description: 'Description for Item A' },
  { id: 2, name: 'Item B', description: 'Description for Item B' }
];
let nextItemId = 3;

// Routes for the 'items' resource

// GET all items
app.get('/items', (req, res) => {
  res.json(items);
});

// GET a single item by ID
app.get('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = items.find(i => i.id === itemId);

  if (item) {
    res.json(item);
  } else {
    res.status(404).send('Item not found');
  }
});

// POST a new item
app.post('/items', (req, res) => {
  const newItem = {
    id: nextItemId++,
    name: req.body.name,
    description: req.body.description
  };
  items.push(newItem);
  res.status(201).json(newItem); // 201 Created
});

// PUT (update) an existing item
app.put('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const itemIndex = items.findIndex(i => i.id === itemId);

  if (itemIndex !== -1) {
    items[itemIndex] = {
      id: itemId,
      name: req.body.name || items[itemIndex].name,
      description: req.body.description || items[itemIndex].description
    };
    res.json(items[itemIndex]);
  } else {
    res.status(404).send('Item not found');
  }
});

// DELETE an item
app.delete('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const initialLength = items.length;
  items = items.filter(i => i.id !== itemId);

  if (items.length < initialLength) {
    res.status(204).send(); // 204 No Content
  } else {
    res.status(404).send('Item not found');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});