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
  if (!req.session.number){
    req.session.number = Math.floor(Math.random()*100+1)
  }
  content = {
    answer : req.session.number,
    guess : req.session.guess
  }
  console.log(content);
 res.render("index", {content : content});
})

app.get('/play_again', function(req, res) {
  req.session.destroy();
  res.redirect("/");
})


app.post('/guess', function(req, res) {
 console.log("POST DATA", req.body);
 req.session.guess = parseInt(req.body.guess)
 res.redirect('/');
})

// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
