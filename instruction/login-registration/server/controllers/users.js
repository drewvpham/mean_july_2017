let mongoose = require('mongoose');
let User = mongoose.model('User');
// let bcrypt = require('bcryptjs')

module.exports = {
	new: function(req, res){
		return res.render('users/new.ejs');
	},
	create: function(req, res){
		console.log(req.body);
		User.create(req.body, function(err, user){
			if(err){
				console.log(err);
			} else {
				console.log('user saved succesfully...')
				console.log(user)
				return res.redirect('/');
			}
		})
	},
	authenticate: function(req, res){
		//look up the email
		User.findOne({ email: req.body.email }, function(err, user){
			if(err){
				console.log(err);
			}
			else if(user && user.authenticate(req.body.password)){
				console.log('user authenticated and redirect to wherever');
			} else {
				console.log('generate JSON errors to send to angular')
			}
			return res.redirect(`/users/${user._id}/edit`);
		})
	},
	edit: function(req, res){
		User.findById(req.params.id, function(err, user){
			if(err){
				console.log(err);
			}
			return res.render('users/edit.ejs', { user: user });
		})
	},
	update: function(req, res){
		//look up the user object
		User.findByIdAndUpdate(req.params.id, { $set: req.body }, function(err, user){
			if(err){
				console.log(err);
			} else {
				console.log('user succesfully updated')
				console.log(user);
			}
			return res.redirect('/')
		})
	}
}








