
const express = require('express');
const router = express.Router();

// importing controllers
const {
  registerUser,
  loginUser,
  getMe,
} = require('../controllers/usersController');

// middleware
const { protect } = require('../middleware/authMiddleware');

// groups of routes
router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)

//exporting script
module.exports = router;