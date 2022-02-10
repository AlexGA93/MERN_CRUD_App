// connect to Mongo database by mongoose
const mongoose = require('mongoose');

// connect fucntion
const connectDB = async () => {
    try {
        // connection by URI
        const connect = await mongoose.connect(process.env.MONGO_URI);

        // confirmation with 'colors' module
        console.log(`MongoDB Connected: ${connect.connection.host}`.cyan.underline);

    } catch (error) {
        console.log(error.red.underline);
        // close the process
        process.exit(1);
    }
}; 

module.exports = connectDB;