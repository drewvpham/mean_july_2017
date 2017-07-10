var express = require('express');
var app = express();
var bp = require('body-parser');
var session = require('express-session');

app.use(bp.urlencoded({extended: true}));
app.use(session({secret: 'mykey'}));

app.listen(8000, function() {
    console.log("Listening on port 8000...");
})

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.get("/", function(request, response){
  console.log(request.session);
  if(!request.session.count){
    request.session.count = 0;
  }
  request.session.count += 1;
  console.log(request.session.count);
  response.render("index.ejs", {"count":request.session.count});
});

