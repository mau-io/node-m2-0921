const Parameter = require('parameter');
const parameter = new Parameter();

const validation = (rules = {}) => (
  (req, res, next) => {
    const errors = parameter.validate(rules, req.body);
    if(errors) {
      throw {
        status: 422,
        code: 'INVALID_PARAM',
        message: errors
      };
    }else {
      next();
    }
  }
);

module.exports = validation;