// using mongoose we create a model to our users structure
const mongoose = require('mongoose');

// Schema
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a proper user name']
    },
    email: {
        type: String,
        required: [true, 'Please add a proper user email']
    },
    password: {
        type: String,
        required: [true, 'Please add a user password']
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);