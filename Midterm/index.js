const config = require('./config.js');

const express       = require('express');
const bodyParser    = require('body-parser');
const logger        = require('morgan');
const compression   = require('compression');
const cors          = require('cors');

const rules = require('./app/routes/validationRules.js');

const todoController = require('./app/controllers/TodoController.js');
const todoService = require('./app/services/TodoService.js');

const services = {
  todoService
};

const controllers = {
  todoController
};

const router = express.Router();
const routerDecorator = require('./app/routes/routerDecorator.js');
const v1ApiRoutes = require('./app/routes/v1.js');

const Server = require('./app/Server.js');
const app = new Server(express(), {
  bodyParser,
  logger,
  compression,
  cors,
  router
});

app
  .create(config)
  .addRoute('/', 200, 200)
  .initDbConection(config)
  .addRoutes('/api/v1', routerDecorator(router, v1ApiRoutes, {
    controllers,
    services,
    rules
  }))
  .addRoute('*', 404, {})
  .start(() => {
    console.log(`
    \x1b[34m================================================================
    \x1b[36m (⌐■_■)  ${config.name} RUNNING - PID: ${process.pid}
    \x1b[34m================================================================

    \x1b[36m NODE_ENV:          \x1b[0m ${config.env}
    \x1b[36m Listening at port: \x1b[0m ${config.port}
    \x1b[36m Platform:          \x1b[0m ${process.platform}
    \x1b[34m================================================================
    `);
  });