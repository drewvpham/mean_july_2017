let mongoose = require('mongoose');
let bcrypt = require('bcrypt');

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

let UserSchema = new mongoose.Schema({
  first_name: {
      type: String,
      required: [true, "Must input a first name"],
      trim: true,
  },
  last_name: {
      type: String,
      required: [true, "Must input a last name"],
      trim: true,
  },
  email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  password_confirm: {
    type: String,
    required: true,
    minlength: 8,
  },
  date_of_birth: {
    type: Date,
    required: [true, "Must input a birth date"],
  }
}, { timestamps: true});

UserSchema.pre('save', function(next){
  this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
  this.password_confirm = bcrypt.hashSync(this.password_confirm, bcrypt.genSaltSync(10));
  if(this.password.confirm == this.password){
    next();
  } else {
    return console.log("Passwords do not match");
  }
})
UserSchema.methods.login = function(password){
  return bcrypt.compareSync(password, this.password);
}
mongoose.model('User', UserSchema);
