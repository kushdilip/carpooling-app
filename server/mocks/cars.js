module.exports = function(app) {
  var express = require('express');
  var carsRouter = express.Router();

  carsRouter.get('/', function(req, res) {
    res.send({
      "cars": [
        {
          id: 1, 
          name: 'KA01AA1234', 
          capacity: 5, 
          occupied: 1,
          source: 1,
          dest: 2,
          ownerid: 1,
          starttime: '2014-12-13T9:09:33+05:30'
        },
        {
          id: 2, 
          name: 'KA01AA2564', 
          capacity: 3, 
          occupied: 1,
          source: 3,
          dest: 4,
          ownerid: 2,
          starttime: '2014-12-13T9:09:33+05:30'
        },
        {
          id: 3, 
          name: 'KA01AA8925', 
          capacity: 5, 
          occupied: 1,
          source: 5,
          dest: 6,
          ownerid: 3,
          starttime: '2014-12-13T9:09:33+05:30'
        },
      ]
    });
  });

  carsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  carsRouter.get('/:id', function(req, res) {
    res.send({
      "cars": {
        "id": req.params.id
      }
    });
  });

  carsRouter.put('/:id', function(req, res) {
    res.send({
      "cars": {
        "id": req.params.id
      }
    });
  });

  carsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/cars', carsRouter);
};
