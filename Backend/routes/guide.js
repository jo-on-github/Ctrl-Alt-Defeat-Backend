const express = require('express')
const guideRouter = express.Router()
const Guide = require('../Models/guide');
const city = require('../Models/city');
const verifyToken = require('../middlewares/verifyToken');


//Create

guideRouter.post('/', verifyToken, async (req , res) => {
    console.log(req.body)
        
    try {
        const guide = new Guide({
            city: req.body.city,
            title: req.body.title,
            author: req.body.author,
            location: req.body.location,
            imageURL: req.body.imageURL,
            overview: req.body.overview,
            experience: req.body.experience,
            activityType: req.body.activityType,
            userId: req.body._id,
            budget: req.body.budget,
            highlights: req.body.highlights,
          });
            
            const savedGuide = await guide.save();
            res.status(200).send();
            
        } catch (err) {
            res.status(400).json({ message: err.message })
        }
    });

    //Read by ID
    
    guideRouter.get('/:id', verifyToken, async (req, res) => {
    
        try {
            const guides = await Guide.findById(req.params.id);
            res.json(guides)
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });
//Read by city

guideRouter.get(`/guide?city=${city}`,  async (req, res) => {
    try {
        const guides = await Guide.find({city: req.query.city});
        res.json(guides)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



//Update


guideRouter.patch('/:id', verifyToken, async (req, res) => {


    try {
        const id = req.params.id;
        const newData = req.body;
    
        // Find the guide with the given ID and update its data
        const guide = await Guide.findByIdAndUpdate(id, newData, { new: true });
    
        if (!guide) {
          return res.status(404).json({ message: 'Guide not found' });
        }
    
        // Return the updated guide as JSON
        res.json(guide);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }

});

//Delete

guideRouter.delete('/:id', async (req, res) => {
    const guide = await Guide.findById(req.params.id)
    if (guide == null) {
        return res.status(404).json({ message: 'Cannot find guide' })
    }
    try {
        await guide.deleteOne( { _id: guide })
        res.json({ message: 'Deleted Guide' })
    } catch (err) { 
        res.status(500).json({ message: err.message })
    }
});




module.exports = guideRouter