let mongoose = require('mongoose');
let User = mongoose.model('User');
let bcrypt = require('bcryptjs');

module.exports={
  new: function(req, res){
    return res.render('users/new.ejs')
  },

  create: function(req, res){
    User.create(req.body, function(err, user){
      if(err){
        console.log(err);

      }else{
        console.log('user saved successfully')
        return res.redirect('/')
      }
    })
  },

  login: function(req, res){
    User.findOne({email: req.body.email}, function(err, user){
      if(err){
        console.log(err, 'did not work');

      }
      if(user && user.authenticat(req.body.password)){
        console.log(user, 'yay it worked')
      }else{
        console.log('thats a no no')
      }
      return res.redirect('/');
    })
  }
}
