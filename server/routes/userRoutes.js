// implementng express as router to define all the routes
const express = require('express');
const router = express.Router();

// get users route
router.get('/', (req, res) => {
    res.status(200).json({message:'get users'})
});

// porst/ create users route
router.post('/', (req, res) => {
    res.status(200).json({message:'post users'})
});

// update users route
router.put('/:id', (req, res) => {
    res.status(200).json({message:`update user ${req.params.id}`})
});

// delete users route
router.delete('/:id', (req, res) => {
    res.status(200).json({message:`delete user ${req.params.id}`})
});

//exporting script
module.exports = router;