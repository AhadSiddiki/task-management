const express = require('express');
const router = express.Router();

const tasks = [
  { id: 1, title: 'Complete Lab 2', completed: false, priority: 'high', createdAt: new Date() },
  { id: 2, title: 'Repo Documentation', completed: false, priority: 'medium', createdAt: new Date() },
  { id: 3, title: 'Gym Session', completed: false, priority: 'low', createdAt: new Date() },
  { id: 4, title: 'Learn Nodejs', completed: true, priority: 'high', createdAt: new Date() },
  { id: 5, title: 'create READme', completed: false, priority: 'medium', createdAt: new Date() }
];

// GET /tasks - Retrieve all tasks
router.get('/', (req, res) => {
  const tasks = req.app.locals.tasks;
  
  res.status(200).json({
    success: true,
    data: tasks
  });
});

// POST /tasks - Create a new task
router.post('/', (req, res) => {
  try {
    const { title } = req.body;

    if (!title || typeof title !== 'string' || title.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Title is required and must be a non-empty string'
      });
    }

    const newTask = {
      id: Date.now(), 
      title: title.trim(),
      completed: false
    };

    const tasks = req.app.locals.tasks;
    tasks.push(newTask);

    res.status(201).json({
      success: true,
      data: newTask
    });
    
  } catch (error) {
    console.error(error); 
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

router.get('/task/:id', (req, res) => {
    const taskId = parseInt(req.params.id, 10);

    // NEW: Check for invalid ID format (e.g., "abc" becomes NaN)
    if (isNaN(taskId)) {
        return res.status(400).json({ error: "Invalid ID format" });
    }

    const task = tasks.find(t => t.id === taskId);

    if (task) {
        res.json(task);
    } else {
        res.status(404).json({ error: "Task not found" });
    }
});

module.exports = router;