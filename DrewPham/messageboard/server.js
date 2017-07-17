let express= require('express');
let bp = require('body-parser');
let mongoose = require('mongoose');
let app = express();

app.use(express.static(__dirname+'/static'));
app.use(bp.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/messageboard', {useMongoClient: true})

let MessageSchema = new mongoose.Schema({

    name:{
      type: String,
      required: [true, 'Name cannot be blank'],
      minlength: [4, 'Name must be at least four characters']
    },
    message:{
      type: String,
      required: [true, 'Message cannot be blank']
    },
    comments:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }]

}, {timestamps: true});


let CommentSchema = new mongoose.Schema({

    name:{
      type: String,
      required: [true, 'Name cannot be blank'],
      minlength: [4, 'Name must be at least four characters']
    },

    comment: {
      type: String,
      required: [true, 'Comment cannot be blank']
    },

      message:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
      }

    },{timestamps: true});

let Message= mongoose.model('Message', MessageSchema);
let Comment= mongoose.model('Comment', CommentSchema);




app.get('/', function(req, res){
	res.render('index.ejs');
})



app.listen(8000, function() {
    console.log("listening on port 8000");
})
