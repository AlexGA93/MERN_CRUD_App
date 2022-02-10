// asyc handler
const asyncHandler = require('express-async-handler');

// @desc    Get users
// @route   GET /api/users
// @access  private
const getUsers = asyncHandler(async (req, res) =>{
    res.status(200).json({message:'get users'});
});

// @desc    Create users
// @route   POST /api/users/:id
// @access  private
const postUsers = asyncHandler(async (req, res) =>{
    //error and exception handling
    if(!req.body.name){
        res.status(400)// .json({message:'Please add a name field'});
        throw new Error('Please add a name field')
    }
    res.status(200).json({message:'post users'});
});

// @desc    Update users
// @route   PUT /api/users/:id
// @access  private
const putUsers = asyncHandler(async (req, res) =>{
    res.status(200).json({message:`update user ${req.params.id}`});
});

// @desc    Delete users
// @route   DELETE /api/users?:id
// @access  private
const deleteUsers = asyncHandler(async (req, res) =>{
    res.status(200).json({message:`delete user ${req.params.id}`});
});

//exportin methods
module.exports = {getUsers, postUsers, putUsers, deleteUsers};