var express = require("express");
var bp = require("body-parser");
var mongoose = require('mongoose');
var app = express();

app.use(express.static(__dirname + "/static"));
app.use(bp.urlencoded({ extended: true}));
app.set("views", __dirname + "/views");
app.set('view engine', 'ejs');

//Overwrite mongoose library with JS one
mongoose.Promise = global.Promise;
//Connect to mongoose
mongoose.connect('mongodb://localhost/dojo_quotes', {useMongoClient: true});

let QuoteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name field must not be blank"],
  },
  quote: {
    type: String,
    required: [true, "Quote field must not be blank"],
  }
}, { timestamps: true });

let Quote = mongoose.model("Quote", QuoteSchema);


//Routes
app.get("/", function(req, res){
  return res.render("index.ejs");
});

app.post('/quotes', function(req, res){
    Quote.create(req.body, function(err, quote){
      if(err){
        let errors_arr = [];
        for(key in err.errors){
          let error = err.errors[key];
          errors_arr.push(error.quote);
        }
      }
    })
    return res.redirect('/quotes');
});

app.get('/quotes', function(req, res){
  Quote.find({}).sort({updatedAt: -1}).exec(function(err, quotes){
    if(err){
      return res.redirect('/');
    }else{
      return res.render('quotes.ejs', {quotes: quotes});
    }
  })
});

app.listen(7000, function() {
  console.log("listening on port 7000");
});
