
const express = require('express');
const router = express.Router();

// importing controllers
const {
    registerUser,
    loginUser,
    getMe,
  } = require('../controllers/usersController')
// groups of routes
router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', getMe)

//exporting script
module.exports = router;