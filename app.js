var http = require('http');
var fs   = require('fs');


var server = http.createServer(function(request, response){
  console.log('request was made: ' + request.url);
  response.writeHead(200, {'Content-Type': 'application/json'});
  var myReadStream  = fs.createReadStream(__dirname + '/index.html', 'utf8');
  myReadStream.pipe(response);
  // var myObj = {
  //   name: 'Ryu',
  //   job: 'ninja',
  //   age: 29
  // }
  // response.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('Listening to port 3000...');