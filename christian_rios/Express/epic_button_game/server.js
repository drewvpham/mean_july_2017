var express = require("express");

var app = express();

app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/bower_components'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', function (req, res){

  res.render('index')
})

var server = app.listen(8000, function(){
  console.log('Listening on port 8000')
})

var io = require('socket.io').listen(server);


app.get('/', function (req, res) {
  res.render('index.ejs');
});


io.sockets.on('connection', function (socket) {
  count = 0;

  socket.emit('count', count);
  socket.on('add', function () {
    count++;
    console.log('add', count);
    io.sockets.emit('count', count);

    socket.on('reset', function(){
      count = 0;
      io.sockets.emit('count', count);
    })
  });
});
