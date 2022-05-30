const Database = require('./libraries/Database');

function errorHandler(err, req, res, next) {
  res
    .status(err.status || 500)
    .json({
      code: err.code,
      errors: err.message
    });
}

module.exports = class Server {

  constructor(server, modules) {
    this._server  = server;
    this._modules = modules;
  }

  initDbConection(config) {
    const database = new Database(config);
    database.start();
    return this;
  }

  addRoute(path, status, response) {
    this._server.all(path, (req, res, next) => {
      res
        .status(status)
        .json(response);
    });
    return this;
  }

  create(config) {
    // Server settings
    this._server.set('env',      config.env);
    this._server.set('port',     config.port);
    this._server.set('hostname', config.hostname);
    
    this._server.use(this._modules.cors());
    // Returns middleware that parses json
    this._server.use(this._modules.bodyParser.json());
    this._server.use(this._modules.bodyParser.urlencoded({
      extended: false
    }));

    this._server.use(this._modules.compression());

    return this;
  }

  addRoutes(prefix = '', routes) {
    this._server.use(prefix, routes);

    this._server.use(errorHandler);
    return this;
  }

  start(callback) {
    const port = this._server.get('port');
    return this._server.listen(port, callback);
  }
};