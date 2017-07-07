var express = require('express');
var bp = require('body-parser');
var session = require('express-session');

var app = express();
app.use(express.static(__dirname + '/static'));
app.use(bp.urlencoded({ extended: true }));
app.use(session({ secret: 'codingsadfasdf' }));

app.set('view-engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
    if (!req.session.num) {
        req.session.num = Math.floor(Math.random()*100);
        req.session.display = false;
        req.session.success = false;
    }
    console.log(req.session.num);
    
    res.render('index.ejs', {
        display: req.session.display, 
        store: req.session.store, 
        success: req.session.success,
        num: req.session.num,
    });
});

app.post('/process', function(req, res) {
    if (Number(req.body.num) > req.session.num ) {
        req.session.display = true;
        req.session.store = "Too High!"
        console.log('------------------------------------');
        console.log(req.session.store);
        console.log('------------------------------------');
    }
    else if(Number(req.body.num) < req.session.num){
        req.session.display = true;  
        req.session.store = "Too low!"      
    }
    else{
        req.session.display = false;
        req.session.success = true; 
    }
    res.redirect('/');
});

app.post('/reset', function(req, res) {
    req.session.destroy();
    res.redirect('/')
});


app.listen(8000, function() {
    console.log('App listening on port 8000!');
});