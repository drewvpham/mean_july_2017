let mongoose= require('mongoose');

let NoteSchema = new mongoose.Schema({
    note: { type: String}
}, {timestamps: true});


mongoose.model("Note", NoteSchema);
