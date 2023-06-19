const express = require('express')
const router = express.Router()
const City = require('../Models/city')

//Create

router.post('/', async (req, res) => {

    const city = new City({
        title: req.body.title,
        imageURL: req.body.imageURL,
        activityType: req.body.activityType
    });
    try {
        const newCity = await city.save()
        res.status(201).json(newCity)
    } catch (err) { 
        res.status(400).json({ message: err.message })
    }
});

//Read

router.get('/:id', async (req, res) => {

});

//Read All

router.get('/', async (req, res) => {

    try {
        const cities = await City.find()
        res.json(cities)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

//Update

router.patch('/:id', async (req, res) => {

});

//Delete

router.delete('/:id', async (req, res) => {

});

module.exports = router