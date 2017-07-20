let mongoose = require('mongoose');

let BikeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title cannot be blank']
    },
    description: {
        type: String,
        required: [true, 'Description cannot be blank'],
        maxlength: [200, 'Description cannot exceed 200 characters']
    },
    location: {
        type: String,
        required: [true, 'Location cannot be blank']
    },
    price: {
        type: Number,
        min: [1, 'Price must be atleast $1.00']
    },
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

mongoose.model('Bike', BikeSchema);