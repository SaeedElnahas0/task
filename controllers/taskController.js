const Task = require('../models/Task');
const { StatusCodes } = require('http-status-codes');

const createTask= async (req, res) => {
    const task = await Task.create(req.body);
    res.status(StatusCodes.CREATED).json({ 
        msg: "Task Already Created",
        task 
    });
};

module.exports = {
    createTask
}