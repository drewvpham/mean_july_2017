var express  =  require( "express");
var path  =  require( "path");
var app  =  express();
var count = 0;

app.use(express.static(__dirname + "/static"));
app.use(express.static(__dirname + '/bower_components'));
app.set("views", __dirname + "/views");
app.set('view engine',  'ejs');

app.get('/', function(req, res) {
 res. render("index.ejs");
});

var server = app.listen(7000, function() {
 console.log("listening on port 7000");
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
  console.log(count);
  socket.emit('count', count);
  socket.on('epic_clicked', function(){
    count ++;
    console.log('epic_clicked', count);
    io.emit('count', count);
  });
  socket.on('reset_clicked', function(){
    count = 0;
    console.log('reset_clicked', count);
    io.emit('count', count);
  });
});
