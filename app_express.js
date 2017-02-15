var express = require('express')
var app     = express();
var fs      = require('fs');

app.get('/', function(request, response){
  response.send('This is the homepage')
});
app.get('/contact', function(request, response){
  response.send("This is the contact page")
});
app.get('/profile/:name', function(request, response){
  response.send('You requested to see profile with the name of ' + request.params.id);
});
app.listen(3000);
