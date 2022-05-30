module.exports = {
  name: 'API',
  env:      process.env.NODE_ENV  || 'development',
  hostname: process.env.HOST      || 'localhost',
  port:     process.env.PORT      || 3000,
  DATABASE: {
    MONGO_URL:    process.env.DATABASE_MONGO_URL    || 'mongodb://127.0.0.1:27017',
    MONGO_DBNAME: process.env.DATABASE_MONGO_DBNAME || 'todo-api_development'
  }
};