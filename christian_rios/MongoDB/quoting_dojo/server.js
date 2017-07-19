var express = require("express");
var bp = require("body-parser");
var app = express();
var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

app.use(express.static(__dirname + '/static'));

app.use(bp.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/basic_mongoose', { useMongoClient: true });

var QuoteSchema = new mongoose.Schema({
 name: { type: String, required: true, minlength: 2},
 quote: { type: String, required: true, minlength: 6}
})

QuoteSchema.plugin(timestamps);

mongoose.model('Quote', QuoteSchema);

var Quote = mongoose.model('Quote')

app.get('/', function (req, res){

  res.render('index')
})

app.post('/quotes', function(req, res) {
  console.log("POST DATA", req.body);

  var quote = new Quote({name: req.body.name, quote: req.body.quote});

  quote.save(function(err) {

    if(err) {
      console.log('Must input data');
    } else {
      console.log('successfully added a quote!');
      res.redirect('/');
    }
  })
})

app.get('/quotes', function (req, res){
  Quote.find().sort('-createdAt').find(function (err, quotes) {
    res.render('quotes', {quotes: quotes})
  });
})

app.post('/remove', function(req, res) {
  console.log("removing")
  Quote.remove({}, function(err) {
    console.log("quote removed")
    res.redirect('/quotes')
  })
})

app.get('/home', function(req, res){
  res.redirect('/')
})

app.listen(8000, function() {
})
