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

//Read

guideRouter.get('/:id', async (req, res) => {

});

//Read All

guideRouter.get('/', async (req, res) => {

    try {
        const guides = await Guide.find()
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

});

module.exports = guideRouter