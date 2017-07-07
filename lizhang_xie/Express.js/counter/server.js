var express = require('express');
var bp = require('body-parser');
var session = require('express-session')

var app = express();
app.use(express.static(__dirname + '/static'));
app.use(bp.urlencoded({ extended: true }));
app.use(session({secret: 'codingasdfsdf'}));

app.set('view-engine', 'ejs');
app.set('views', __dirname + '/views')

app.get('/', function(req, res){
    if (!req.session.count) {
        req.session.count = 0;
    }
    req.session.count += 1;
    res.render("index.ejs", {counter: req.session.count});
});

app.post('/add', function(req, res) {
    req.session.count +=1;
    res.redirect('/');
});

app.post('/reset', function(req, res) {
    req.session.count = -1;
    res.redirect('/');
});


app.listen(8000, function() {
    console.log('------------------------------------');
    console.log("listening to port 8000");
    console.log('------------------------------------');
});