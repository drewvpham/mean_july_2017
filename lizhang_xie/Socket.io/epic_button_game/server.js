var express = require('express');
var app = express();

app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/bower_components'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
    res.render('index.ejs');
});

var server = app.listen(8000, function() {
    console.log('App listening on port 8000!');
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
    var count = 0;
    socket.on('add',function(){
        count++;
        socket.emit('show',{count: count});
    });

    socket.on('reset', function(){
        count = 0;
        socket.emit('show',{count: count});        
    });
});