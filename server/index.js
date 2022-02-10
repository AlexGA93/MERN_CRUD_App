// express dependencies
const express = require('express');
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleware');
const dotenv = require('dotenv').config();

// connecttion to MongoDB
const connectDB = require('./config/db');
connectDB();

// port assignation
const port = process.env.PORT | 5000;

const app = express();

//middleware to deal with data body
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use('/api/users', require('./routes/userRoutes'));

// middleware implementation
app.use(errorHandler);

app.listen(port, () => console.log(`Server running at port ${port}`));