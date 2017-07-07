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
app.use(session({secret: 'secretkey'}));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view

app.get('/', function(req, res) {
 res.render("index");
})

app.get('/result', function(req, res) {
  var userdata = {
    name: req.session.name,
    dojo_location:req.session.dojo_location,
    fav_lang: req.session.fav_lang,
    comment: req.session.comment
  }
  res.render("result", {userdata: userdata});
})
// post route for adding a user
app.post('/submit', function(req, res) {
 console.log("POST DATA", req.body);
 req.session.name = req.body.name;
 req.session.dojo_location = req.body.dojo_location;
 req.session.fav_lang = req.body.fav_lang;
 req.session.comment = req.body.comment;
 // This is where we would add the user to the database
 // Then redirect to the root route
 res.redirect('/result');
})
app.get('/goback', function(req, res) {
  req.session.destroy();
  res.redirect("/");
})

// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
