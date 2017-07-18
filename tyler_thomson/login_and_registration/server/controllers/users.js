let mongoose = require('mongoose');

let User = mongoose.model('User');

module.exports = {
  new: function(req, res){
    return res.render('users/new.ejs');
  },
  create: function(req, res){
    User.create(req.body, function(err, user){
      if(err){
        console.log(err);
      } else {
        console.log(user);
        console.log("User saved successfully");
        return res.redirect('/');
      }
    })
  },
  login: function(req, res){
    User.findOne({ email: req.body.email }, function(err, user){
      if(err){
        console.log(err);
      }
      if(user && user.login(req.body.password)){
        console.log('User logged in and redirect to wherever you decide');
      } else {
        console.log('generate JSON errors to send to Angular');
      }
      return res.redirect('/');
    })
  }
}
