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
mongoose.connect('mongodb://localhost/message_board', {useMongoClient: true});

let MessageSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, "You must input your name"],
    minlength: [4, "Name must be at least four characters long"],
  },
  message:{
    type: String,
    required: [true, "You must input a message"],
  },
  comments:[{ //"comments" instead of "comment", as this is a OtM pseudo relationship
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
  }]
}, { timestamps: true});

let CommentSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, "You must input your name"],
    minlength: [4, "Name must be at least four characters long"],
  },
  comment:{
    type: String,
    required: [true, 'Comment cannot be blank'],
  },
  _message:{ //singular because a comment has one message
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message',
  }
}, { timestamps: true});

let Message = mongoose.model('Message', MessageSchema);
let Comment = mongoose.model('Comment', CommentSchema);

//Routes
app.get('/', function(req, res){
  Message.find({}).populate('comments').exec(function(err, messages){
    if(err){
      console.log(err);
    }else{
      console.log(messages);
      return res.render('index.ejs',  {messages:messages});
    }
  })
})

app.post('/messages', function(req, res){
  Message.create(req.body, function(err, message){
    if(err){
      let errors_arr = [];
      for(key in err.errors){
        let error = err.errors[key];
        errors_arr.push(error.message);
      }
    }else{
      console.log(message);
    }
  })
  return res.redirect('/')
})

app.post('/comments', function( req, res){
  Comment.create(req.body, function(err, comment){
    if(err){
      console.log(err);
    }else{
      Message.findByIdAndUpdate(req.body.message, {$push: { comments: comment._id }}, {new: true} , function(err, message){
        if(err){
          console.log(err);
        } else {
          console.log(message);
          return res.redirect('/');
        }
      })
    }
  })
})

app.listen(7000, function() {
  console.log("listening on port 7000");
});
