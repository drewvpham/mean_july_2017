var express = require('express');
var bp = require('body-parser');
var app = express();

app.use(bp.urlencoded({ extended:true }));
app.use(bp.json());

//require mongoose connection file
require('./server/config/mongoose');

//require the routing file
require('./server/config/routes')(app)

app.listen(7000, function(){
  console.log("Listening on port 7000");
})
