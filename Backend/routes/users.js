const express = require('express')
const userRouter = express.Router()
const User = require('../Models/user');


//Create
userRouter.post('/', async (req , res) => {

    const user = new User({
        email: req.body.email,
        firstName: req.body.firstName,
        surname: req.body.surname,
        dateOfBirth: req.body.dateOfBirth,
        password: req.body.password,
        location: req.body.location,
        dateOfSignUp: req.body.dateOfSignUp
    })

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
});

//Read by ID

userRouter.get('/:id', async (req, res) => {
    
        try {
            const user = await User.findById(req.params.id);
            res.json(user)
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
});

module.exports = userRouter