var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hello World');
});



app.get('/example/a', function(req, res){
  res.send('Hello from A!');
});


app.get('/random', function(req, res){
  res.send('random');
});

app.get('/users/:userID/books/:bookId', function(req, res){
  res.send('user id is ' + req.params['userID']);
});

app.get('flights/:from-:to')

app.get('/example/b', function(req, res, next) {
  console.log('the respond will be sent by the next function');
  next();
},function(req, res){
  res.send('hello world B');
});


app.listen(4000, function(){
  console.log('Example app listening on port 4000');
});
