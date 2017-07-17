var express = require('express');
var bp = require('body-parser');
var session = require('express-session');

var app = express();

//set up the static folder
app.use(express.static(__dirname + '/static'))

//set up body-parser
app.use(bp.urlencoded({ extended: true }))

//set up express-session
app.use(session({ secret: 'anystringdoesntmatter' }))

//set up the view-engine aka templating engine
app.set('view-engine', 'ejs');
//set up the view directory
app.set('views', __dirname + '/views');

var users = [];

app.get('/', function(request, response){
	//went to the db server got some data
	response.render('index.ejs', { "users": users, "name": request.session.name })
})

app.post('/users', function(request, response){
	//body parser at work
	users.push(request.body);
	request.session.name = request.body.name;
	response.redirect('/')
})

app.get('*', function(request, response){
	response.send('404 - file not found')
})


app.listen(8000, function(){
	console.log('listening on port 8000...')
})