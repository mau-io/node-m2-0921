const mongoose = require('mongoose');

/**
  {
    id: 1,
    name: "1 task example",
    completed: false
  },
 */

const TaskSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  }

}, {

  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  versionKey: false
});

module.exports = mongoose.model('Task', TaskSchema);