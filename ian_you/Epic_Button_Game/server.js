var express =require('express');
var app = express();

app.use(express.static(__dirname+'/static'));
app.use(express.static(__dirname+'/bower_components'));

app.set('views', __dirname+'/views');
app.set('view engine' , 'ejs');

app.get('/', function(req, res){
  res.render('index.ejs');
})

var server = app.listen(8000, function(){
  console.log("listening on port 8000...")

})

var io = require('socket.io').listen(server);

var count = 0;

io.sockets.on('connection', function(socket){
  console.log("New socket connection...");
  console.log(socket.id);
  io.emit('currentCount' , {'count' : count})
  socket.on('addCount', function(){
    count++;
    io.emit('currentCount' , {'count' : count});
  })
  socket.on('reset', function(data){
    count = data.count;
    io.emit('currentCount' , {'count' : count});
  })
})
