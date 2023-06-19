const express = require('express')
const guideRouter = express.Router()
const Guide = require('../Models/guide')

//Create

guideRouter.post('/', async (req, res) => {
    
        const guide = new Guide({
            title: req.body.title,
            author: req.body.author,
            location: req.body.location,
            imageURL: req.body.imageURL,
            overview: req.body.overview,
            experience: req.body.experience,
            reviews: req.body.reviews
        });
});

//Read

guideRouter.get('/:id', async (req, res) => {

});

//Read All

guideRouter.get('/', async (req, res) => {

    try {
        const cities = await City.find()
        res.json(cities)
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