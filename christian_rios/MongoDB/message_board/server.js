var express = require("express");
var bp = require("body-parser");
var app = express();
var mongoose = require('mongoose');
var exec = require('exec');

app.use(express.static(__dirname + '/static'));

app.use(bp.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/message_db', { useMongoClient: true });
//message schema
var MessageSchema = new mongoose.Schema({
	name: { 
	type: String,
	required: [true, "Name connect be blank."],
	minlength: [4, "Name must be at least 4 characters."],
	},
	message: {
		type: String, 
		required: [true, "Message cannot be blank."]
	},
	comments: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Comment'
	}]
}, { timestamps: true });
//comment schema
var CommentSchema = new mongoose.Schema({
	name: { 
	type: String,
	required: [true, "Name connect be blank."],
	minlength: [4, "Name must be at least 4 characters."],
	},
	comment: {
		type: String,
		required: [true, "Comment cannot be blank."]
	},
	_message: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Message"
	}
}, { timestamps: true });

var Message = mongoose.model('Message', MessageSchema);
var Comment = mongoose.model('Comment', CommentSchema);

//Routes
app.get('/', function(req, res){
	Message.find({}).populate('comments').exec(function(err, messages){
		if(err){
			console.log(err);
		} else {
			res.render('index', { messages: messages })
		}
	})
})

app.post('/messages', function(req, res){
	// console.log(req.body);
	Message.create(req.body, function(err, message){
		if(err){
			var errors_arr = [];
			for(key in err.errors){
				var error = err.errors[key];
				errors_arr.push(error.message);
			}
		} else {
			console.log(message);
		}
	})
	res.redirect('/');
});

app.post('/comments', function(req, res){
	Comment.create(req.body, function(err, comment){
		if(err){
			console.log(err);
		} else {
			Message.findByIdAndUpdate(req.body.message, { $push: { comments: comment._id } }, { new: true }, function(err, message){
				if(err){
					console.log(err);
				} else {
					console.log(message)
					res.redirect('/');
				}
			})
		}
	})
})

app.post('/remove/:id', function(req, res) {
    Comment.findByIdAndRemove(req.params.id, function(err) {
    console.log("Removing " + comment._id)
    res.redirect('/')
  })
})


app.listen(8000, function() {
})