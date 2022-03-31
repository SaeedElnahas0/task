const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    date: {
        type: Date,
        default: Date.now
    },
    x: {}
  }
);

module.exports = mongoose.model('Task', taskSchema);
