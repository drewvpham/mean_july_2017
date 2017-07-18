let mongoose = require('mongoose');

let PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    }
  }, { timestamps: false });

mongoose.model('Person', PersonSchema);
