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

  res.render('index')
})

app.post('/result', function (req, res){
  context = [
  name = req.body.yourname,
  location = req.body.location,
  language = req.body.language,
  comment = req.body.comment
]
  res.render('result', context)
})


app.listen(8000, function() {
})
