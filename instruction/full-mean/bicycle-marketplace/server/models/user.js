let mongoose = require('mongoose');
let bcrypt = require('bcryptjs');

let UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name cannot be blank']
    },
    email: {
        type: String,
        required: [true, 'Email cannot be blank'],
        unique: [true, 'Email is already registered']
    },
    password: {
        type: String,
        required: [true, 'Password cannot be blank']
    },
    bikes: [{
       type: mongoose.Schema.Types.ObjectId,
       ref: 'Bike'
    }]
}, { timestamps: true });

UserSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
    next();
})

UserSchema.methods.authenticate = function(password){
    return bcrypt.compareSync(password, this.password);
}


mongoose.model('User', UserSchema);
