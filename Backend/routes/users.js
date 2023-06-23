const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRouter = express.Router();
const User = require('../Models/user');

// User submits signup form on front end
// Front end sends a post request to /users
// We create a new user in the database with the hashed password using bcrypt
// We generate a JWT and send it back to the front end
// Front end stores the JWT in local storage
// We create user read & write permissions to the user in the database
// Once user is logged in, we can use the JWT to verify that they are logged in
// We can use the JWT to verify that the user has read & write permissions


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

    // The below code needs to be refactored to be issued to users that log in and not users that sign up
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
