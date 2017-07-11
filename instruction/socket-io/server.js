var express = require('express');

var app = express();

app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/bower_components'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', function(req, res){
	res.render('index.ejs');
})

var server = app.listen(8000, function(){
	console.log('listening on port 8000...');
})

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){

	console.log('new socket connection...');
	console.log(`Socket ID: ${socket.id}`);
	
	socket.on('new_user', function(data){
		socket.user_name = data.name;
		socket.emit('user_created', { "name": socket.user_name });
	})

	socket.on('button_clicked', function(data){
		console.log(data);
		io.emit('button_response', data);
	})

})











