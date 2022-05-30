const APIs = [
  /**
    GET (http://localhost:5000/api/v1/todos) 
    GET (http://localhost:5000/api/v1/todos/id) 
    POST (http://localhost:5000/api/v1/todos) 
    PUT (http://localhost:5000/api/v1/todos/id) 
    DELETE (http://localhost:5000/api/v1/todos/id) 
   */
  {
    verb: 'get',
    path: '/todos',
    controller: 'todoController',
    method: 'getAll'
  },
  {
    verb: 'get',
    path: '/todos/:id',
    controller: 'todoController',
    method: 'getById'
  },
  {
    verb: 'post',
    path: '/todos',
    controller: 'todoController',
    method: 'create'
  },
  {
    verb: 'put',
    path: '/todos/:id',
    controller: 'todoController',
    method: 'update'
  },
  {
    verb: 'delete',
    path: '/todos/:id',
    controller: 'todoController',
    method: 'delete'
  }

];

module.exports = APIs;