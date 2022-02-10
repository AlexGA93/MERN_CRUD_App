// express dependencies
const express = require('express');
const dotenv = require('dotenv').config();

// port assignation
const port = process.env.PORT | 5000;

const app = express();

//middleware to deal with data body
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use('/api/users', require('./routes/userRoutes'));

app.listen(port, () => console.log(`Server running at port ${port}`));