const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRouter = express.Router();
const User = require('../Models/user');
const verifyToken = require('../middlewares/verifyToken');


// User submits signup form on front end
// Front end sends a post request to /users
// We create a new user in the database with the hashed password using bcrypt
// We generate a JWT and send it back to the front end
// Front end stores the JWT in local storage
// We create user read & write permissions to the user in the database
// Once user is logged in, we can use the JWT to verify that they are logged in
// We can use the JWT to verify that the user has read & write permissions


// Signup
userRouter.post('/', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

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

    // // The below code needs to be refactored to be issued to users that log in and not users that sign up
    // // Generate JWT
    // const token = jwt.sign(
    //   { userId: newUser._id }, // Include relevant information in the payload
    //   process.env.JWT_SECRET, // Use a secret key for signing the token
    // );

    res.status(201).json({ newUser });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Login

userRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user in the database based on the provided email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare the provided password with the hashed password stored in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate a JWT
    const token = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1m' });

    // Send the JWT to the client
    res.status(200).json({ token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'An error occurred during login' });
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
