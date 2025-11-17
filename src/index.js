const express = require('express');
const taskRouter = require('./routes/tasks');

const app = express();
const port = 3000; 

// In-memory storage
const tasks = [
  { id: 1, title: 'Sample Task', completed: false }
];

app.locals.tasks = tasks; 

// JSON Parsing Middleware
app.use(express.json()); 

// Mount Router
app.use('/tasks', taskRouter);


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});