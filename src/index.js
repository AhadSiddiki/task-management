const express = require('express');
const taskRouter = require('./routes/tasks');

const app = express();
const port = 3000; 

// In-memory storage
const tasks = [
  { id: 1, title: 'Complete Lab 2', completed: false, priority: 'high', createdAt: new Date() },
  { id: 2, title: 'Repo Documentation', completed: false, priority: 'medium', createdAt: new Date() },
  { id: 3, title: 'Gym Session', completed: false, priority: 'low', createdAt: new Date() },
  { id: 4, title: 'Learn Nodejs', completed: true, priority: 'high', createdAt: new Date() },
  { id: 5, title: 'create READme', completed: false, priority: 'medium', createdAt: new Date() }
];

app.locals.tasks = tasks; 

// JSON Parsing Middleware
app.use(express.json()); 
app.get('/health', (req, res) => {
  res.status(200).json({
    status: "healthy",
    uptime: process.uptime() // Returns server uptime in seconds
  });
});
// route/task/:id to get a task by its ID
app.get('/task/:id', (req, res) => { 
  const taskId = parseInt(req.params.id, 10); 
  const task = tasks.find(t => t.id === taskId); 
  if (task) { 
    res.json(task); 
  } else { 
    res.status(404).json({ error: "Task not found" }); 
  }
});

// Mount Router
app.use('/tasks', taskRouter);


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});