const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ 

    email: {
        type: String,
        required: true
    },
    
    firstName: {
        type: String,
        required: true
    },

     surname: {
        type: String,
        required: true
     },

     dateOfBirth: {
        type: Date,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },
    favourites: {
        type: Array,
        required: false
    },
    dateOfSignUp: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema, 'users')