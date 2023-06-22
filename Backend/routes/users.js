const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRouter = express.Router();
const User = require('../Models/user');

// Create
userRouter.post('/', async (req, res) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    const user = new User({
      email: req.body.email,
      firstName: req.body.firstName,
      surname: req.body.surname,
      dateOfBirth: req.body.dateOfBirth,
      password: hashedPassword, // Store the hashed password
      location: req.body.location,
      dateOfSignUp: req.body.dateOfSignUp
    });

    const newUser = await user.save();

    // Generate JWT
    const token = jwt.sign(
      { userId: newUser._id }, // Include relevant information in the payload
      process.env.JWT_SECRET, // Use a secret key for signing the token
    );

    res.status(201).json({ newUser, token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Read by ID
userRouter.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = userRouter;
