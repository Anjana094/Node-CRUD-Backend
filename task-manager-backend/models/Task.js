const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Task title is required'],
        },
        description: {
            type: String,
        },
        completed: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true } // Adds createdAt and updatedAt fields
);

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
