const Task = require('../models/Task');

// Get all tasks
const getTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        next(error);
    }
};

// Create a new task
const createTask = async (req, res, next) => {
    try {
        const { title, description } = req.body;
        const newTask = await Task.create({ title, description });
        res.status(201).json(newTask);
    } catch (error) {
        next(error);
    }
};

// Update a task
const updateTask = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedTask) return res.status(404).json({ message: 'Task not found' });
        res.status(200).json(updatedTask);
    } catch (error) {
        next(error);
    }
};

// Delete a task
const deleteTask = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedTask = await Task.findByIdAndDelete(id);
        if (!deletedTask) return res.status(404).json({ message: 'Task not found' });
        res.status(200).json({ message: 'Task deleted' });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
};
