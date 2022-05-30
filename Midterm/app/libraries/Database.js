const mongoose = require('mongoose');

class Database {

  constructor(CONFIG) {
    this._CONFIG = CONFIG;
  }

  start() {
    mongoose.connect(this._CONFIG.DATABASE.MONGO_URL, {
      dbName: this._CONFIG.DATABASE.MONGO_DBNAME,
      useFindAndModify:   false,
      useUnifiedTopology: true,
      useCreateIndex:     true,
      useNewUrlParser:    true,
      keepAlive: true, 		// Server attempt to reconnect #times
    });

    mongoose.connection.on('connected', () => {
      const message = this._CONFIG.NODE_ENV === 'production'
        ? 'Mongoose connection connected'
        : `Mongoose connection open to ${this._CONFIG.DATABASE.MONGO_URL}`;
      console.log('\x1b[32m', message);
    });
    
    mongoose.connection.on('error', (error) => {
      console.error('\x1b[31m', `Mongoose connection error: ${error}`);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('\x1b[31m', 'Mongoose connection disconnected');
    });
 
    process.on('SIGINT', () => {
      mongoose.connection.close(() => {
        console.log('Mongoose connection closed through app termination');
        process.exit(0);
      });
    });
  }

  close() {
    mongoose.connection.close();
  }

}

module.exports = Database;