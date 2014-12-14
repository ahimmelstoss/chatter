var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(socket){
  console.log('a user is connected');
  socket.on('chat message', function(message){
    io.emit('chat message', message);
  })
  socket.on('disconnect', function(){
    console.log('a user is disconnected');
  });
});

app.use(express.static('public'));

app.get('/', function(request, response){
  response.render('index.ejs');
});

server.listen(8080, function(){
  console.log("Listening on Port 8080");
});