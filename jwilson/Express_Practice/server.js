var express = require('express');
var app = express();
var bp = require('body-parser');
var session = require('express-session');

app.use(bp.urlencoded({extended: true}));
app.use(session({secret: 'mykey'}));

app.get('/', function(request, response){
    response.send("Hello World");
});

app.listen(8000, function() {
    console.log("Listening on port 8000...");
})

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.get('/users', function(request, response){
    // console.log("POST DATA \n\n", request.body);
    let count = 0;
    count = request.session.count;
    request.session.count++;
    
    response.render('users', {count: request.session.count});
})

app.post('/users', function(request, response){

    request.session.name = request.body.name;

    response.redirect('/');


})