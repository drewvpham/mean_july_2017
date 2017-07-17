let mongoose = require('mongoose');
let Person = mongoose.model('Person');

module.exports = {
  index: function(req, res){
    Person.find({}, function(err, person){
      return res.json(person);
    })
  },
  create: function(req, res){
    Person.create({name: req.params.name}, function(err, person){
      if(err){
        console.log(err);
        }
      else{
        console.log("Person added to database successfully")
        console.log(person);
        return res.redirect('/');
      }
    })
  },
  remove: function(req, res){
    Person.remove({name: req.params.name}, function(err, person){
      if(err){
        console.log(err);
        }
      else{
        console.log("Person removed from database successfully")
        return res.redirect('/');
      }
    })
  },
  show: function(req, res){
    Person.findOne({name: req.params.name}, function(err, person){
      if(err){
        console.log(err);
        }
      else{
        console.log("Person retrieved from database successfully")
        return res.json(person);
      }
    })
  }
};
