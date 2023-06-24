const express = require('express')
const router = express.Router()
const City = require('../Models/city')
const verifyToken = require('../middlewares/verifyToken');

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

router.get('/:id', verifyToken, async (req, res) => {

});

//Read All

router.get('/', verifyToken, async (req, res) => {

    try {
        const cities = await City.find()
        res.json(cities)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

//Update

router.patch('/:id', verifyToken, async (req, res) => {

});

//Delete

router.delete('/:id', verifyToken, async (req, res) => {

});

module.exports = router