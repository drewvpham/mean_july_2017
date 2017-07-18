var express = require('express');
var bp = require('body-parser');
var app = express();

app.use(express.static(__dirname + "/static"));
app.use(bp.urlencoded({ extended: true}));

app.set("views", __dirname + "/client/views");
app.set('view engine', 'ejs');

//require mongoose connection file
require('./server/config/mongoose');

//require the routing file
require('./server/config/routes')(app);

app.listen(7000, function(){
  console.log("Listening on port 7000");
})
