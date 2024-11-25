

const express = require('express');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.models');

const router = express.Router();

// Registration route
router.post('/register',
    body('email').trim().isEmail().isLength({ min: 13 }),
    body('password').trim().isLength({ min: 5 }),
    body('username').trim().isLength({ min: 5 }),
    async (req, res) => {
      console.log("Request Body for Register:", req.body);  // Log incoming request body

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log("Validation Errors:", errors.array());  // Log validation errors
        return res.status(400).json({
          errors: errors.array(),
          message: 'Invalid data'
        });
      }

      const { username, email, password } = req.body;
      console.log("Received data - Username:", username, "Email:", email, "Password:", password);  // Log received data

      try {
        const hashPassword = await bcrypt.hash(password, 10);
        console.log("Hashed Password:", hashPassword);  // Log the hashed password

        // Create new user in the DB
        const newUser = await User.create({
          username,
          email,
          password: hashPassword
        });

        console.log("New User Created:", newUser);  // Log the user creation result
        res.json(newUser);
      } catch (err) {
        console.error("Error creating user:", err);  // Log any potential errors during user creation
        res.status(500).json({ message: 'Server error' });
      }
    }
);

// Login route
router.post('/login',
    body('username').trim().isLength({ min: 5 }),
    body('password').trim().isLength({ min: 5 }),
    async (req, res) => {
      console.log("Request Body for Login:", req.body);  // Log incoming request body

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log("Validation Errors:", errors.array());  // Log validation errors
        return res.status(400).json({
          error: errors.array(),
          message: 'Invalid data'
        });
      }

      const { username, password } = req.body;
      console.log("Received data - Username:", username, "Password:", password);  // Log received data

      try {
        const user = await User.findOne({ username });
        console.log("Found User:", user);  // Log the found user

        if (!user) {
          return res.status(400).json({
            message: 'Username is incorrect'
          });
        }

        const isMatch = await bcrypt.compare(password.trim(), user.password.trim());
        console.log("Password Match Result:", isMatch);  // Log password match result

        if (!isMatch) {
          return res.status(400).json({
            message: 'Password is incorrect'
          });
        }

        // Generate token
        const token = jwt.sign(
          { userId: user._id, email: user.email, username: user.username },
          process.env.JWT_SECRET, 
          { expiresIn: '1h' } // Set expiration for token (e.g., 1 hour)
        );
        console.log("Generated Token:", token); // Log the generated JWT token

        res.cookie('token', token, { httpOnly: true }); // Store token in cookie
        res.status(200).json({
          message: 'Logged in successfully',
          token: token,  // Optionally, you can return the token in response
        });
      } catch (error) {
        console.error("Login error:", error);  // Log any errors in the login process
        res.status(500).json({ message: 'Server error' });
      }
    }
);

module.exports = router;
