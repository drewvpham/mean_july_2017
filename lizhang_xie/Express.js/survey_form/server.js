var express = require('express');
var bp = require('body-parser');
var session = require('express-session');

var app = express();
app.use(express.static(__dirname + '/static'));
app.use(bp.urlencoded({ extended: true }));
app.use(session({secret: 'codingasdfsdf'}));

app.set('view-engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
    res.render('index.ejs')
});

app.post('/result', function(req, res) {
    res.render('results.ejs', {form: req.body});
});

app.listen(8000, function() {
    console.log('------------------------------------');
    console.log("listening to port 8000");
    console.log('------------------------------------');
});