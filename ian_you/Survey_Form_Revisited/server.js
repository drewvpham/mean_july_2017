var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
var session = require('express-session');
// create the express app
var app = express();
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
app.use(express.static(path.join(__dirname, "./bower_components")));
app.use(session({secret: 'secretkey'}));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view

app.get('/', function(req, res) {
 res.render("index");
})

// tell the express app to listen on port 8000
var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
  console.log('new socket connection...');
  console.log(`Socket ID: ${socket.id}`);
  socket.on('data_submit', function(data){
    console.log(data.data);
    let luckyNumber = Math.floor(Math.random() * 1000 +1);
    socket.user_data = data.data;
    socket.user_data.luckyNumber = luckyNumber;
    console.log(socket.user_data);
    socket.emit('data_submited', {
      'data' : socket.user_data });
  })

})
