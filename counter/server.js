var express = require("express");
var bp = require("body-parser");
var session = require('express-session');
var app = express();
// Tells the server to look in the static folder for static files
app.use(express.static(__dirname + "/static"));
// Set up body-parser
app.use(bp.urlencoded({ extended: true}));
// Set up session encryption
app.use(session({secret: 'qwertypops'}));
// Tells the server to look in the views folder for views files
app.set("views", __dirname + "/views");
// Sets the view engine itself so that express knows that we are using ejs as opposed to another templating engine
app.set('view engine', 'ejs');

app.get("/", function(request, response){
  console.log(request.session);
  if(!request.session.count){
    request.session.count = 0;
  }
  request.session.count += 1;
  console.log(request.session.count);
  response.render("index.ejs", {"count":request.session.count});
});

app.listen(7000, function() {
  console.log("listening on port 7000");
});
