const express = require('express');
const {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
} = require('../controllers/taskController');

const router = express.Router();

router.route('/')
    .get(getTasks)      // GET /api/tasks
    .post(createTask);  // POST /api/tasks

router.route('/:id')
    .put(updateTask)    // PUT /api/tasks/:id
    .delete(deleteTask);// DELETE /api/tasks/:id

module.exports = router;
