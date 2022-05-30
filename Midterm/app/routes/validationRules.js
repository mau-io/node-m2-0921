module.exports = {
  TodoController: {
    create: {
      id: {
        type: 'number',
        required: true
      },
      name: {
        type: 'string',
        required: true
      },
      completed: {
        type: 'boolean',
        required: true
      }     
    },
    getAll: {},
    getById: {
      id: {
        type: 'number',
        required: true
      }
    },
    update: {
      name: {
        type: 'string',
        required: true
      },
      completed: {
        type: 'boolean',
        required: true
      },
    },

  },

};