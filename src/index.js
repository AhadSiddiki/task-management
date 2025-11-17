const express = require('express');
const taskRouter = require('./routes/tasks');
const taskRoutes = require('./routes/tasks');
const app = express();
const port = 3000; 


// In-memory storage

const tasks = []; 
app.locals.tasks = tasks; 

// JSON Parsing Middleware
app.use(express.json()); 
app.get('/health', (req, res) => {
  res.status(200).json({
    status: "healthy",
    uptime: process.uptime() // Returns server uptime in seconds
  });
});


// Mount Router
app.use('/tasks', taskRouter);
app.use('/', taskRoutes); 

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});