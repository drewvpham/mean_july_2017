let express = require("express");
let mongoose = require('mongoose');
let bp = require('body-parser');
let app = express();

app.use(bp.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/cat_db', { useMongoClient: true });

let CatSchema = new mongoose.Schema({
 name: { 
    type: String, 
    required: true, 
    minlength: 3 
},
 age: Number,
 size: String,
},{timestamps:true});

let Cat = mongoose.model('Cat', CatSchema); 

app.get('/', function(req, res) {
	Cat.find({}, function(err, results) {
		if (err){ 
			console.log(err);
		} else {
			res.render('index', {cats: results})
		}
	});
});

app.get('/new', function(req, res){
	res.render('new')
})
app.post('/', function(req, res){
	let cat = new Cat(req.body);
	cat.save(function(err){
		if (err){
			res.render('new', {title: 'you have errors!', errors: cat.errors})
		} else {
			res.redirect('/')
		}
	})
});
app.get('/:id', function(req, res){
	Cat.find({ _id: req.params.id }, function(err, cat){
		if (err){
			console.log(err);
		} else {
			res.render('show', {cat: cat[0]});
		}
	});
});
app.get('/:id/edit/', function(req, res){
	Cat.find({ _id: req.params.id }, function(err, cat){
		if (err){
			console.log(err);
		} else {
			res.render('edit', {cat: cat[0]});
		}
	});
});
app.post('/cats/:id', function(req, res){
	Cat.update({ _id: req.params.id }, req.body, function(err, cat){
		if (err){
			console.log(err);
		} else {
			res.redirect('/')
		}
	});
});
app.post('/:id/destroy', function(req, res){
	Cat.remove({ _id: req.params.id }, function(err, result){
		if (err){
			console.log(err);
		} else {
			res.redirect('/')
		}
	});
});

app.listen(8000, function() {
	 console.log("listening on port 8000...");
})
