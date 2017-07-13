var express = require("express");
var bodyParser = require('body-parser');
var session = require('express-session')
var path = require("path");

var app = express();
app.use(express.static(path.join(__dirname, "./static")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret: 'yoyohomie'}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
  if (!req.session.count){
    req.session.count=0;
  }
  req.session.count+=1;
  res.render("index", {count: req.session.count});
})

app.get('/add', function(req, res) {
  req.session.count+=2;
  res.redirect("/" );
})

app.get('/reset', function(req, res) {
  req.session.count= -1;
  res.redirect("/" );
})

//post route for adding a user
app.post('/users', function(req, res) {
 console.log("POST DATA", req.body);

 res.redirect('/');
})
//tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});