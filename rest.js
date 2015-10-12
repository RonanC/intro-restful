var express = require('express');

var app = express();

// body parser is needed to parse the data from the body
var bodyParser = require('body-parser');
app.use(bodyParser());

var todos = [
  'Clean dog.',
  'Buy Groceries.',
  'Send letter.'
];

app.get('/', function(req, res) {
    //res.json({ message: 'It works!' });
    res.status(200).json(req.query);
});

app.get('/todo', function(req, res) {
  res.status(200).json(todos);
});

app.get('/todo/:id', function(req, res) {
    res.json(todos[req.params.id]);
    res.status(200).json(todos[req.params.id]);
});

app.delete('/todo/:id', function(req, res) {
  todos.splice(req.params.id, 1); // splice(index, how many, itemsToAdd[optional])
  res.status(200).json(todos);
});

app.post('/todo', function(req, res) {
    var item = req.body.item;

    if (item === undefined || item === null) {
      res.status(422).json(todos);
    }
    else {
      todos.push(item);
      res.status(200).json(todos);
    }
});

app.put('/todo/:id', function(req, res) {
    var item = req.body.item;

    if (item === undefined || item === null) {
      res.status(422).json(todos);
    }
    todos[req.params.id] = item;
    res.status(200).json(todos);
});

  // %20 is a space
  // http://superuser.com/questions/149329/what-is-the-curl-command-line-syntax-to-do-a-post-request

var server = app.listen(8000);
console.log("Service running on local host port 8000");
// check tuts on the last 2 weeks github

// learn how to use one url, rather then three for each http verb
