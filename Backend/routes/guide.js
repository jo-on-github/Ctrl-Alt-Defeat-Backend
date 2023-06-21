const express = require('express')
const guideRouter = express.Router()
const Guide = require('../Models/guide');
const city = require('../Models/city');

//Create

guideRouter.post('/', async (req , res) => {
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
                reviews: req.body.reviews,
                activityType: req.body.activityType,
       
            });
            
            const savedGuide = await guide.save();
            res.status(200).send();
            
        } catch (err) {
            res.status(400).json({ message: err.message })
        }
    });

//Read by ID

guideRouter.get('/', async (req, res) => {

    try {
        const chosenGuide = await Guide.find({_id: req.query._id})
        return res.json(chosenGuide)
    }
           
        catch (err) {
        res.status(500).json({ message: err.message })
    }
});

//Read All

guideRouter.get('/', async (req, res) => {

    try {
        const guides = await Guide.find({city: req.query.city});
        res.json(guides)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

//Update

guideRouter.patch('/:id', async (req, res) => {

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