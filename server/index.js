// express dependencies
const express = require('express');
const dotenv = require('dotenv').config();

// port assignation
const port = process.env.PORT | 5000;


const app = express();
// first route
app.get('/api/users', (req, res) => {
    res.status(200).json({message:'get users'})
});


app.listen(port, () => console.log(`Server running at port ${port}`));