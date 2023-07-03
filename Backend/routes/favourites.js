const express = require('express')
const favouritesRouter = express.Router()
const User = require('../Models/user');

// Get all favouites for a user

favouritesRouter.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user.favourites);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});


