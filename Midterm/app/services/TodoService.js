
const todoModel = require('../models/TodoModel');

const create = async(data) => {
  
  try {
  
    const result = todoModel.create(data);
    return { 
      data,
    };

  } catch(e) {
    return Promise.reject(e);
  }
};

const getAll = async(data) => {
  
  try {
    const result = await todoModel.find({});
    return { 
      data: result,
    };

  } catch(e) {
    return Promise.reject(e);
  }
};

const getById = async(id) => {
  
  try {

    const result = await todoModel.findById(id);

    return { 
      data: result,
    };

  } catch(e) {
    return Promise.reject(e);
  }
};

const update = async(id, data) => {
  
  try {
   
    const result = await todoModel
      .findByIdAndUpdate({
        _id: id
      }, data, { new: true });
    
    return { 
      data: result,
    };

  } catch(e) {
    return Promise.reject(e);
  }
};

const deleteTask = async(data) => {
  
  try {
    const result = await todoModel.findByIdAndRemove(data);
    return { 
      data: result,
    };

  } catch(e) {
    return Promise.reject(e);
  }
};


module.exports = { 
  create,
  getAll,
  getById,
  update,
  deleteTask,
};