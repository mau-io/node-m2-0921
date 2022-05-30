const validation = require('../middlewares/validation.js');

module.exports = (router, APIs, {controllers, services, rules}) => {
  for(let api of APIs) {
    router?.[api.verb](
      api.path,
      validation(rules[api.controller]?.[api.method]),
      controllers[api.controller](services)?.[api.method]
    );
  }
  return router;
};