let express= require('express');
let bp = require('body-parser');
let mongoose = require('mongoose');
let app = express();

app.use(express.static(__dirname+'/static'));
app.use(bp.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/quotingdojo', {useMongoClient: true})

var QuoteSchema = new mongoose.Schema({
 name: {type: String, required: true, minlength: 2},
 quote: {type: String, required: true, minlength: 1},
}, {timestamps: true});

mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote');

app.get('/', function(req, res){
  console.log("-= Reached / (index.ejs) =-");

	res.render('index.ejs');
})


app.get('/quotes', function(req, res){
  console.log("getting your quotes");

  Quote.find({}).sort({createdAt: "desc"}).exec(function(err, quotes) {
    if (err) {
      res.send(err);
      console.log(err);
    }
    else {
      console.log(quotes);
      res.render("quotes.ejs", {quotes: quotes});
    }
  });

});


app.post('/quotes', function(req, res){
  console.log("-= Reached / (index.ejs) =-");
  Quote.create(req.body, function(err, message){
		if(err){
			let errors_arr = [];
			for(key in err.errors){
				let error = err.errors[key];
				errors_arr.push(error.message);
			}
		} else {
			console.log(message);
		}
	})
	return res.redirect('/quotes');
})



app.listen(8000, function() {
    console.log("listening on port 8000");
})
