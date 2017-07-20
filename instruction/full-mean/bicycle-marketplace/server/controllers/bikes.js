let mongoose = require('mongoose');
let Bike = mongoose.model('Bike');
let User = mongoose.model('User');

module.exports = {
    index: function(req, res){
        Bike.find({}).populate('user').exec(function(err, bikes){
            if(err){
                return res.json(err);
            }
            return res.json(bikes);
        })
    },
    create: function(req, res){
        Bike.create(req.body, function(err, bike){
            if(err){
                return res.json(err);
            }
            User.findByIdAndUpdate(req.body.user, { $push: { bikes: bike._id } }, { new: true }, function(err, user){
                if(err){
                    return res.json(err);
                }
                return res.json(bike)
            })
        })
    },
    update: function(req, res){
        Bike.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, function(err, bike){
            if(err){
                return res.json(err);
            }
            return res.json(bike);
        })
    },
    destroy: function(req, res){
        Bike.findByIdAndRemove(req.params.id, function(err, bike){
            if(err){
                return res.json(err);
            }
            return res.json(bike);
        })
    }
}