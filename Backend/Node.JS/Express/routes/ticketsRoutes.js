// Importing modules
const Express = require('express');
const Router = Express.Router();

// Defining routes
Router.get('/', function (req, res) {
  res.send('Getting all');
})
Router.get('/:id', function (req, res) {
  res.send('Getting One')
})
Router.post('/', function (req, res) {
  res.send('Creating')
})
Router.put('/:id', function (req, res) {
  res.send('Updating')
})
Router.delete('/:id', function (req, res) {
  res.send('Delete')
})