const express = require('express')
const router = express.Router()
const City = require('../Models/city')

//Create

router.post('/', async (req, res) => {

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