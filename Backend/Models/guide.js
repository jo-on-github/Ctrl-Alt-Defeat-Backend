const mongoose = require('mongoose');

const guideSchema = new mongoose.Schema({ 

    city: {
        type: String,
        required: true
    },
    
    title: {
        type: String,
        
        required: true
    },
    
    author: {
        type: String,
        required: true
    },
    //google link in upload a guide
    location: {
        type: String,
        required: true
    },

     imageURL: {
        type: String,
        required: true
     },

     overview: {
        type: String,
        required: true
     },

     experience: {
        type: String,
        required: true
        },

    reviews: {
        type: String,
        required: true
    },

    activityType: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Guide', guideSchema)