var express  =  require( "express");
var path  =  require( "path");
var app  =  express();

app.use(express.static(__dirname + "/static"));
app.use(express.static(__dirname + '/bower_components'));
app.set("views", __dirname + "/views");
app.set('view engine',  'ejs');

app.post('/', function(req, res) {
 res. render("index.ejs");
});

// tell the express app to listen on port 8000
var server = app.listen(7000, function() {
 console.log("listening on port 7000");
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
  socket.on("posting_form", function(data){
        socket.name = data.name;
        socket.language = data.language;
        socket.dojo = data.dojo;
        socket.comment = data.comment;

        socket.emit('updated_message',{
            'name': socket.name,
            'language': socket.language,
            'dojo': socket.dojo,
            'comment': socket.comment,
        })
  });
});
