
const asyncHandler = require('express-async-handler')
const User = require('../models/usersModels')
// jwt
const jwt = require('jsonwebtoken');
// Hashing passwords
const bcrypt = require('bcryptjs');



// @desc    Register new User
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler (async (req, res) => {

    const {name, email, password} = req.body;

    // validation
    if(!name || !email || !password){
        res.status(400);
        throw new Error ('Please add all the fields');
    }

    // user exists?
    const userExists = await User.findOne({email});
    if(userExists){
        res.status(400);
        throw new Error ('User already exists');
    }

    // hash password
    

    res.json({message: 'Register User'});
});

// @desc    Login User
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    res.json({message: 'Login User'});
});

// @desc    Get User data
// @route   GET /api/users/me
// @access  Public
const getMe = asyncHandler(async (req, res) => {
    res.json({message: 'Get me'});
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
}