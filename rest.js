var express = require('express');

var app = express();

var todos = [
  'Clean dog.',
  'Buy Groceries.',
  'Send letter.'
];

app.get('/', function(req, res) {
    res.json({ message: 'It works!' });
});

app.get('/todo', function(req, res) {
    res.json(todos);
});

app.get('/todo/:id', function(req, res) {
    res.json(todos[req.params.id]);
});

app.get('/deleteTodo/:id', function(req, res){
  // null
  //delete todos[req.params.id];

  // pop off
  todos.splice(req.params.id, req.params.id+1);
  res.json(todos);
});

app.get('/addTodo/:todo', function(req, res){
  // null
  //delete todos[req.params.id];

  // pop off
  todos.push(req.params.todo);

  // %20 is a space
  // http://superuser.com/questions/149329/what-is-the-curl-command-line-syntax-to-do-a-post-request

  res.json(todos);
});

var server = app.listen(8000);
console.log("Service running on local host port 8000");
// check tuts on the last 2 weeks github

// learn how to use one url, rather then three for each http verb
