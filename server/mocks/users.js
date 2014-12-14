module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();

  usersRouter.get('/', function(req, res) {
    res.send({
      "users": [
        {
          id: 1, 
          name: 'Person 1', 
          carid: 1
        },
        {
          id: 2, 
          name: 'Person 2', 
          carid: 2
        },
        {
          id: 3, 
          name: 'Person 3', 
          carid: 3
        }
      ]
    });
  });

  usersRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  usersRouter.get('/:id', function(req, res) {
    res.send({
      "users": {
        "id": req.params.id
      }
    });
  });

  usersRouter.put('/:id', function(req, res) {
    res.send({
      "users": {
        "id": req.params.id
      }
    });
  });

  usersRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/users', usersRouter);
};
