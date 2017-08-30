const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found',
    name: 'Todo App v1.0'
  });
});

// GET /users

app.get('/users', (req, res) => {
  res.status(200).send([{
    name: 'kazikai',
    age: 34
  }, {
    name: 'kazikai1',
    age: 345
  }
]);
});

app.listen(3000);

module.exports.app = app;