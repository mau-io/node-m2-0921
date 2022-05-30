const pickupController = ({todoService}) => ({

  create: async(req, res, next) => {
    const data = req.body;
    try {
      const result = await todoService.create(data);
      res
        .status(201)
        .json(result);
    } catch(err) {
      next(err);
    }
  },

  getAll: async(req, res, next) => {
    try {
      const result = await todoService.getAll();
      res
        .status(200)
        .json(result);
    } catch(err) {
      next(err);
    }
  },

  getById: async(req, res, next) => {
    const { id } = req.params;
    try {
      const result = await todoService.getById(id);
      res
        .status(200)
        .json(result);
    } catch(err) {
      next(err);
    }
  },

  update: async(req, res, next) => {
    const { id } = req.params;
    const  data = req.body;
    try {
      const result = await todoService.update(id, data);
      res
        .status(200)
        .json(result);
    } catch(err) {
      next(err);
    }
  },

  delete: async(req, res, next) => {
    const { id } = req.params;
    try {
      const result = await todoService.deleteTask(id);
      res
        .status(200)
        .json(result);
    } catch(err) {
      next(err);
    }
  }
  
});

module.exports = pickupController;