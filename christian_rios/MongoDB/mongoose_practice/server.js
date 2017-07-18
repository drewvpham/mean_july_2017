var express = require("express");
var bp = require("body-parser");
var app = express();
var mongoose = require('mongoose');

app.use(express.static(__dirname + '/static'));

app.use(bp.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/basic_mongoose', { useMongoClient: true });

var UserSchema = new mongoose.Schema({
 name: String,
 age: Number
})
mongoose.model('User', UserSchema);
var User = mongoose.model('User')

app.get('/', function (req, res){
  User.find({}, function(err, users) {
    if(err) {
      console.log('something went wrong');
    } else {
      console.log('Showing users!');
      res.render('index', {users: users})
    }
  });

})

app.post('/users', function(req, res) {
  console.log("POST DATA", req.body);

  var user = new User({name: req.body.name, age: req.body.age});

  user.save(function(err) {

    if(err) {
      console.log('something went wrong');
    } else {
      console.log('successfully added a user!');
      res.redirect('/');
    }
  })
})

app.post('/remove', function(req, res) {
  console.log("removing")
  User.remove({}, function(err) {
    console.log("user removed")
    res.redirect('/')
  })
})

app.listen(8000, function() {
})
