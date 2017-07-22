let mongoose = require('mongoose');
let Note = mongoose.model("Note");

class NotesController {
  create(req, res){
    Note.create(req.body, (err, note) => {
        if(err){ return res.json(err)}
        return res.json(note)
    })
  }

  index(req, res){
    Note.find({}).exec()
  }
}

module.exports = new NotesController();
