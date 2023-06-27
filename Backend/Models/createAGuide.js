const mongoose = require('mongoose');
const user = require('./user');

const createAGuideSchema = new mongoose.Schema({ 

    title: {
        type: String,
        
        required: true
    },
    
    summary: {
        type: String,
        required: true
    },

     location: {
        type: String,
        required: true
     },

     typeOfActivity: {
        type: String,
        
        required: true
    },
    
    budget: {
        type: String,
        required: true
    },

     highlights: {
        type: Array,
        required: true
     },

     experience: {
        type: String,
        
        required: true
    },

    authorId: {
        type: String,
        required: true,
        default: user._id
    },  

})

module.exports = mongoose.model('CreatedGuide', createAGuideSchema)