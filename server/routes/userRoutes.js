
const express = require('express');
const router = express.Router();

// importing controllers
const {getUsers, postUsers, putUsers, deleteUsers} = require('../controllers/usersController');

// groups of routes
router.route('/').get(getUsers).post(postUsers);
router.route('/:id').put(putUsers).delete(deleteUsers);

//exporting script
module.exports = router;