var express    = require('express')
var bodyParser = require('body-parser')
var app        = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function(request, response){
  response.render('index');
});

app.get('/contact', function(request, response){
  response.render('contact', {qs: request.query});
});

app.post('/contact', urlencodedParser, function(request, response){
  console.log(request.body);
  response.render('contact-success', { data: request.body });
});

app.get('/profile/:name', function(request, response){
  var data = {age: 27, job: 'Web Developer', hobbies: ['eating', 'coding', 'kissing']};
  response.render('profile', {person: request.params.name, data: data });
});
app.listen(3000);
