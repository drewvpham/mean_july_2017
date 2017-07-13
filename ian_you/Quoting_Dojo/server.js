let express = require('express');
let bp = require('body-parser');
let mongoose = require('mongoose')

let app = express();

//Middleware
app.use(express.static(__dirname+'/client/static/'));
app.use(bp.urlencoded({ extended: true}));

app.set('views', __dirname+'/client/views/');
app.set('view engine' , 'ejs');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/quotes', { useMongoClient: true });

// Schemas
let QuoteSchema = new mongoose.Schema({
  name : {
    type: String,
    required: [true, 'Name cannot be blank']
  },
  quote : {
    type: String,
    required: [true, 'Quote cannot be blank']
  }
}, { timestamps: true});

let Quote = mongoose.model('Quote', QuoteSchema);


// Routes
app.get('/', function(req, res){
  // Quote.remove({}, function(req, res){
  //   console.log('deleting all users');
  // })
  res.render('index')
})

app.get('/quotes', function(req, res){
  Quote.find({}, function(err, quotes){
    if (err){
      console.log(err);
    } else {
      console.log(quotes);
      res.render('quotes', {quotes: quotes})
    }
  })
})

app.post('/quotes', function(req, res){
  console.log(req.body);
  Quote.create(req.body, function(err, quote){
    if (err){
      let errors_arr =[]
      for (key in err.errors){
        let error = err.errors[key];
        errors_arr.push(error.message);
      }
    } else{
      console.log(quote);
      res.redirect('/quotes')
    }
  })
})

app.listen(8000, function(){
  console.log("Listening on port 8000...");
})
