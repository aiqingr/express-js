var express = require('express');
var app=express();

var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}
var cb2 = function (req, res, next) {
  console.log('CB2');
  next();
}

var cb3 = function (req, res) {
  res.send('Hello from c!');
}

app.get('/example/c', [cb0, cb1, cb2, cb3]);

app.listen(5000, function(){
  console.log('Example app listening on port 5000');
});
