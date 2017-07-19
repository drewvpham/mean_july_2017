var express = require("express");
var bp = require("body-parser");
var app = express();
var session = require('express-session');

app.use(express.static(__dirname + '/static'));

app.use(bp.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');

app.use(session({secret: "secret"}));

app.get('/', function (req, res){
  if(!req.session.views){
    req.session.views = 0;
  }
    req.session.views += 1;
  res.render('index', {count: req.session.views})
})

app.post('/plus2', function (req, res){
  // if(req.session.views){
    req.session.views += 1;
  // }
  res.redirect('/')
})

app.post('/reset', function (req, res){
  if(req.session.views > 1){
    req.session.views = 0;
  }
  res.redirect('/')
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})
