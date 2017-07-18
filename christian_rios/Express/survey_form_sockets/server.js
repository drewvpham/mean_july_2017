var express = require("express");

var app = express();

app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/bower_components'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', function (req, res){

  res.render('index')
})

var server = app.listen(8000, function() {
  console.log('Listening on port 8000')
})

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
  // console.log("WE ARE USING SOCKETS!");
  // console.log(socket.id);

  //listening for message 'info_stored' from front-end
  socket.on('posting_form', function(data){
    var rand = Math.floor(Math.random() * 1000) +1;
    socket.user_name = data.name;
    socket.location = data.location;
    socket.language = data.language;
    socket.comment = data.comment;
    //sending message 'submit response' to the front-end
    socket.emit('update_message', { "name": socket.user_name, "location": socket.location, "language": socket.language, "comment": socket.comment, "rand": rand });
  })
})
