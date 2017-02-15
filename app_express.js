var express = require('express')
var app     = express();

app.set('view engine', 'ejs');

app.get('/', function(request, response){
  response.sendFile(__dirname + '/index.html')
});
app.get('/contact', function(request, response){
  response.sendFile(__dirname + '/contact.html')
});
app.get('/profile/:name', function(request, response){
  response.send('You are viewing the profile of ' + request.params.name);
});
app.listen(3000);
