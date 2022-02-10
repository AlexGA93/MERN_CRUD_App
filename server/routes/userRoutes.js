// implementng express as router to define all the routes
const express = require('express');
const router = express.Router();

// importing controllers
const {getUsers, postUsers, putUsers, deleteUsers} = require('../controllers/usersController');

// groups of routes
router.route('/').get(getUsers).post(postUsers);
router.route('/:id').put(putUsers).delete(deleteUsers);

// // get users route
// router.get('/', getUsers);

// // porst/ create users route
// router.post('/', postUsers);

// // update users route
// router.put('/:id', putUsers);

// // delete users route
// router.delete('/:id', deleteUsers);

//exporting script
module.exports = router;