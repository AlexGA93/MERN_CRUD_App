// using mongoose we create a model to our users structure
const mongoose = require('mongoose');

// Schema
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a proper user name']
    },
    second_name: {
        type: String,
        required: [true, 'Please add a proper user second name']
    },
    age: {
        type: Number,
        required: [true, 'Please add a user age']
    },
    bio: {
        type: String
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);