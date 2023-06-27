const mongoose = require('mongoose');
const user = require('./user');

const guideSchema = new mongoose.Schema({ 

    city: {
        type: String,
        required: false
    },
    
    title: {
        type: String,
        required: true
    },
    
    author: {
        type: String,
        required: false,
        default: user.firstName + user.surname
    },
    //google link in upload a guide
    location: {
        type: String,
        required: true
    },

     imageURL: {
        type: String,
        required: false
     },

     overview: {
        type: String,
        required: true
     },

     experience: {
        type: String,
        required: true
        },

    activityType: {
        type: String,
        required: true
    },

    userId: {
        type: String,
        required: false,
    },

    budget: {
        type: String,
        required: true
    },

    highlights: {
        type: Array,
        required: false
    },
})

module.exports = mongoose.model('Guide', guideSchema)