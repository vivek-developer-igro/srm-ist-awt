const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample in-memory data store
let todos = [
  { id: 1, task: "Learn Node.js", completed: false },
  { id: 2, task: "Build REST API", completed: false },
];

// GET all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// GET todo by id
app.get('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ error: "Todo not found" });
  res.json(todo);
});

// POST create new todo
app.post('/todos', (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ error: "Task is required" });
  }
  const newTodo = {
    id: todos.length + 1,
    task,
    completed: false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PUT update todo
app.put('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ error: "Todo not found" });

  const { task, completed } = req.body;
  if (task !== undefined) todo.task = task;
  if (completed !== undefined) todo.completed = completed;

  res.json(todo);
});

// DELETE todo by id
app.delete('/todos/:id', (req, res) => {
  const index = todos.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Todo not found" });
  const deleted = todos.splice(index, 1);
  res.json(deleted[0]);
});

// Start server
app.listen(PORT, () => {
  console.log(`RESTful API running at http://localhost:${PORT}`);
});
