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
  var data = {age: 27, job: 'Web Developer'};
  response.render('profile', {person: request.params.name, data: data });
});
app.listen(3000);
