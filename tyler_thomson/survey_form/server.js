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

app.post("/", function(request, response){
  response.render("index.ejs");
});

app.post("/results", function(request, response){
  request.session.name = request.body.name;
  request.session.location = request.body.location;
  request.session.language = request.body.language;
  request.session.comment = request.body.comment;
  response.render("results.ejs", {"name": request.session.name,
                                "location": request.session.location,
                                "language": request.session.language,
                                "comment": request.session.comment
                              });
});

app.listen(7000, function() {
  console.log("listening on port 7000");
});
