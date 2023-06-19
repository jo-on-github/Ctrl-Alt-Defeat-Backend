const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({ 

    title: {
        type: String,
        
        required: true
    },
    
    imageURL: {
        type: String,
        required: true
    },

     activityType: {
        type: String,
        required: true
     }

})

module.exports = mongoose.model('City', citySchema)