
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
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create user
    const user = await User.create({name, email, password: hashedPassword});

    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: JWT(user._id)
        });
    }else {
        res.status(400)
        throw new Error('Invalid user data');
    }
});

// @desc    Authenticate User
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    // extract body request data
    const {email, password} = req.body;
    //find for user email
    const user = await User.findOne({email});

    if(user && (
        await bcrypt.compare(password, user.password)
    )){
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: JWT(user._id)
        });
    }else{
        res.status(400)
        throw new Error('Invalid user credentials');
    }
});

// @desc    Get User data
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
    res.json({message: 'Get me'});
});

// Generate JWT
const JWT = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, { expiresIn: '30d'});
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
}